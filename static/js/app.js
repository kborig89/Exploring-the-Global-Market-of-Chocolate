var jsonData = "data/samples.json";

function init() {
// Fetch the JSON data and console log it
    d3.json(jsonData).then(function(data) {
        console.log(data);
        // get sample values data
        // console.log(data["samples"][0]["sample_values"]);
        // dynamically add data names/ids to the dropdown mean
        var names = data.names;

        names.forEach((name) => {
            d3.select("#selDataset").append("option").text(name);
        })
        // display default values
        plotGraph(data.names[0]);
        getData(data.names[0]);
    });
}

init();

// function that gets the data based on ID/name
function getData(id) {
    d3.json(jsonData).then(function(data) {
        var metaResult = data.metadata;
        //console.log(metaResult);
        var result = metaResult.filter(meta => meta.id.toString() === id)[0];
        var demoInfo = d3.select("#sample-metadata");
        demoInfo.html("");
        Object.entries(result).forEach((key) => {   
            demoInfo.append("h5").text(key[0] + ": " + key[1] + "\n");
        });
    });
}

function plotGraph(id) {
    d3.json(jsonData).then(function(data) {
        var index = data.samples.findIndex(sample => sample.id === id);
        console.log(`The index in data.samples array is: ${index}.`);
        var sampleValues = data.samples[index].sample_values.slice(0,10).reverse();
        var labels = data.samples[index].otu_labels.slice(0,10);
        // get top 10 otu ids and reverse it
        var otu_top_10 = (data.samples[index].otu_ids.slice(0, 10)).reverse();
        // map otu id to OTU + id
        var otu_id = otu_top_10.map(d => "OTU " + d);
        // get the top 10 OTU labels
        var labels = data.samples[index].otu_labels.slice(0,10);

        // create bar chart data trace
        var trace = {
            x: sampleValues,
            y: otu_id,
            text: labels,
            marker: {
            color: 'blue'},
            type:"bar",
            orientation: "h",
        };
        var data_bar = [trace];

        // set the plotly layouts
        var layout_bar= {
            title: "Top 10 OTU",
            yaxis:{
                tickmode:"linear",
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
        };
        // create the bar chart
        Plotly.newPlot("bar", data_bar, layout_bar);

        // Creat data trace for bubble chart
        var trace1 = {
            x: data.samples[index].otu_ids,
            y: data.samples[index].sample_values,
            mode: "markers",
            marker: {
                size: data.samples[index].sample_values,
                color: data.samples[index].otu_ids
            },
            text:  data.samples[index].otu_labels
        };
        var data_bubble = [trace1];

        // set the plotly layout
        var layout_bubble = {
            xaxis:{title: "OTU ID"},
            height: 600,
            width: 1000
        };

        // create the bubble plot
        Plotly.newPlot("bubble", data_bubble, layout_bubble); 
    });
}


// optionChange function that populates data and graph when event is triggered
function optionChanged(id) {
    plotGraph(id);
    getData(id);
}
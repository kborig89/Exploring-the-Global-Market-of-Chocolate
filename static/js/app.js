// Plotly for the  Beans

// function buildMetadata(location) {

//   // @TODO: Complete the Following Function that Builds the Metadata Panel

//   // Use `d3.json` to Fetch the Metadata for a Sample
//   d3.json(`/metadata/${sample}`).then((data) => {
//     // Use d3 to Select the Panel with id of `#sample-metadata`
//     var PANEL = d3.select("#sample-metadata");
//     // Use `.html("") to Clear any Existing Metadata
//     PANEL.html("");
//     // Use `Object.entries` to Add Each Key & Value Pair to the Panel
//     // Hint: Inside the Loop, Use d3 to Append New Tags for Each Key-Value in the Metadata
//     Object.entries(data).forEach(([key, value]) => {
//       PANEL.append("h6").text(`${key}:${value}`);
//     })
//     // BONUS: Build the Gauge Chart
//     buildGauge(data.WFREQ);
//   })
// }

function buildCharts(location) {
  // @TODO: Use `d3.json` to Fetch the Sample Data for the Plots
  d3.json(`/manufacturing/${location}`).then((cacao_data) => {
    //console.log(cacao_data);
    company_location_data = cacao_data.filter(cacao_data => cacao_data[5] === location);
    console.log(company_location_data);
    
    // var index = data.samples.findIndex(sample => sample.id === id);
    // console.log(`The index in data.samples array is: ${index}.`);
    // var sampleValues = data.samples[index].sample_values.slice(0, 10).reverse();
    // var labels = data.samples[index].otu_labels.slice(0, 10);
    // // get top 10 otu ids and reverse it
    // var otu_top_10 = (data.samples[index].otu_ids.slice(0, 10)).reverse();
    // // map otu id to OTU + id
    // var otu_id = otu_top_10.map(d => "OTU " + d);
    // // get the top 10 OTU labels
    // var labels = data.samples[index].otu_labels.slice(0, 10);

    // // create bar chart data trace
    // var trace = {
    //   x: sampleValues,
    //   y: otu_id,
    //   text: labels,
    //   marker: {
    //     color: 'blue'
    //   },
    //   type: "bar",
    //   orientation: "h",
    // };
    // var data_bar = [trace];

    // // set the plotly layouts
    // var layout_bar = {
    //   title: "Top 10 OTU",
    //   yaxis: {
    //     tickmode: "linear",
    //   },
    //   margin: {
    //     l: 100,
    //     r: 100,
    //     t: 100,
    //     b: 30
    //   }
    // };
    // // create the bar chart
    // Plotly.newPlot("bar", data_bar, layout_bar);

    // // Creat data trace for bubble chart
    // var trace1 = {
    //   x: data.samples[index].otu_ids,
    //   y: data.samples[index].sample_values,
    //   mode: "markers",
    //   marker: {
    //     size: data.samples[index].sample_values,
    //     color: data.samples[index].otu_ids
    //   },
    //   text: data.samples[index].otu_labels
    // };
    // var data_bubble = [trace1];

    // // set the plotly layout
    // var layout_bubble = {
    //   xaxis: { title: "OTU ID" },
    //   height: 600,
    //   width: 1000
    // };

    // // create the bubble plot
    // Plotly.newPlot("bubble", data_bubble, layout_bubble);
  })
}

function init() {
  // Grab a Reference to the Dropdown Select Element
  var dropdown = d3.select("#selDataset");

  // Use the List of Sample Names to Populate the Select Options
  d3.json("/data").then((data) => {
    console.log(data);
    var companyLocation = [];

    data.forEach((point) => {
      if (companyLocation.indexOf(point[5]) > -1) {
        // do nothing
      } else {
        companyLocation.push(point[5]);
      };
    });
    companyLocation.forEach((location) => {
      dropdown.append("option").text(location).property("value", location);
    });
    console.log(companyLocation);
    // Use the First Sample from the List to Build Initial Plots

    buildCharts(companyLocation[0]);
    //buildMetadata(companyLocation[0]);
  })
}

function optionChanged(new_location) {
  // Fetch New Data Each Time a New Sample is Selected
  buildCharts(new_location);
  // buildMetadata(new_location);
}

// Initialize the Dashboard
init();
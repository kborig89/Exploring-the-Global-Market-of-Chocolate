// Plotly for the  Beans

function buildMetadata(location) {

    // @TODO: Complete the Following Function that Builds the Metadata Panel
  
    // Use `d3.json` to Fetch the Metadata for a Sample
      d3.json(`/metadata/${sample}`).then((data) => {
          // Use d3 to Select the Panel with id of `#sample-metadata`
          var PANEL = d3.select("#sample-metadata");
          // Use `.html("") to Clear any Existing Metadata
          PANEL.html("");
          // Use `Object.entries` to Add Each Key & Value Pair to the Panel
          // Hint: Inside the Loop, Use d3 to Append New Tags for Each Key-Value in the Metadata
          Object.entries(data).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key}:${value}`);
          })
          // BONUS: Build the Gauge Chart
            buildGauge(data.WFREQ);
      })
  }
  
  function buildCharts(location) {
 
  
    // @TODO: Use `d3.json` to Fetch the Sample Data for the Plots
    d3.json(`/manufacturing/${location}`).then((cacao_data) => {
      // @TODO: Build a Bubble Chart Using the Sample Data
      var company_location = cacao_data.company_location;
      var rating = cacao_data.rating;
      var company = cacao_data.company;
      var review_date = cacao_data.review_date;
      var bean_origin_country = caao_data.bean_origin_country;

      // @TODO: Build a Pie Chart
      let bubbleLayout = {
        margin: { t: 0 },
        hovermode: "closests",
        xaxis: { title: "OTU ID"}
      }
  
      let bubbleData = [
        {
          x: company_location,
          y: rating,
          text: company,
          mode: "markers",
          marker: {
            size: rating,
            color: company_location,
            colorscale: "Earth"
          }
        }
      ]
  
      Plotly.plot("bubble", bubbleData, bubbleLayout);
  
      // HINT: Use slice() to Grab the Top 10 sample_values,
      // otu_ids, and otu_labels (10 Each)
  //     let pieData = [
  //       {
  //         values: sample_values.slice(0, 10),
  //         labels: otu_ids.slice(0, 10),
  //         hovertext: otu_labels.slice(0, 10),
  //         hoverinfo: "hovertext",
  //         type: "pie"
  //       }
  //     ];
      
  //     let pieLayout = {
  //       margin: { t: 0, l: 0 }
  //     };
  
  //     Plotly.plot("pie", pieData, pieLayout)
  })
  }
  
  function init() {
    // Grab a Reference to the Dropdown Select Element
    var selector = d3.select("#selDataset");
  
    // Use the List of Sample Names to Populate the Select Options
    d3.json("/manufacturing").then((companyLocation) => {
      companyLocation.forEach((location) => {
        dropdown.append("option").text(location).property("value", location);
      })
  
      // Use the First Sample from the List to Build Initial Plots
      
      buildPlot(location[0]);
      buildMetadata(location[0]);
    })
  }
  
  function optionChanged(new_location) {
    // Fetch New Data Each Time a New Sample is Selected
    buildPlot(new_location);
    buildMetadata(new_location);
  }

   // Initialize the Dashboard
   init();
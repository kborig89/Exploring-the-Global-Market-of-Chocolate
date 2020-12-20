# Project2-Team5
Exploring the Global Market of Chocolate 

Team 5 Members
Vasudha Nair
Kathryn Buckwalter
Mark Gu

We have created a website for entrepreneurs and potential investors interested
in the Chocolate industry. In our website, we have provided basic competitive information about key aspects of the industry-
1. The best countries to source raw materials
2. Get to know the most important global manufacturers and what type of beans they use in
their manufacturing process
3. Establish if there’s a correlation between the origin of the bean and the quality of the
final product
4. Which markets are more specialized in manufacturing chocolate
5. Explore the relationship between the “purity” of the chocolate and the quality of the final
product

The index html page shows the summary of the content included in the webpage with the Home, Marketplace, Bean , Manufacturing , Data and Map buttons.
a) The button for the Marketplace leads to the page showing table that can be filtered by year, country of the Company location, company name and chocolate ratings.
b) The Bean button leads to the page showing various visualizations namely
i) Bean Country of Origin Ratings from 2006-2017
ii) Alluvial Year and Bean Type with rating as size of line
iii) Dendrogram of Ratings by Bean Type
iv) Circle Cluster of Rating by Bean Type
from 2006-2017.
All of these visualizations have been created using the Raw Graphs, an open source data visualization framework built with the goal of making the visual representation of complex data easy for everyone.
c) The Manufacturing button links to the page showing the company country location to be chosen from the dropdown menu and gives information about the cocoa bean and the average ratings.
d) The Data button links to the page showing the cleaned data that was obtained from Jupyter notebook. 
e) The Map button links to the page showing a leaflet visualization of the average ratings across the different countries in the world.
The Dashboard for the Global Market of Chocolate displays all of the above when the Flask API is run.The Flask API renders the index.html file to render the homepage and for the Marketplace, Bean , Manufacturing , Data and Map, the respective routes are designated in the Flask API application.


import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template

app = Flask(__name__)


#################################################
# Database Setup
#################################################

engine = create_engine("sqlite:///cacao_bean.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
cacao_table = Base.classes.cacao_clean_withbean


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


 @app.route("/manufacturing/<location>")
    return render_template("manufacturing.html")
def manufacturing(location):
     """Return a list of sample names."""
     """Return the MetaData for a given sample."""
    sel = [
         cacao_table.company_location,
         cacao_table.rating,
         cacao_table.company,
         cacao_table.review_date,
         cacao_table.bean_origin_country
    
     ]

     results = db.session.query(*sel).filter(cacao_table.company_location == location).all()

     # Create a dictionary entry for each row of metadata information
     cacao_data = {}
     for result in results:
         cacao_data["company_location"] = result[0]
         cacao_data["rating"] = result[1]
         cacao_data["company"] = result[2]
         cacao_data["review_date"] = result[3]
         cacao_data["bean_origin_country"] = result[4]
        

    print(cacao_data)
    return jsonify(cacao_data)


# def manufacturing(location):
#     """Return `otu_ids`, `otu_labels`,and `sample_values`."""
#     stmt = db.session.query(Samples).statement
#     df = pd.read_sql_query(stmt, db.session.bind)

#     # Filter the data based on the sample number and
#     # only keep rows with values above 1
#     cacao_data = df.loc[df[sample] > 1, ["company_location", "rating", "company", location]]
#     cacao_data.sort_values(by=location, inplace=True, ascending=False)
#     # Format the data to send as json
#     data = {
#         "company_location": cacao_data.company_location.values.tolist(),
#         "rating": cacao_data.rating.values.tolist(),
#         "company": cacao_data.rating.values.tolist(),
#     }
#     return jsonify(data)
 

 @app.route("/bean")
 def sourcing():
sel = [
         cacao_table.specific_bean_origin,
         cacao_table.bean_origin_country,
         cacao_table.rating,
         cacao_table.bean_type,

    
     ]
    results = db.session.query(*sel).filter(cacao_table.company_location == location).all()

     # Create a dictionary entry for each row of metadata information
     cacao_data = {}
     for result in results:
         cacao_data["company_location"] = result[0]
         cacao_data["rating"] = result[1]
        

     print(cacao_data)
     return jsonify(cacao_data)

    


if __name__ == "__main__":
    app.run()

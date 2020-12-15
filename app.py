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
#Samples_Metadata = Base.classes.


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


# @app.route("/manufacturing")
# def names():
#     """Return a list of sample names."""
#     return jsonify(list(df.columns)[2:])


# @app.route("/market")
# def names():
#     """Return a list of sample names."""
#     return jsonify(list(df.columns)[2:])


# @app.route("/sourcing")
# def names():
#     """Return a list of sample names."""
#     return jsonify(list(df.columns)[2:])


# @app.route("/metadata/<sample>")
# def sample_metadata(sample):


if __name__ == "__main__":
    app.run()

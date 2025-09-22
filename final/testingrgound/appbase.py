import requests
import googlemaps
import cv2
import numpy as np
from lwcc import LWCC
import matplotlib.pyplot as plt
from flask import Flask,redirect,request, jsonify,session,render_template,session
import folium
from folium.plugins import HeatMap


app = Flask(__name__,template_folder='templates')
app.secret_key= '2ke3j4ksnda09230-1wpoidjas'
@app.route('/')

def index():
    return render_template("landing.html")

@app.route('/main')
def main():
    
    return render_template("ui3.html")

if __name__=='__main__':
    app.run(host='0.0.0.0', debug=True)
import requests
import googlemaps
from flask import Flask,redirect,request, jsonify,session,render_template,session
import urllib.parse
import json
from datetime import datetime,timedelta
import random
from random import randint


gmaps = googlemaps.Client(key='AIzaSyAFMlni7jQLplsf5O2pR7w8vuncd7iex5E')

app = Flask(__name__,template_folder='templates')
app.secret_key= '2ke3j4ksnda09230-1wpoidjas'

CLIENT_ID ='2daaa2f6ecc14b238ee438eef0846248'
CLIENT_SECRET = 'ca96585bc42c49208cb5b6497b8c30bb'
REDIRECT_URL='http://localhost:5000/callback'

AUTH_URL='https://accounts.spotify.com/authorize'
TOKEN_URL='https://accounts.spotify.com/api/token'
API_BASE_URL='https://api.spotify.com/v1/'
 

import folium
from folium.plugins import HeatMap
import googlemaps
import random

# Step 1: Initialize the Google Maps client
gmaps = googlemaps.Client(key='AIzaSyAFMlni7jQLplsf5O2pR7w8vuncd7iex5E')

# Step 2: Sample data or retrieve coordinates via Google Maps API
# Example: Get coordinates for some locations 
# (latitude, longitude) with weight values (e.g., frequency of events

locations =[ 
(12.971108572296986, 79.15940316908683, 50),  # TT weight = 50
    (12.971491309481976, 79.16361375225618, 30),  # SJT, weight = 30
    (12.972144346724008, 79.16626222563727, 70),   # PRP, weight = 70
    (12.968846085887442, 79.15591069700324, 40),    # Main Gate, weight = 40
    (12.969755809858295, 79.15544682665289, 60)  
    ]

# You could also use the Google Maps API to get coordinates from addresses, for example:
# geocode_result = gmaps.geocode("1600 Pennsylvania Ave NW, Washington, DC 20500")

# Step 3: Create a base map
m = folium.Map(location=[37.7749, -122.4194], zoom_start=5)

# Step 4: Add the Weighted HeatMap layer
# Each location is a tuple of (latitude, longitude, weight)
heat_data = []

for lat, lon, weight in locations:
    heat_data.append([lat, lon, weight])  # Weight is added here

HeatMap(heat_data, min_opacity=0.2, max_val=100, radius=15, blur=25).add_to(m)

# Step 5: Save map as HTML and open in browser
m.save("weighted_heatmap.html")

print("Weighted Heatmap saved as 'weighted_heatmap.html'. Open this file in your browser.")

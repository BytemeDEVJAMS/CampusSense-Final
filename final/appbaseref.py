import requests
import googlemaps
import cv2
import numpy as np
from lwcc import LWCC
import matplotlib.pyplot as plt
from flask import Flask,redirect,request, jsonify,session,render_template,session
import folium
from folium.plugins import HeatMap
import threading
import time

app = Flask(__name__,template_folder='templates')
app.secret_key= '2ke3j4ksnda09230-1wpoidjas'



i = 1

def my_function():
    global i
    i +=1
    if i%3==0:
        locations =[ 
        [12.971108572296986, 79.15940316908683, 50],  # TT weight = 50
            [12.971491309481976, 79.16361375225618, 40],  # SJT, weight = 30
            [12.972144346724008, 79.16626222563727, 70],   # PRP, weight = 70
            [12.968846085887442, 79.15591069700324, 40],    # Main Gate, weight = 40
            [12.969755809858295, 79.15544682665289, 60],
            [12.969758899759025, 79.15865984244726,40] ,
            [12.970244390534692, 79.15880307561467,80] ,
            [12.971080635649301, 79.16002566334092,30]
            ]
    elif i%3==1:
        locations =[ 
        [12.971108572296986, 79.15940316908683, 60],  # TT weight = 50
            [12.971491309481976, 79.16361375225618, 30],  # SJT, weight = 30
            [12.972144346724008, 79.16626222563727, 40],   # PRP, weight = 70
            [12.968846085887442, 79.15591069700324, 80],    # Main Gate, weight = 40
            [12.969755809858295, 79.15544682665289, 30],
            [12.969758899759025, 79.15865984244726,70] ,
            [12.970244390534692, 79.15880307561467,30] ,
            [12.971080635649301, 79.16002566334092,50]
            ]
    elif i%3==2:
        locations =[ 
        [12.971108572296986, 79.15940316908683, 80],  # TT weight = 50
            [12.971491309481976, 79.16361375225618, 20],  # SJT, weight = 30
            [12.972144346724008, 79.16626222563727, 60],   # PRP, weight = 70
            [12.968846085887442, 79.15591069700324, 30],    # Main Gate, weight = 40
            [12.969755809858295, 79.15544682665289, 77],
            [12.969758899759025, 79.15865984244726,35] ,
            [12.970244390534692, 79.15880307561467,55] ,
            [12.971080635649301, 79.16002566334092,20]
            ]

    # Center map around Palo Alto
    m = folium.Map(location=[12.968846085887442, 79.15591069700324], zoom_start=13)

    # Prepare heat data
    heat_data = [[lat, lon, pop] for lat, lon, pop in locations]

    # Add HeatMap layer
    HeatMap(
        heat_data,
        radius=20,          # smaller radius for town scale
        max_val=max(pop for _, _, pop in locations),
        blur=15,
        min_opacity=0.4
    ).add_to(m)

    # Save to HTML
    m.save("templates/heatmap.html")

def run_every_5_seconds():
    while True:
        my_function()
        time.sleep(5)

# Start background thread when app starts
thread = threading.Thread(target=run_every_5_seconds, daemon=True)
thread.start()






@app.route('/')

def index():
    return render_template("button.html")


@app.route('/main')

def main():
    
    

    
    return render_template("ui3.html")

if __name__=='__main__':
    app.run(host='0.0.0.0', debug=True)
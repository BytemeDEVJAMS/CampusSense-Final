import folium
from folium.plugins import HeatMap

# Town-level location data with estimated population (or weight)

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

print("Heatmap saved as 'palo_alto_town_heatmap.html'. Open it in your browser.")

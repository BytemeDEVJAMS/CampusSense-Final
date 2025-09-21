import folium
from folium.plugins import HeatMap

# Town-level location data with estimated population (or weight)

locations =[ 
(12.971108572296986, 79.15940316908683, 5000),  # TT weight = 50
    (12.971491309481976, 79.16361375225618, 3000),  # SJT, weight = 30
    (12.972144346724008, 79.16626222563727, 7000),   # PRP, weight = 70
    (12.968846085887442, 79.15591069700324, 4000),    # Main Gate, weight = 40
    (12.969755809858295, 79.15544682665289, 6000)  
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
m.save("heatmap.html")

print("Heatmap saved as 'palo_alto_town_heatmap.html'. Open it in your browser.")

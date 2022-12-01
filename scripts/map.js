let choropleth = document.getElementById("choropleth");
// console.log(choropleth);
let map = L.map("choropleth").setView([37.8, -96], 4);
// console.log("map = " + map);
let tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
// load GeoJSON from an external file
fetch(
  "https://raw.githubusercontent.com/NathanCarlini/countries/main/world.geo.json"
)
  .then((res) => res.json())
  .then((data) => {
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });

// function getcolor

// function syle feature

//https://github.com/NathanCarlini/countries/blob/main/countries.geojson
// https://gist.github.com/ThomasG77/c38e6b0ecfd014342aad
// http://n-carlini.mmi-limoges.fr/countries.geojson
// https://leafletjs.com/examples/choropleth/
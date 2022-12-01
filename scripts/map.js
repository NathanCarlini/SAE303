let indexes = [
  "Outdoor air pollution - OWID",
  "High systolic blood pressure",
  "Diet high in sodium",
  "Diet low in whole grains",
  "Alcohol use",
  "Diet low in fruits",
  "Unsafe water source",
  "Secondhand smoke",
  "Low birth weight",
  "Child wasting",
  "Unsafe sex",
  "Diet low in nuts and seeds",
  "Household air pollution from solid fuels",
  "Diet low in vegetables",
  "Low physical activity",
  "Smoking",
  "High fasting plasma glucose",
  "Air pollution",
  "High body-mass index",
  "Unsafe sanitation",
  "No access to handwashing facility",
  "Drug use",
  "Low bone mineral density",
  "Vitamin A deficiency",
  "Child stunting",
  "Discontinued breastfeeding",
  "Non-exclusive breastfeeding",
  "Iron deficiency",
];


 
let choropleth = document.getElementById("choropleth");
var map = L.map("choropleth").setView([37.8, -96], 4);
// function getcolor
let identificateur = document.getElementById("templateCause");
let indexSecteurChoisi =identificateur.value;
// console.log(identificateur.value);
identificateur.addEventListener("change", eventHandler)
// function syle feature
// let selecteurChoisi = "Outdoor air pollution - OWID"
let indexCause

let M = {};
let C = {};
C.init = function () {


  for (let i = 0; i < indexes.length; i++) {
    if (indexSecteurChoisi == indexes[i]) {
      // console.log("cause est : " + selectedCause);
      indexCause = indexes.indexOf(indexes[i]);
    }
  }


  function selectionData(geodatabrute, dataATraiter) {

    for (let i = 0; i < geodatabrute.features.length; i++) {
      let val = geodatabrute.features[i].properties;
      let toInput = dataATraiter.find(element => element.Country == val.name)
      // console.log(val);
      let dataBleau = Object.values(toInput);
      // console.log(toInput);
      let dataToInject = dataBleau[indexCause + 1]
      // console.log(dataToInject);

      val["value"] = dataToInject
      // console.log("le pays sélectionné est : ",geodatabrute.features[i].properties.name);
      // console.log("donnée injectée est : ",geodatabrute.features[i].properties.value);

  

      }
    }
      
      function getColor(value){
        return value > 1000000 ? "red" :
               value > 100000  ? "orange" :
               value > 10000   ? "yellow" :
               value > 1000    ? "green" :
                                 "white";
      };

      function style(feature) {
        return {
          
          fillOpacity: 0.7,
          fillColor: getColor(feature.properties.value)
        };
        
      }
      var geojson;

  
  // console.log("map = " + map);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
  
  selectionData(M.data, M.data2);
  // console.log(selectionData(M.data, M.data2))

  geojson = L.geoJson(M.data, {
		style: style,
	}).addTo(map);
};




let load = async function () {
  let response = await fetch("https://raw.githubusercontent.com/NathanCarlini/countries/main/world.geo.json");
  M.data = await response.json();

  let response2 = await fetch("https://raw.githubusercontent.com/NathanCarlini/countries/main/tableauPaysMaladies2019.json");
  M.data2 = await response2.json();
  // console.log(M.data);
  C.init();
  // changeColor(M.data)

};
load();




function eventHandler(){
  // identificateur = document.getElementById("templateCause");
  indexSecteurChoisi =identificateur.value
  
  C.init()
  // console.log(indexSecteurChoisi);
}



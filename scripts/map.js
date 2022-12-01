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
let map = L.map("choropleth").setView([37.8, -96], 4);
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
      let toInput = dataATraiter.find(element => element.Country == geodatabrute.features[i].properties.name)
      // console.log(i);
      let dataBleau = Object.values(toInput);
      // console.log(dataBleau);
      let dataToInject = dataBleau[indexCause + 1]
      console.log(dataToInject);

      geodatabrute.features[i].properties["value"] = dataToInject
      // console.log("le pays sélectionné est : ",geodatabrute.features[i].properties.name);
      // console.log("donnée injectée est : ",geodatabrute.features[i].properties.value);
      }
      





  }


  // console.log("map = " + map);
  let tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  L.geoJson(M.data).addTo(map);


  selectionData(M.data, M.data2);
};







let load = async function () {
  let response = await fetch("../data/world.geo.json");
  M.data = await response.json();

  let response2 = await fetch("../data/tableauPaysMaladies2019.json");
  M.data2 = await response2.json();
  // console.log(M.data2);
  C.init();
};
load();

function eventHandler(){
  // identificateur = document.getElementById("templateCause");
  indexSecteurChoisi =identificateur.value

  C.init()
  // console.log(indexSecteurChoisi);
}

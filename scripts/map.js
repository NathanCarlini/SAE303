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

let formatTemplateCause = function (value) {
  let template = document.querySelector("#causeIdMap");
  let html = template.innerHTML;
  html = html.replaceAll("{{causeNameMap}}", value);
  return html;
};

let renderTemplate = function (data) {
  let allhtml = "";
  for (let element of data) {
    allhtml += formatTemplateCause(element);
  }
  let div = document.getElementById("templateCauseMap");
  div.innerHTML = allhtml;
};

renderTemplate(indexes);


let choropleth = document.getElementById("choropleth");
let map = L.map("choropleth").setView([37.8, -96], 4);
// function getcolor
let identificateur = document.getElementById("templateCauseMap");
let indexSecteurChoisi = identificateur.value;
// console.log(identificateur.value);
identificateur.addEventListener("change", eventHandler);
// function syle feature
// let selecteurChoisi = "Outdoor air pollution - OWID"
let indexCause;

let M = {};
let C = {};
C.init = function () {
  for (let i = 0; i < indexes.length; i++) {
    if (indexSecteurChoisi == indexes[i]) {
      // console.log("cause est : " + selectedCause);
      indexCause = indexes.indexOf(indexes[i]);
    }
  }

  function selectionData(data1, dataATraiter) {
    for (let i = 0; i < data1.features.length; i++) {
      let val = data1.features[i].properties;
      let toInput = dataATraiter.find(
        (element) => element.Country == data1.features[i].properties.name
      );
      // console.log(i);
      let dataBleau = Object.values(toInput);
      // console.log(dataBleau);
      let dataToInject = dataBleau[indexCause + 1];
      console.log(dataToInject);

      data1.features[i].properties["value"] = dataToInject;
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
  let response = await fetch(
    "https://raw.githubusercontent.com/NathanCarlini/countries/main/world.geo.json"
  );
  M.data = await response.json();

  let response2 = await fetch(
    "https://raw.githubusercontent.com/NathanCarlini/countries/main/tableauPaysMaladies2019.json"
  );
  M.data2 = await response2.json();
  // console.log(M.data2);
  C.init();
};
load();

function eventHandler() {
  // identificateur = document.getElementById("templateCause");
  indexSecteurChoisi = identificateur.value;

  C.init();
  // console.log(indexSecteurChoisi);
}

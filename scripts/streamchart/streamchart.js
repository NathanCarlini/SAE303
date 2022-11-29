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



// fetch(
//   "https://raw.githubusercontent.com/NathanCarlini/countries/main/worldRegionsWB.json"
// )
//   .then((result) => result.json())
//   .then((data) => {
//     // console.log(data);
//     selectionData(data);
//   });


// // fonction qui parcourt le tableau indexes pour faire correspondre l'index de la cause de mort à celle sélectionnée dans la page par le filter
// for (let i = 0; i < indexes.length; i++) {
//   // console.log('le tableau parcouru renvoie la cause : ' + indexes[i]);
//   // console.log('la cause sélectionnée est : ' + selectedCause);
//   if (selectedCause == indexes[i]) {
//     indexCause = indexes.indexOf(indexes[i]);
//   }
// }

// function selectionData(data) {
//   for (let i = 0; i < data.length; i++) {
//     // console.log("longueur data : " + data.length);
//     // console.log("boucle numéro : " + i);
//     let elementValues = Object.values(data[i]);

//     let year = elementValues[0];
//     let yearStr = year.toString();
//     let country = elementValues[1];
//     let cause = elementValues[indexCause + 2];

//     let toRender = [yearStr, cause, country];
//     option.series[0].data.push(toRender);
//     // console.log(toRender);
//     // console.log(option.series[0].data);
//     // renderData(toRender)
//   }
// }

// renderData = function (toRender) {
//   option.series[0].data.push(toRender);
//   // console.log(option.series[0].data);
// };
// // Initialize the echarts instance based on the prepared dom
// var myChart = echarts.init(document.getElementById("streamchart"));

// // Specify the configuration items and data for the chart
// var option;

// option = {
//   tooltip: {
//     trigger: "axis",
//     axisPointer: {
//       type: "line",
//       lineStyle: {
//         color: "rgba(0,0,0,0.2)",
//         width: 1,
//         type: "solid",
//       },
//     },
//   },
//   legend: {
//     data: ["African Region", "Eastern Mediterranean Region", "European Region", "Region of the Americas", "South-East Asia Region", "Western Pacific Region"],
//   },
//   singleAxis: {
//     top: 50,
//     bottom: 50,
//     axisTick: {},
//     axisLabel: {},
//     type: "time",
//     axisPointer: {
//       animation: true,
//       label: {
//         show: true,
//       },
//     },
//     splitLine: {
//       show: true,
//       lineStyle: {
//         type: "dashed",
//         opacity: 0.2,
//       },
//     },
//   },
//   series: [
//     {
//       type: "themeRiver",
//       emphasis: {
//         itemStyle: {
//           shadowBlur: 20,
//           shadowColor: "rgba(0, 0, 0, 0.8)",
//         },
//       },
//       data: [
//       ],
//     },
//   ],
// };
// console.log(option.series[0].data);
// // option.series[0].data.push(toRender)

// option && myChart.setOption(option);

let M = {};
let C = {};
C.init = function () {
  for (let i = 0; i < indexes.length; i++) {
    // console.log('le tableau parcouru renvoie la cause : ' + indexes[i]);
    // console.log('la cause sélectionnée est : ' + selectedCause);
    if (selectedCause == indexes[i]) {
      indexCause = indexes.indexOf(indexes[i]);
    }
  }

  fetch(
    "https://raw.githubusercontent.com/NathanCarlini/countries/main/worldRegionsWB.json"
  )
    .then((result) => result.json())
    .then((data) => {
      selectionData(data);
      // console.log(selectionData(data));
    });
  
    
    
    let formatTemplateCause = function(value){
      let template = document.querySelector('#causeId');
      let html = template.innerHTML;
      html = html.replaceAll("{{causeName}}", value)
      return html;
    }
    
    let renderTemplate = function(data){
      let allhtml = '';
      for (let element of data){
        allhtml += formatTemplateCause(element);
      }
      let div = document.getElementById('templateCause');
      div.innerHTML = allhtml;
    }
    
    renderTemplate(indexes)
    
    let identificateur = document.getElementById("option");
    let selectedCause = identificateur.value;
    let indexCause; 
    

  // Initialize the echarts instance based on the prepared dom
  var myChart = echarts.init(document.getElementById("streamchart"));

  // Specify the configuration items and data for the chart
  var option;

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
        lineStyle: {
          color: "rgba(0,0,0,0.2)",
          width: 1,
          type: "solid",
        },
      },
    },
    legend: {
      data: [
        "African Region",
        "Eastern Mediterranean Region",
        "European Region",
        "Region of the Americas",
        "South-East Asia Region",
        "Western Pacific Region",
      ],
    },
    singleAxis: {
      top: 50,
      bottom: 50,
      axisTick: {},
      axisLabel: {},
      type: "time",
      axisPointer: {
        animation: true,
        label: {
          show: true,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          opacity: 0.2,
        },
      },
    },
    series: [
      {
        type: "themeRiver",
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: "rgba(0, 0, 0, 0.8)",
          },
        },
        data: [],
      },
    ],
  };


  function selectionData(data) {
    for (let i = 0; i < data.length; i++) {
      // console.log("longueur data : " + data.length);
      // console.log("boucle numéro : " + i);
      let elementValues = Object.values(data[i]);

      let year = elementValues[0];
      let yearStr = year.toString();
      let country = elementValues[1];
      let cause = elementValues[indexCause + 2];

      let toRender = [yearStr, cause, country];
      option.series[0].data.push(toRender);
      // console.log(toRender);
      // console.log(option.series[0].data);
      // renderData(toRender)
    }
  }
  selectionData(M.data)
  renderData = function(toRender){
  // console.log(toRender);
  for (let i = 0; i < toRender.lenght; i ++){
  option.series[i].data.push(toRender)
}
}
  // option.series[0].data.push(toRender)

  option && myChart.setOption(option);
};
let load = async function () {

  let reponse = await fetch(
    "https://raw.githubusercontent.com/NathanCarlini/countries/main/worldRegionsWB.json"
  )
  // fetch(
  //   "https://raw.githubusercontent.com/NathanCarlini/countries/main/worldRegionsWB.json"
  // )
  //   .then((result) => result.json())
  //   .then((data) => {
  //     // console.log(data);
  //     selectionData(data);
  //   });
    M.data = await reponse.json()

  C.init();

};
load();

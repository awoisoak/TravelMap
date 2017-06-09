// svg path for target icon
// var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
var targetSVG = "M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z"

var currentObject;

var $CHART$ = AmCharts.makeChart( "$CHART$", {
  "type": "map",
  "theme": "light",
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  },
  "mouseWheelZoomEnabled": true,




  "smallMap": {},
  
  
    "dataProvider": {
    "map": "worldLow",
    // "areas": [{
    //   "id": "JP",
    //   "description": "Japan"
    // }, {
    //   "id": "TW",
    //   "description": "Taiwan"
    // }],
    "images": [ 

    {
      "id": "Egypt",
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 1,
      "title": "Egypt",
      "latitude": 26.7645498,
      "longitude": 26.3034919,
      "myUrl": "http://awoisoak.com/gallery/egypt/"
    },

    {
      "id": "Guangzhou",
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 1,
      "title": "Guangzhou",
      "latitude": 23.1253491,
      "longitude": 112.9469735,
      "myUrl": "http://awoisoak.com/gallery/guangzhou/"
    },
    {
      "id": "Qibao & Zhujiajiao",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Qibao & Zhujiajiao",
      "latitude": 31.157657,
      "longitude": 121.349174,
      "myUrl": "http://awoisoak.com/gallery/qibao-zhujiajiao/"
    },
    {
      "id": "Shanghai",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Shanghai",
      "latitude": 31.2240438,
      "longitude": 121.1958847,
      "myUrl": "http://awoisoak.com/gallery/shanghai/"
    },
    {
      "id": "Hong Kong",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Hong Kong",
      "latitude": 22.3576177,
      "longitude": 113.980586,
      "myUrl": "http://awoisoak.com/gallery/hong-kong/"
    },
    {
      "id": "Fujikawaguchiko",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Fujikawaguchiko",
      "latitude": 35.482548,
      "longitude": 138.625623,
      "myUrl": "http://awoisoak.com/gallery/fujikawaguchiko/"
    },
    {
      "id": "Himeji",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Himeji",
      "latitude": 34.9259075,
      "longitude": 134.5452272,
      "myUrl": "http://awoisoak.com/gallery/himeji/"
    },
    {
      "id": "Kamakura & Enoshima",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Kamakura & Enoshima",
      "latitude": 35.333922,
      "longitude": 139.5057027,
      "myUrl": "http://awoisoak.com/gallery/kamakura/"
    },
    {
      "id": "Kobe",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Kobe",
      "latitude": 34.694295,
      "longitude": 135.1555948,
      "myUrl": "http://awoisoak.com/gallery/kobe/"
    },
    {
      "id": "Kyoto",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Kyoto",
      "latitude": 35.0060949,
      "longitude": 135.7258448,
      "myUrl": "http://awoisoak.com/gallery/kyoto/"
    },
    {
      "id": "Mt. Fuji",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Mt. Fuji",
      "latitude": 35.3605555,
      "longitude": 138.7255837,
      "myUrl": "http://awoisoak.com/gallery/mount-fuji/"
    },
    {
      "id": "Nara",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Nara",
      "latitude": 34.6868987,
      "longitude": 135.7912975,
      "myUrl": "http://awoisoak.com/gallery/nara/"
    },
    {
      "id": "Nikko",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Nikko",
      "latitude": 36.8463038,
      "longitude": 139.4496884,
      "myUrl": "http://awoisoak.com/gallery/nikko/"
    },
    {
      "id": "Nokogiriyama",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Nokogiriyama",
      "latitude": 35.160391,
      "longitude": 139.8386754,
      "myUrl": "http://awoisoak.com/gallery/nokogiriyama/"
    },
    {
      "id": "Osaka",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Osaka",
      "latitude": 34.6937,
      "longitude": 135.5022,
      "myUrl": "http://awoisoak.com/gallery/osaka/"
    },
    {
      "id": "Tateyama Kurobe Alpine Route",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Tateyama Kurobe Alpine Route",
      "latitude": 36.5704851,
      "longitude": 137.5147513,
      "myUrl": "http://awoisoak.com/gallery/tateyama-kurobe-alpine-route/"
    },
    {
      "id": "Shirakawa-go, Matsumoto & Hakone",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Shirakawa-go, Matsumoto & Hakone",
      "latitude": 36.2561,
      "longitude": 136.9062,
      "myUrl": "http://awoisoak.com/gallery/shirakawa-go_matsumoto_hakone/"
    },
    {
      "id": "Tokyo",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Tokyo",
      "latitude": 35.6895,
      "longitude": 139.6917,
      "myUrl": "http://awoisoak.com/gallery/tokyo/"
    },
    {
      "id": "Yokohama",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Yokohama",
      "latitude": 35.4437,
      "longitude": 139.6380,
      "myUrl": "http://awoisoak.com/gallery/yokohama/"
    },
    {
      "id": "Macau",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Macau",
      "latitude": 22.1987,
      "longitude": 113.5439,
      "myUrl": "http://awoisoak.com/gallery/macau/"
    },
    {
      "id": "Mongolia",
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 1,
      "title": "Mongolia",
      "latitude": 46.8625,
      "longitude": 103.8467,
      "myUrl": "http://awoisoak.com/gallery/mongolia/"
    },
    {
      "id": "Busan",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Busan",
      "latitude": 35.1796,
      "longitude": 129.0756,
      "myUrl": "http://awoisoak.com/gallery/busan/"
    },
    {
      "id": "Seoul",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Seoul",
      "latitude": 37.5665,
      "longitude": 126.9780,
      "myUrl": "http://awoisoak.com/gallery/seoul/"
    },
    {
      "id": "Caoling & Taoyuan",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Caoling & Taoyuan",
      "latitude": 24.9715161,
      "longitude": 121.9263685,
      "myUrl": "http://awoisoak.com/gallery/caoling-taoyuan/"
    },
    {
      "id": "Jiufen",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Jiufen",
      "latitude": 25.1092,
      "longitude": 121.8463,
      "myUrl": "http://awoisoak.com/gallery/jiufen/"
    },
    {
      "id": "Keelung",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Keelung",
      "latitude": 25.1276,
      "longitude": 121.7392,
      "myUrl": "http://awoisoak.com/gallery/keelung/"
    },
    {
      "id": "Matsu",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Matsu",
      "latitude": 26.1499,
      "longitude": 119.9310,
      "myUrl": "http://awoisoak.com/gallery/matsu/"
    },
    {
      "id": "Pingxi & Shifen",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Pingxi & Shifen",
      "latitude": 25.0248,
      "longitude": 121.7409,
      "myUrl": "http://awoisoak.com/gallery/pingxi-shifen/"
    },
    {
      "id": "Taipei & Surrounds",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Taipei & Surrounds",
      "latitude": 25.0330,
      "longitude": 121.5654,
      "myUrl": "http://awoisoak.com/gallery/taipei-surrounds-2/"
    },
    {
      "id": "Teapot Mountain",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Teapot Mountain",
      "latitude": 25.1095149,
      "longitude": 121.8598111,
      "myUrl": "http://awoisoak.com/gallery/teapot-mountain/"
    },
    {
      "id": "Yilan",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Yilan",
      "latitude": 24.7021,
      "longitude": 121.7378,
      "myUrl": "http://awoisoak.com/gallery/yilan/"
    },
    {
      "id": "Alishan",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Alishan",
      "latitude": 23.4355,
      "longitude": 120.7810,
      "myUrl": "http://awoisoak.com/gallery/alishan/"
    },
    {
      "id": "Taroko National Park & Sixty Rock Mountains",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Taroko National Park & Sixty Rock Mountains",
      "latitude": 24.1587,
      "longitude": 121.6216,
      "myUrl": "http://awoisoak.com/gallery/hualien-taroko/"
    },
    {
      "id": "Nantou",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Nantou",
      "latitude": 23.9610,
      "longitude": 120.9719,
      "myUrl": "http://awoisoak.com/gallery/nantou/"
    },
    {
      "id": "Sun Moon Lake",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Sun Moon Lake",
      "latitude": 23.8573,
      "longitude":120.9159 ,
      "myUrl": "http://awoisoak.com/gallery/sun-moon-lake/"
    },
    {
      "id": "Wuling",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Wuling",
      "latitude": 24.3930,
      "longitude": 121.3067,
      "myUrl": "http://awoisoak.com/gallery/wuling/"
    },
    {
      "id": "Yuanzi",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Yuanzi",
      "latitude": 24.2368984,
      "longitude": 120.9706112,
      "myUrl": "http://awoisoak.com/gallery/yuanzui/"
    },
    {
      "id": "Dulan & Chisang",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Dulan & Chisang",
      "latitude": 22.8830209,
      "longitude": 121.1987346,
      "myUrl": "http://awoisoak.com/gallery/dulan-chishang/"
    },
    {
      "id": "Green Island",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Green Island",
      "latitude": 22.6621,
      "longitude": 121.4901,
      "myUrl": "http://awoisoak.com/gallery/green-island/"
    },
    {
      "id": "Kaohsiung",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Kaohsiung",
      "latitude": 22.6273,
      "longitude": 120.3014,
      "myUrl": "http://awoisoak.com/gallery/kaohsiung/"
    },
    {
      "id": "Kenting",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Kenting",
      "latitude": 21.9483,
      "longitude": 120.7798,
      "myUrl": "http://awoisoak.com/gallery/kenting/"
    },
    {
      "id": "Lanyu",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Lanyu",
      "latitude": 22.0436,
      "longitude": 121.5484,
      "myUrl": "http://awoisoak.com/gallery/lanyu/"
    },
    {
      "id": "Maolin",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Maolin",
      "latitude": 22.9319,
      "longitude": 120.7350,
      "myUrl": "http://awoisoak.com/gallery/maolin/"
    },
    {
      "id": "Tainan",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Tainan",
      "latitude": 22.9997,
      "longitude":120.2270 ,
      "myUrl": "http://awoisoak.com/gallery/tainan/"
    },
    {
      "id": "Xiaoliuqiu",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Xiaoliuqiu",
      "latitude": 22.3404,
      "longitude":120.3715 ,
      "myUrl": "http://awoisoak.com/gallery/xiaoliuqiu/"
    }
     ]
  },

  "listeners": [ {
    "event": "clickMapObject",
    "method": function( event ) {
      // check if the map is already at traget zoomLevel and go to url if it is
      if ( currentObject && event.mapObject.id == currentObject.id ) {
       // window.location.href = event.mapObject.myUrl;
       window.open(event.mapObject.myUrl);
      }
      currentObject = event.mapObject;
    }
  }]
  
  
} );


function clickObject( id ) {
  map.clickMapObject( map.getObjectById( id ) );
}


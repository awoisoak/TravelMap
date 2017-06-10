// svg path for target icon
var dartboardSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// var markerSVG = "M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z"
var targetSVG = "M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"


var currentObject;

var $CHART$ = AmCharts.makeChart( "$CHART$", {
  "type": "map",
  "theme": "light",
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  // "areasSettings": {
  //   "autoZoom": true,
  //   "selectedColor": "#CC0000"
  // },
  "mouseWheelZoomEnabled": true,




  // "smallMap": {},
  
  
    "dataProvider": {
    "map": "worldLow",

    //AREAS
    "areas": [{
      "id": "JP",
      // "modalUrl": "http://awoisoak.com/gallery/qibao-zhujiajiao/",
      // "selectable": true
      // "description": "Japan"
    }, {
      "id": "TW",
      // "modalUrl": "https://en.wikipedia.org/wiki/Taiwan",
      // "selectable": true
      // "info": "Taiwan blabladsadasdasdasd"
    },{
      "id": "RU",
    },
 	{
      "id": "BG",
    },
    {
      "id": "GB",
    },
    {
      "id": "AU",
    },
    {
      "id": "CA",
    },
    ],



    "images": [ 

    {
      "id": "Egypt",
      "svgPath": dartboardSVG,
      "zoomLevel": 5,
      "scale": 1,
      "title": "Egypt",
      "latitude": 26.7645498,
      "longitude": 26.3034919,
      "myUrl": "http://awoisoak.com/gallery/egypt/",
      "description": "<img src='http://upload.wikimedia.org/wikipedia/commons/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg' /><p>London is the capital and most populous city of England and the United Kingdom. Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium. London's ancient core, the City of London, largely retains its 1.12-square-mile (2.9 km2) medieval boundaries and in 2011 had a resident population of 7,375, making it the smallest city in England. Since at least the 19th century, the term London has also referred to the metropolis developed around this core The bulk of this conurbation forms the Greater London administrative area (coterminous with the London region), governed by the Mayor of London and the London Assembly.</p>"
    },

	{
	  "id": "Guangzhou",
	  "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Guangzhou",
      "latitude": 23.1253491,
      "longitude": 112.9469735,
      "myUrl": "http://awoisoak.com/gallery/guangzhou/"
	},
	{
      "id": "Qibao & Zhujiajiao",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Qibao & Zhujiajiao",
      "latitude": 31.157657,
      "longitude": 121.349174,
      "myUrl": "http://awoisoak.com/gallery/qibao-zhujiajiao/"
    },
    {
      "id": "Shanghai",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Shanghai",
      "latitude": 31.2240438,
      "longitude": 121.1958847,
      "myUrl": "http://awoisoak.com/gallery/shanghai/"
    },


    {
      "id": "Hong Kong",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Hong Kong",
      "latitude": 22.3576177,
      "longitude": 113.980586,
      "myUrl": "http://awoisoak.com/gallery/hong-kong/"
    },

    {
      "id": "Japan",
      "svgPath": targetSVG,
      "zoomLevel": 10,
      "scale": 2,
      "title": "Japan",
      "latitude": 36.2048,
      "longitude": 138.2529,
      "images": 
      	[ 	{
      		  "id": "Fujikawaguchiko",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Fujikawaguchiko",
		      "latitude": 35.482548,
		      "longitude": 138.625623,
		      "myUrl": "http://awoisoak.com/gallery/fujikawaguchiko/"
      		},
      		{
		      "id": "Himeji",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Himeji",
		      "latitude": 34.9259075,
		      "longitude": 134.5452272,
		      "myUrl": "http://awoisoak.com/gallery/himeji/"
    		},
    		{
		      "id": "Kamakura & Enoshima",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Kamakura & Enoshima",
		      "latitude": 35.333922,
		      "longitude": 139.5057027,
		      "myUrl": "http://awoisoak.com/gallery/kamakura/"
  		    },
		    {
		      "id": "Kobe",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Kobe",
		      "latitude": 34.694295,
		      "longitude": 135.1555948,
		      "myUrl": "http://awoisoak.com/gallery/kobe/"
		    },
		    {
		      "id": "Kyoto",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Kyoto",
		      "latitude": 35.0060949,
		      "longitude": 135.7258448,
		      "myUrl": "http://awoisoak.com/gallery/kyoto/"
		    },
		    {
		      "id": "Mt. Fuji",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Mt. Fuji",
		      "latitude": 35.3605555,
		      "longitude": 138.7255837,
		      "myUrl": "http://awoisoak.com/gallery/mount-fuji/"
		    },
		    {
		      "id": "Nara",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Nara",
		      "latitude": 34.6868987,
		      "longitude": 135.7912975,
		      "myUrl": "http://awoisoak.com/gallery/nara/"
		    },
		    {
		      "id": "Nikko",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Nikko",
		      "latitude": 36.8463038,
		      "longitude": 139.4496884,
		      "myUrl": "http://awoisoak.com/gallery/nikko/"
		    },
		    {
		      "id": "Nokogiriyama",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Nokogiriyama",
		      "latitude": 35.160391,
		      "longitude": 139.8386754,
		      "myUrl": "http://awoisoak.com/gallery/nokogiriyama/"
		    },
		    {
		      "id": "Osaka",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Osaka",
		      "latitude": 34.6937,
		      "longitude": 135.5022,
		      "myUrl": "http://awoisoak.com/gallery/osaka/"
		    },
		    {
		      "id": "Tateyama Kurobe Alpine Route",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 10,
		      "scale": 1,
		      "title": "Tateyama Kurobe Alpine Route",
		      "latitude": 36.5704851,
		      "longitude": 137.5147513,
		      "myUrl": "http://awoisoak.com/gallery/tateyama-kurobe-alpine-route/"
		    },
		    {
		      "id": "Shirakawa-go, Matsumoto & Hakone",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Shirakawa-go, Matsumoto & Hakone",
		      "latitude": 36.2561,
		      "longitude": 136.9062,
		      "myUrl": "http://awoisoak.com/gallery/shirakawa-go_matsumoto_hakone/"
		    },
		    {
		      "id": "Tokyo",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Tokyo",
		      "latitude": 35.6895,
		      "longitude": 139.6917,
		      "myUrl": "http://awoisoak.com/gallery/tokyo/"
		    },
		    {
		      "id": "Yokohama",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Yokohama",
		      "latitude": 35.4437,
		      "longitude": 139.6380,
		      "myUrl": "http://awoisoak.com/gallery/yokohama/"
		    }
       ]
   },
    {
      "id": "Macau",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Macau",
      "latitude": 22.1987,
      "longitude": 113.5439,
      "myUrl": "http://awoisoak.com/gallery/macau/"
    },
    {
      "id": "Mongolia",
      "svgPath": dartboardSVG,
      "zoomLevel": 5,
      "scale": 1,
      "title": "Mongolia",
      "latitude": 46.8625,
      "longitude": 103.8467,
      "myUrl": "http://awoisoak.com/gallery/mongolia/"
    },
    {
      "id": "Busan",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Busan",
      "latitude": 35.1796,
      "longitude": 129.0756,
      "myUrl": "http://awoisoak.com/gallery/busan/"
    },
    {
      "id": "Seoul",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Seoul",
      "latitude": 37.5665,
      "longitude": 126.9780,
      "myUrl": "http://awoisoak.com/gallery/seoul/"
    },

    {
      "id": "Taiwan",
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 2,
      "title": "Taiwan",
      "latitude": 23.6978,
      "longitude": 120.9605,
      "images": 
      	[ 	
		    {
		      "id": "Caoling & Taoyuan",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Caoling & Taoyuan",
		      "latitude": 24.9715161,
		      "longitude": 121.9263685,
		      "myUrl": "http://awoisoak.com/gallery/caoling-taoyuan/"
		    },
		    {
		      "id": "Jiufen",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Jiufen",
		      "latitude": 25.1092,
		      "longitude": 121.8463,
		      "myUrl": "http://awoisoak.com/gallery/jiufen/"
		    },
		    {
		      "id": "Keelung",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Keelung",
		      "latitude": 25.1276,
		      "longitude": 121.7392,
		      "myUrl": "http://awoisoak.com/gallery/keelung/"
		    },
		    {
		      "id": "Matsu",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Matsu",
		      "latitude": 26.1499,
		      "longitude": 119.9310,
		      "myUrl": "http://awoisoak.com/gallery/matsu/"
		    },
		    {
		      "id": "Pingxi & Shifen",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Pingxi & Shifen",
		      "latitude": 25.0248,
		      "longitude": 121.7409,
		      "myUrl": "http://awoisoak.com/gallery/pingxi-shifen/"
		    },
		    {
		      "id": "Taipei & Surrounds",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Taipei & Surrounds",
		      "latitude": 25.0330,
		      "longitude": 121.5654,
		      "myUrl": "http://awoisoak.com/gallery/taipei-surrounds-2/"
		    },
		    {
		      "id": "Teapot Mountain",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Teapot Mountain",
		      "latitude": 25.1095149,
		      "longitude": 121.8598111,
		      "myUrl": "http://awoisoak.com/gallery/teapot-mountain/"
		    },
		    {
		      "id": "Yilan",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Yilan",
		      "latitude": 24.7021,
		      "longitude": 121.7378,
		      "myUrl": "http://awoisoak.com/gallery/yilan/"
		    },
		    {
		      "id": "Alishan",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Alishan",
		      "latitude": 23.4355,
		      "longitude": 120.7810,
		      "myUrl": "http://awoisoak.com/gallery/alishan/"
		    },
		    {
		      "id": "Taroko National Park & Sixty Rock Mountains",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Taroko National Park & Sixty Rock Mountains",
		      "latitude": 24.1587,
		      "longitude": 121.6216,
		      "myUrl": "http://awoisoak.com/gallery/hualien-taroko/"
		    },
		    {
		      "id": "Nantou",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Nantou",
		      "latitude": 23.9610,
		      "longitude": 120.9719,
		      "myUrl": "http://awoisoak.com/gallery/nantou/"
		    },
		    {
		      "id": "Sun Moon Lake",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Sun Moon Lake",
		      "latitude": 23.8573,
		      "longitude":120.9159 ,
		      "myUrl": "http://awoisoak.com/gallery/sun-moon-lake/"
		    },
		    {
		      "id": "Wuling",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Wuling",
		      "latitude": 24.3930,
		      "longitude": 121.3067,
		      "myUrl": "http://awoisoak.com/gallery/wuling/"
		    },
		    {
		      "id": "Yuanzi",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Yuanzi",
		      "latitude": 24.2368984,
		      "longitude": 120.9706112,
		      "myUrl": "http://awoisoak.com/gallery/yuanzui/"
		    },
		    {
		      "id": "Dulan & Chisang",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Dulan & Chisang",
		      "latitude": 22.8830209,
		      "longitude": 121.1987346,
		      "myUrl": "http://awoisoak.com/gallery/dulan-chishang/"
		    },
		    {
		      "id": "Green Island",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Green Island",
		      "latitude": 22.6621,
		      "longitude": 121.4901,
		      "myUrl": "http://awoisoak.com/gallery/green-island/"
		    },
		    {
		      "id": "Kaohsiung",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Kaohsiung",
		      "latitude": 22.6273,
		      "longitude": 120.3014,
		      "myUrl": "http://awoisoak.com/gallery/kaohsiung/"
		    },
		    {
		      "id": "Kenting",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Kenting",
		      "latitude": 21.9483307,
		      "longitude": 120.7775576,
		      "myUrl": "http://awoisoak.com/gallery/kenting/"
		    },
		    {
		      "id": "Lanyu",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Lanyu",
		      "latitude": 22.0436,
		      "longitude": 121.5484,
		      "myUrl": "http://awoisoak.com/gallery/lanyu/"
		    },
		    {
		      "id": "Maolin",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Maolin",
		      "latitude": 22.9319,
		      "longitude": 120.7350,
		      "myUrl": "http://awoisoak.com/gallery/maolin/"
		    },
		    {
		      "id": "Tainan",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Tainan",
		      "latitude": 22.9997,
		      "longitude":120.2270 ,
		      "myUrl": "http://awoisoak.com/gallery/tainan/"
		    },
		    {
		      "id": "Xiaoliuqiu",
		      "svgPath": dartboardSVG,
		      "zoomLevel": 20,
		      "scale": 1,
		      "title": "Xiaoliuqiu",
		      "latitude": 22.3404,
		      "longitude":120.3715 ,
		      "myUrl": "http://awoisoak.com/gallery/xiaoliuqiu/"
		    }
      	]
    },
    {
      "id": "Siberia",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Siberia",
      "latitude": 52.2870,
      "longitude": 104.3050,
      "myUrl": "http://awoisoak.com/gallery/siberia/"
    },	
    {
      "id": "Istanbul",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Istanbul",
      "latitude": 41.0082,
      "longitude": 28.9784,
      "myUrl": "http://awoisoak.com/gallery/turkey/"
    },
    {
      "id": "Abu Dhabi",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Abu Dhabi",
      "latitude": 24.4539,
      "longitude": 54.3773,
      "myUrl": "http://awoisoak.com/gallery/abu-dhabi/"
    },
    {
      "id": "Dubai",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Dubai",
      "latitude": 25.2048,
      "longitude": 55.2708,
      "myUrl": "http://awoisoak.com/gallery/dubai/"
    },
    {
      "id": "Cambodia",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Cambodia",
      "latitude": 12.5657,
      "longitude": 104.9910,
      "myUrl": "http://awoisoak.com/gallery/cambodia/"
    },
    {
      "id": "Bali",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Bali",
      "latitude": 8.3405,
      "longitude":115.0920 ,
      "myUrl": "http://awoisoak.com/gallery/bali/"
    },
    {
      "id": "Komodo",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Komodo",
      "latitude": 8.5850,
      "longitude": 119.4411,
      "myUrl": "http://awoisoak.com/gallery/komodo/"
    },
    {
      "id": "Bohol",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Bohol",
      "latitude": 9.8500,
      "longitude": 124.1435,
      "myUrl": "http://awoisoak.com/gallery/bohol/"
    },
    {
      "id": "Donsol",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "",
      "latitude": 12.9943,
      "longitude": 123.5504,
      "myUrl": "http://awoisoak.com/gallery/donsol/"
    },
    {
      "id": "El Nido",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "El Nido",
      "latitude": 11.2097,
      "longitude": 119.4623,
      "myUrl": "http://awoisoak.com/gallery/el-nido/"
    },
    {
      "id": "Legazpi",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Legazpi",
      "latitude": 13.1391,
      "longitude": 123.7438,
      "myUrl": "http://awoisoak.com/gallery/legazpi/"
    },
    {
      "id": "Manila",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Manila",
      "latitude": 14.5995,
      "longitude": 120.9842,
      "myUrl": "http://awoisoak.com/gallery/manila/"
    },
    {
      "id": "Siargao",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Siargao",
      "latitude":9.8482 ,
      "longitude":126.0458 ,
      "myUrl": "http://awoisoak.com/gallery/siargao/"
    },
    {
      "id": "Laos",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Laos",
      "latitude": 19.8563,
      "longitude": 102.4955,
      "myUrl": "http://awoisoak.com/gallery/laos/"
    },
    {
      "id": "Kuala Lumpur",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Kuala Lumpur",
      "latitude": 3.1390,
      "longitude": 101.6869,
      "myUrl": "http://awoisoak.com/gallery/101283/"
    },
    {
      "id": "Singapore",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Singapore",
      "latitude": 1.3521,
      "longitude": 103.8198,
      "myUrl": "http://awoisoak.com/gallery/singapore/"
    },
    {
      "id": "Thailand",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Thailand",
      "latitude": 15.8700,
      "longitude": 100.9925,
      "myUrl": "http://awoisoak.com/gallery/thailand/"
    },
    {
      "id": "Ho Chi Minh",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Ho Chi Minh",
      "latitude": 10.8231,
      "longitude": 106.6297,
      "myUrl": "http://awoisoak.com/?border_gallery=ho-chi-minh"
    },
    {
      "id": "North Vietnam",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "North Vietnam",
      "latitude": 21.0278,
      "longitude": 105.8342,
      "myUrl": "http://awoisoak.com/gallery/vietnam/"
    },
    {
      "id": "Ghorepani Poon Hill Trek",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Ghorepani Poon Hill Trek",
      "latitude": 28.4008,
      "longitude": 83.7000,
      "myUrl": "http://awoisoak.com/?border_gallery=ghorepani-pool-hill-trek"
    },
    {
      "id": "Kathmandu",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Kathmandu",
      "latitude": 27.7172,
      "longitude":85.3240 ,
      "myUrl": "http://awoisoak.com/gallery/kathmandu/"
    },

    {
      "id": "Pokhara",
      "svgPath": dartboardSVG,
      "zoomLevel": 20,
      "scale": 1,
      "title": "Pokhara",
      "latitude": 28.2380,
      "longitude": 83.9956,
      "myUrl": "http://awoisoak.com/gallery/pokhara/"
    },



        ]
  },

  "listeners": [ {
    "event": "clickMapObject",
    "method": function( event ) {
      // check if the map is already at traget zoomLevel and go to url if it is
      // if ( currentObject && event.mapObject.id == currentObject.id ) {
	       //To change the icon selected
	       // event.mapObject.svgPath = dartboardSVG;
	       // event.mapObject.validate();

	       //Open URL in other tab/window
	       // window.open(event.mapObject.myUrl);
	    if (event.mapObject.myUrl != undefined){
	       $.fancybox({
    		width: 1500,
    		href: event.mapObject.myUrl,
    		title: event.mapObject.title,
    		type: "iframe"
  			});
	   }
      // }
      // currentObject = event.mapObject;
    }
  }]
  
  
} );


function clickObject( id ) {
  map.clickMapObject( map.getObjectById( id ) );
}


// map.addListener("clickMapObject", function(event) {
//   $.fancybox({
//     href: event.mapObject.modalUrl,
//     title: event.mapObject.title,
//     type: "iframe"
//   });
// });


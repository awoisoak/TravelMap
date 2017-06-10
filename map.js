// svg path for target icon
var dartboardSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
var markerSVG = "M17.592,8.936l-6.531-6.534c-0.593-0.631-0.751-0.245-0.751,0.056l0.002,2.999L5.427,9.075H2.491c-0.839,0-0.162,0.901-0.311,0.752l3.683,3.678l-3.081,3.108c-0.17,0.171-0.17,0.449,0,0.62c0.169,0.17,0.448,0.17,0.618,0l3.098-3.093l3.675,3.685c-0.099-0.099,0.773,0.474,0.773-0.296v-2.965l3.601-4.872l2.734-0.005C17.73,9.688,18.326,9.669,17.592,8.936 M3.534,9.904h1.906l4.659,4.66v1.906L3.534,9.904z M10.522,13.717L6.287,9.48l4.325-3.124l3.088,3.124L10.522,13.717z M14.335,8.845l-3.177-3.177V3.762l5.083,5.083H14.335z"
var targetSVG = "M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"
var personSVG = "M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328C15.328,9.982,12.943,12.367,10,12.367z"
var planeSVG = "M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"
var currentObject;

var $CHART$ = AmCharts.makeChart( "$CHART$", {
  "type": "map",
  "theme": "light",
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": false,
    "selectedColor": "#cecaca",
    "color":"#c6c6c6"
  },
  
  "legend": {
    "backgroundColor": "#fff",
    "backgroundAlpha": 0.7,
    "align": "center",
    "bottom": 0,
    "data": [{
      "title": "I've lived",
      "color": "#efda21"
    }, {
      "title": "I've visited",
      "color": "#29b1db"
    },
    {
      "title": "Moving to",
      "color": "#53b2af"
    }]
  },


  "smallMap": {},
  "mouseWheelZoomEnabled": true,  
  
    "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true,

    "areas": [{
      "id": "JP",
      "color":"#efda21"
    }, {
      "id": "TW",
      "color":"#efda21"
    },{
      "id": "RU",
      "color":"#efda21"
    },
 	  {
      "id": "BG",
      "color":"#efda21"
    },
    {
      "id": "GB",
      "color":"#efda21"
    },
    {
      "id": "AU",
      "color":"#efda21"
    },
    {
      "id": "CA",
      "color":"#53b2af"
    },
    {
      "id": "ES",
      "color":"#efda21"
    },
    {
      "id": "PT",
      "color": "#29b1db"
    },
    {
      "id": "AL",
      "color": "#29b1db"
    },
    {
      "id": "AD",
      "color": "#29b1db"
    },
    {
      "id": "AT",
      "color": "#29b1db"
    },
    {
      "id": "BE",
      "color": "#29b1db"
    },
    {
      "id": "BA",
      "color": "#29b1db"
    },
    {
      "id": "KH",
      "color": "#29b1db"
    },
    {
      "id": "CN",
      "color": "#29b1db"
    },
    {
      "id": "HR",
      "color": "#29b1db"
    },
    {
      "id": "CZ",
      "color": "#29b1db"
    },
    {
      "id": "EG",
      "color": "#29b1db"
    },
    {
      "id": "EE",
      "color": "#29b1db"
    },
    {
      "id": "FI",
      "color": "#29b1db"
    },
    {
      "id": "FR",
      "color": "#29b1db"
    },
    {
      "id": "DE",
      "color": "#29b1db"
    },
    {
      "id": "HK",
      "color": "#29b1db"
    },
    {
      "id": "HU",
      "color": "#29b1db"
    },
    {
      "id": "IS",
      "color": "#29b1db"
    },
    {
      "id": "ID",
      "color": "#29b1db"
    },
    {
      "id": "IE",
      "color": "#29b1db"
    },
    {
      "id": "IT",
      "color": "#29b1db"
    },
    {
      "id": "KR",
      "color": "#29b1db"
    },
    {
      "id": "LA",
      "color": "#29b1db"
    },
    {
      "id": "LV",
      "color": "#29b1db"
    },
    {
      "id": "LT",
      "color": "#29b1db"
    },
    {
      "id": "LU",
      "color": "#29b1db"
    },
    {
      "id": "MO",
      "color": "#29b1db"
    },
    {
      "id": "MK",
      "color": "#29b1db"
    },
    {
      "id": "MY",
      "color": "#29b1db"
    },
    {
      "id": "MD",
      "color": "#29b1db"
    },
    {
      "id": "MC",
      "color": "#29b1db"
    },
    {
      "id": "MN",
      "color": "#29b1db"
    },
    {
      "id": "MM",
      "color": "#29b1db"
    },
    {
      "id": "NP",
      "color": "#29b1db"
    },
    {
      "id": "NZ",
      "color": "#29b1db"
    },
    {
      "id": "PH",
      "color": "#29b1db"
    },
    {
      "id": "RO",
      "color": "#29b1db"
    },
    {
      "id": "SG",
      "color": "#29b1db"
    },
    {
      "id": "SE",
      "color": "#29b1db"
    },
    {
      "id": "TH",
      "color": "#29b1db"
    },
    {
      "id": "TR",
      "color": "#29b1db"
    },
    {
      "id": "UA",
      "color": "#29b1db"
    },
    {
      "id": "AE",
      "color": "#29b1db"
    },
    {
      "id": "VN",
      "color": "#29b1db"
    },
    {
      "id": "YU",
      "color": "#29b1db"
    },
    {
      "id": "ME",
      "color": "#29b1db"
    },
    {
      "id": "RS",
      "color": "#29b1db"
    },
    {
      "id": "XK",
      "color": "#29b1db"
    },
    ],

    "images": [ 

    {
      "id": "Vancouver",
      "svgPath": markerSVG,
      "selectable": true,
      "scale": 2,
      "title": "Vancouver",
      "latitude": 49.2577142,
      "longitude": -123.1941149,
    },

    {
      "id": "Egypt",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Egypt",
      "latitude": 26.7645498,
      "longitude": 26.3034919,
      "myUrl": "http://awoisoak.com/gallery/egypt/",
    },

	{
	  "id": "Guangzhou",
	  "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Guangzhou",
      "latitude": 23.1253491,
      "longitude": 112.9469735,
      "myUrl": "http://awoisoak.com/gallery/guangzhou/"
	},
	{
      "id": "Qibao & Zhujiajiao",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Qibao & Zhujiajiao",
      "latitude": 31.157657,
      "longitude": 121.349174,
      "myUrl": "http://awoisoak.com/gallery/qibao-zhujiajiao/"
    },
    {
      "id": "Shanghai",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Shanghai",
      "latitude": 31.2240438,
      "longitude": 121.1958847,
      "myUrl": "http://awoisoak.com/gallery/shanghai/"
    },


    {
      "id": "Hong Kong",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Hong Kong",
      "latitude": 22.3576177,
      "longitude": 113.980586,
      "myUrl": "http://awoisoak.com/gallery/hong-kong/"
    },

    {
      "id": "Japan",
      "svgPath": targetSVG,
      "zoomLevel": 19,
      "scale": 2,
      "title": "Japan",
      "latitude": 35.6732615,
      "longitude": 139.5699619,
      "images": 
      	[ 	{
      		  "id": "Fujikawaguchiko",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Fujikawaguchiko",
		      "latitude": 35.482548,
		      "longitude": 138.625623,
		      "myUrl": "http://awoisoak.com/gallery/fujikawaguchiko/"
      		},
      		{
		      "id": "Himeji",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Himeji",
		      "latitude": 34.9259075,
		      "longitude": 134.5452272,
		      "myUrl": "http://awoisoak.com/gallery/himeji/"
    		},
    		{
		      "id": "Kamakura & Enoshima",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Kamakura & Enoshima",
		      "latitude": 35.333922,
		      "longitude": 139.5057027,
		      "myUrl": "http://awoisoak.com/gallery/kamakura/"
  		    },
		    {
		      "id": "Kobe",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Kobe",
		      "latitude": 34.694295,
		      "longitude": 135.1555948,
		      "myUrl": "http://awoisoak.com/gallery/kobe/"
		    },
		    {
		      "id": "Kyoto",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Kyoto",
		      "latitude": 35.0060949,
		      "longitude": 135.7258448,
		      "myUrl": "http://awoisoak.com/gallery/kyoto/"
		    },
		    {
		      "id": "Mt. Fuji",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Mt. Fuji",
		      "latitude": 35.3605555,
		      "longitude": 138.7255837,
		      "myUrl": "http://awoisoak.com/gallery/mount-fuji/"
		    },
		    {
		      "id": "Nara",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Nara",
		      "latitude": 34.6868987,
		      "longitude": 135.7912975,
		      "myUrl": "http://awoisoak.com/gallery/nara/"
		    },
		    {
		      "id": "Nikko",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Nikko",
		      "latitude": 36.8463038,
		      "longitude": 139.4496884,
		      "myUrl": "http://awoisoak.com/gallery/nikko/"
		    },
		    {
		      "id": "Nokogiriyama",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Nokogiriyama",
		      "latitude": 35.160391,
		      "longitude": 139.8386754,
		      "myUrl": "http://awoisoak.com/gallery/nokogiriyama/"
		    },
		    {
		      "id": "Osaka",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Osaka",
		      "latitude": 34.6783987,
		      "longitude": 135.4775975,
		      "myUrl": "http://awoisoak.com/gallery/osaka/"
		    },
		    {
		      "id": "Tateyama Kurobe Alpine Route",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Tateyama Kurobe Alpine Route",
		      "latitude": 36.5704851,
		      "longitude": 137.5147513,
		      "myUrl": "http://awoisoak.com/gallery/tateyama-kurobe-alpine-route/"
		    },
		    {
		      "id": "Shirakawa-go, Matsumoto & Hakone",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Shirakawa-go, Matsumoto & Hakone",
		      "latitude": 36.2560756,
		      "longitude": 136.9039856,
		      "myUrl": "http://awoisoak.com/gallery/shirakawa-go_matsumoto_hakone/"
		    },
		    {
		      "id": "Tokyo",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Tokyo",
		      "latitude": 35.6732615,
		      "longitude": 139.5699619,
		      "myUrl": "http://awoisoak.com/gallery/tokyo/"
		    },
		    {
		      "id": "Yokohama",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Yokohama",
		      "latitude": 35.4619449,
		      "longitude": 139.5841448,
		      "myUrl": "http://awoisoak.com/gallery/yokohama/"
		    }
       ]
   },
    {
      "id": "Macau",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Macau",
      "latitude": 22.1634129,
      "longitude": 113.5283596,
      "myUrl": "http://awoisoak.com/gallery/macau/"
    },
    {
      "id": "Mongolia",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Mongolia",
      "latitude": 47.8916287,
      "longitude": 106.8316604,
      "myUrl": "http://awoisoak.com/gallery/mongolia/"
    },
    {
      "id": "Busan",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Busan",
      "latitude": 35.1644297,
      "longitude": 129.0015887,
      "myUrl": "http://awoisoak.com/gallery/busan/"
    },
    {
      "id": "Seoul",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Seoul",
      "latitude": 37.5650168,
      "longitude": 126.8491241,
      "myUrl": "http://awoisoak.com/gallery/seoul/"
    },

    {
      "id": "Taiwan",
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 2,
      "title": "Taiwan",
      "latitude": 25.0171605,
      "longitude": 121.365951,
      "images": 
      	[ 	
		    {
		      "id": "Caoling & Taoyuan",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Caoling & Taoyuan",
		      "latitude": 24.9715161,
		      "longitude": 121.9263685,
		      "myUrl": "http://awoisoak.com/gallery/caoling-taoyuan/"
		    },
		    {
		      "id": "Jiufen",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Jiufen",
		      "latitude": 25.1086957,
		      "longitude": 121.8411754,
		      "myUrl": "http://awoisoak.com/gallery/jiufen/"
		    },
		    {
		      "id": "Keelung",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Keelung",
		      "latitude": 25.1240385,
		      "longitude": 121.6819498,
		      "myUrl": "http://awoisoak.com/gallery/keelung/"
		    },
		    {
		      "id": "Matsu",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Matsu",
		      "latitude": 26.1592465,
		      "longitude": 120.0758576,
		      "myUrl": "http://awoisoak.com/gallery/matsu/"
		    },
		    {
		      "id": "Pingxi & Shifen",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Pingxi & Shifen",
		      "latitude": 25.0256853,
		      "longitude": 121.6788977,
		      "myUrl": "http://awoisoak.com/gallery/pingxi-shifen/"
		    },
		    {
		      "id": "Taipei & Surrounds",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Taipei & Surrounds",
		      "latitude": 25.0330,
		      "longitude": 121.5654,
		      "myUrl": "http://awoisoak.com/gallery/taipei-surrounds-2/"
		    },
		    {
		      "id": "Teapot Mountain",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Teapot Mountain",
		      "latitude": 25.1095149,
		      "longitude": 121.8598111,
		      "myUrl": "http://awoisoak.com/gallery/teapot-mountain/"
		    },
		    {
		      "id": "Yilan",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Yilan",
		      "latitude": 24.7502185,
		      "longitude": 121.7410691,
		      "myUrl": "http://awoisoak.com/gallery/yilan/"
		    },
		    {
		      "id": "Alishan",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Alishan",
		      "latitude": 23.4495571,
		      "longitude": 120.6593613,
		      "myUrl": "http://awoisoak.com/gallery/alishan/"
		    },
		    {
		      "id": "Taroko National Park & Sixty Rock Mountains",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Taroko National Park & Sixty Rock Mountains",
		      "latitude": 24.1587068,
		      "longitude": 121.6194357,
		      "myUrl": "http://awoisoak.com/gallery/hualien-taroko/"
		    },
		    {
		      "id": "Nantou",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Nantou",
		      "latitude": 23.8405924,
		      "longitude": 120.7016478,
		      "myUrl": "http://awoisoak.com/gallery/nantou/"
		    },
		    {
		      "id": "Sun Moon Lake",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Sun Moon Lake",
		      "latitude": 23.8523012,
		      "longitude":120.9008998 ,
		      "myUrl": "http://awoisoak.com/gallery/sun-moon-lake/"
		    },
		    {
		      "id": "Wuling",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Wuling",
		      "latitude": 24.1980065,
		      "longitude": 121.0893024,
		      "myUrl": "http://awoisoak.com/gallery/wuling/"
		    },
		    {
		      "id": "Yuanzi",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Yuanzi",
		      "latitude": 24.2368984,
		      "longitude": 120.9706112,
		      "myUrl": "http://awoisoak.com/gallery/yuanzui/"
		    },
		    {
		      "id": "Dulan & Chisang",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Dulan & Chisang",
		      "latitude": 22.8830209,
		      "longitude": 121.1987346,
		      "myUrl": "http://awoisoak.com/gallery/dulan-chishang/"
		    },
		    {
		      "id": "Green Island",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Green Island",
		      "latitude": 22.6563162,
		      "longitude": 121.4711125,
		      "myUrl": "http://awoisoak.com/gallery/green-island/"
		    },
		    {
		      "id": "Kaohsiung",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Kaohsiung",
		      "latitude": 22.6995934,
		      "longitude": 120.1906609,
		      "myUrl": "http://awoisoak.com/gallery/kaohsiung/"
		    },
		    {
		      "id": "Kenting",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Kenting",
		      "latitude": 21.9483307,
		      "longitude": 120.7775576,
		      "myUrl": "http://awoisoak.com/gallery/kenting/"
		    },
		    {
		      "id": "Lanyu",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Lanyu",
		      "latitude": 22.0268319,
		      "longitude": 121.5405837,
		      "myUrl": "http://awoisoak.com/gallery/lanyu/"
		    },
		    {
		      "id": "Maolin",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Maolin",
		      "latitude": 22.9187384,
		      "longitude": 120.6887898,
		      "myUrl": "http://awoisoak.com/gallery/maolin/"
		    },
		    {
		      "id": "Tainan",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Tainan",
		      "latitude": 23.1226787,
		      "longitude": 120.1058917,
		      "myUrl": "http://awoisoak.com/gallery/tainan/"
		    },
		    {
		      "id": "Xiaoliuqiu",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Xiaoliuqiu",
		      "latitude": 22.3388461,
		      "longitude": 120.3624885,
		      "myUrl": "http://awoisoak.com/gallery/xiaoliuqiu/"
		    }
      	]
    },
    {
      "id": "Siberia",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Siberia",
      "latitude": 52.2983665,
      "longitude": 104.1969472,
      "myUrl": "http://awoisoak.com/gallery/siberia/"
    },	
    {
      "id": "Istanbul",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Istanbul",
      "latitude": 41.0052363,
      "longitude": 28.8717539,
      "myUrl": "http://awoisoak.com/gallery/turkey/"
    },
    {
      "id": "Abu Dhabi",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Abu Dhabi",
      "latitude": 24.3864834,
      "longitude": 54.4194809,
      "myUrl": "http://awoisoak.com/gallery/abu-dhabi/"
    },
    {
      "id": "Dubai",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Dubai",
      "latitude": 25.0742929,
      "longitude": 55.0876784,
      "myUrl": "http://awoisoak.com/gallery/dubai/"
    },
    {
      "id": "Cambodia",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Cambodia",
      "latitude": 12.2996169,
      "longitude": 103.8566539,
      "myUrl": "http://awoisoak.com/gallery/cambodia/"
    },
    {
      "id": "Bali",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Bali",
      "latitude": -8.455996,
      "longitude": 114.7906702,
      "myUrl": "http://awoisoak.com/gallery/bali/"
    },
    {
      "id": "Komodo",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Komodo",
      "latitude": -8.6000756,
      "longitude": 119.5104427,
      "myUrl": "http://awoisoak.com/gallery/komodo/"
    },
    {
      "id": "Bohol",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Bohol",
      "latitude": 9.8677399,
      "longitude": 123.888226,
      "myUrl": "http://awoisoak.com/gallery/bohol/"
    },
    {
      "id": "Donsol",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "",
      "latitude": 12.9644514,
      "longitude": 123.5187043,
      "myUrl": "http://awoisoak.com/gallery/donsol/"
    },
    {
      "id": "El Nido",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "El Nido",
      "latitude": 11.2050867,
      "longitude": 119.2656554,
      "myUrl": "http://awoisoak.com/gallery/el-nido/"
    },
    {
      "id": "Legazpi",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Legazpi",
      "latitude": 13.1209017,
      "longitude": 123.7029626,
      "myUrl": "http://awoisoak.com/gallery/legazpi/"
    },
    {
      "id": "Manila",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Manila",
      "latitude": 14.5964957,
      "longitude": 120.9443574,
      "myUrl": "http://awoisoak.com/gallery/manila/"
    },
    {
      "id": "Siargao",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Siargao",
      "latitude":9.9040649,
      "longitude":125.9189328,
      "myUrl": "http://awoisoak.com/gallery/siargao/"
    },
    {
      "id": "Laos",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Laos",
      "latitude": 19.885636,
      "longitude": 102.1280049,
      "myUrl": "http://awoisoak.com/gallery/laos/"
    },
    {
      "id": "Kuala Lumpur",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Kuala Lumpur",
      "latitude": 3.1385035,
      "longitude": 101.6167778,
      "myUrl": "http://awoisoak.com/gallery/101283/"
    },
    {
      "id": "Myanmar",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Myanmar",
      "latitude": 21.2408719,
      "longitude": 96.1806164,
      "myUrl": "http://awoisoak.com/gallery/myanmar/"
    },
    {
      "id": "Singapore",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Singapore",
      "latitude": 1.3147268,
      "longitude": 103.7065913,
      "myUrl": "http://awoisoak.com/gallery/singapore/"
    },
    {
      "id": "Thailand",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Thailand",
      "latitude": 13.7245608,
      "longitude": 100.4926832,
      "myUrl": "http://awoisoak.com/gallery/thailand/"
    },
    {
      "id": "Ho Chi Minh",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Ho Chi Minh",
      "latitude": 10.7680332,
      "longitude": 106.4134938,
      "myUrl": "http://awoisoak.com/?border_gallery=ho-chi-minh"
    },
    {
      "id": "North Vietnam",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "North Vietnam",
      "latitude": 21.022703,
      "longitude": 105.8194112,
      "myUrl": "http://awoisoak.com/gallery/vietnam/"
    },
    {
      "id": "Ghorepani Poon Hill Trek",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Ghorepani Poon Hill Trek",
      "latitude": 28.40064,
      "longitude": 83.697474,
      "myUrl": "http://awoisoak.com/?border_gallery=ghorepani-pool-hill-trek"
    },
    {
      "id": "Kathmandu",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Kathmandu",
      "latitude": 27.7089559,
      "longitude": 85.2910276 ,
      "myUrl": "http://awoisoak.com/gallery/kathmandu/"
    },

    {
      "id": "Pokhara",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Pokhara",
      "latitude": 28.2297045,
      "longitude": 83.8864069,
      "myUrl": "http://awoisoak.com/gallery/pokhara/"
    },
    {
      "id": "Estonia",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Estonia",
      "latitude": 58.5999107,
      "longitude": 23.8631122,
      "myUrl": "http://awoisoak.com/gallery/estonia/"
    },
    {
      "id": "Helsinki",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Helsinki",
      "latitude": 60.1639301,
      "longitude": 24.8998444,
      "myUrl": "http://awoisoak.com/gallery/finland/"
    },
    {
      "id": "Iceland",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Iceland",
      "latitude": 64.9143556,
      "longitude":-21.2612643,
      "myUrl": "http://awoisoak.com/gallery/iceland/"
    },
    {
      "id": "Ireland",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Ireland",
      "latitude": 53.3242377,
      "longitude": -6.3861282,
      "myUrl": "http://awoisoak.com/gallery/ireland/"
    },
    {
      "id": "Latvia",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Latvia",
      "latitude": 56.8751259,
      "longitude": 23.4821525,
      "myUrl": "http://awoisoak.com/gallery/latvia/"
    },
    {
      "id": "Lithuania",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Lithuania",
      "latitude": 55.1684329,
      "longitude": 22.7711894,
      "myUrl": "http://awoisoak.com/gallery/lithuania/"
    },
    {
      "id": "Stockholm",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Stockholm",
      "latitude": 59.3260664,
      "longitude": 17.8471221,
      "myUrl": "http://awoisoak.com/gallery/sweden/"
    },

    {
      "id": "United Kingdom",
      "svgPath": targetSVG,
      "zoomLevel": 10,
      "scale": 2,
      "title": "United Kingdom",
      "latitude": 56.4782395,
      "longitude": -3.0370439,
      "images": 
      	[ 	
		    {
		      "id": "London",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "London",
		      "latitude": 51.5285578,
		      "longitude": -0.2420425,
		      "myUrl": "http://awoisoak.com/gallery/england/"
		    },
		 	{
		      "id": "Arbroath",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Arbroath",
		      "latitude": 56.5633591,
		      "longitude": -2.6047868,
		      "myUrl": "http://awoisoak.com/gallery/arbroath/"
		    },
		    {
		      "id": "Dundee",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Dundee",
		      "latitude": 56.4782395,
		      "longitude": -3.0370439,
		      "myUrl": "http://awoisoak.com/gallery/dundee/"
		    },
		    {
		      "id": "Glasgow, Stirling & Falkirk",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Glasgow, Stirling & Falkirk",
		      "latitude": 55.8554402,
		      "longitude": -4.302333,
		      "myUrl": "http://awoisoak.com/gallery/glasgow-stirling-falkirk/"
		    },
		    {
		      "id": "Highlands",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Highlands",
		      "latitude": 57.4679914,
		      "longitude": -4.2569628,
		      "myUrl": "http://awoisoak.com/gallery/highlands/"
		    },
		    {
		      "id": "Isle Of Skye",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Isle Of Skye",
		      "latitude": 57.3617192,
		      "longitude": -6.7797696,
		      "myUrl": "http://awoisoak.com/gallery/101821/"
		    },
		    {
		      "id": "St. Andrews",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "St. Andrews",
		      "latitude": 56.3398,
		      "longitude": -2.8253288,
		      "myUrl": "http://awoisoak.com/gallery/st-andrews/"
		    },
		    {
		      "id": "Tentsmuir",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Tentsmuir",
		      "latitude": 56.4200212,
		      "longitude": -2.8727287,
		      "myUrl": "http://awoisoak.com/gallery/tentsmuir/"
		    }

      	]
    },
    {
      "id": "Vienna",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Vienna",
      "latitude": 48.2206635,
      "longitude": 16.309849,
      "myUrl": "http://awoisoak.com/gallery/austria/"
    },
    {
      "id": "Antwerp",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Antwerp",
      "latitude": 51.2603011,
      "longitude": 4.2301106,
      "myUrl": "http://awoisoak.com/gallery/antwerp/"
    },
    {
      "id": "Bruges",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Bruges",
      "latitude": 51.2605829,
      "longitude": 3.0817207,
      "myUrl": "http://awoisoak.com/gallery/101958/"
    },
    {
      "id": "Ghent",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Ghent",
      "latitude": 51.082552,
      "longitude": 3.5740607,
      "myUrl": "http://awoisoak.com/gallery/101914/"
    },
    {
      "id": "Nice",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Nice",
      "latitude": 43.7030413,
      "longitude": 7.1827233,
      "myUrl": "http://awoisoak.com/gallery/france/"
    },
    {
      "id": "Berlin & Oranienburg",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Berlin & Oranienburg",
      "latitude": 52.5074588,
      "longitude": 13.2857212,
      "myUrl": "http://awoisoak.com/gallery/berlin-oranienburg/"
    },
    {
      "id": "Bremen",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Bremen",
      "latitude": 53.1201745,
      "longitude": 8.5958617,
      "myUrl": "http://awoisoak.com/gallery/bremen/"
    },
    {
      "id": "Hamburg",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Hamburg",
      "latitude": 53.5584898,
      "longitude": 9.7873974,
      "myUrl": "http://awoisoak.com/gallery/101442/"
    },
    {
      "id": "Hannover",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Hannover",
      "latitude": 52.3796456,
      "longitude": 9.6912606,
      "myUrl": "http://awoisoak.com/gallery/hannover/"
    },
    {
      "id": "Munich & Ingolstadt",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Munich & Ingolstadt",
      "latitude": 48.1548894,
      "longitude": 11.4716248,
      "myUrl": "http://awoisoak.com/gallery/munich-ingolstadt/"
    },
    {
      "id": "Luxembourg",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Luxembourg",
      "latitude": 49.8149602,
      "longitude": 5.8524603,
      "myUrl": "http://awoisoak.com/gallery/luxembourg/"
    },
    {
      "id": "Monaco",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Monaco",
      "latitude": 43.7383226,
      "longitude": 7.4156819,
      "myUrl": "http://awoisoak.com/gallery/monaco/"
    },

    {
      "id": "Bulgaria",
      "svgPath": targetSVG,
      "zoomLevel": 25,
      "scale": 2,
      "title": "Bulgaria",
      "latitude": 42.6954107,
      "longitude": 23.2537356,
      "images": 
      	[ 
		    {
		      "id": "Lovech",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Lovech",
		      "latitude": 43.1444687,
		      "longitude": 24.6759395,
		      "myUrl": "http://awoisoak.com/gallery/lovech/"
		    },
		    {
		      "id": "Rila",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Rila",
		      "latitude": 42.1853415,
		      "longitude": 23.4167234,
		      "myUrl": "http://awoisoak.com/gallery/rila/"
		    },
		    {
		      "id": "Sofia",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Sofia",
		      "latitude": 42.6954107,
		      "longitude":23.2537356 ,
		      "myUrl": "http://awoisoak.com/gallery/sofia/"
		    },
		    {
		      "id": "Veliko Tarnovo",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Veliko Tarnovo",
		      "latitude": 43.0840674,
		      "longitude": 25.5980173,
		      "myUrl": "http://awoisoak.com/gallery/veliko-tarnovo/"
		    },
		    {
		      "id": "Vitosha",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "",
		      "latitude": 42.55,
		      "longitude": 23.247806,
		      "myUrl": "http://awoisoak.com/gallery/vitosha/"
		    },

      	]
    },  	



    {
      "id": "Budapest",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Budapest",
      "latitude": 47.4811277,
      "longitude": 18.9898782,
      "myUrl": "http://awoisoak.com/gallery/hungary/"
    },
    {
      "id": "Romania",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Romania",
      "latitude": 45.9222429,
      "longitude": 22.7614768,
      "myUrl": "http://awoisoak.com/gallery/romania/"
    },
    {
      "id": "Transnistria",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Transnistria",
      "latitude": 47.3610824,
      "longitude": 28.678912,
      "myUrl": "http://awoisoak.com/gallery/transnistria/"
    },
    {
      "id": "Chernobyl",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Chernobyl",
      "latitude": 51.2752971,
      "longitude": 30.204333,
      "myUrl": "http://awoisoak.com/gallery/chernobyl/"
    },
    {
      "id": "Kiev",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Kiev",
      "latitude": 50.401951,
      "longitude": 30.3922661,
      "myUrl": "http://awoisoak.com/gallery/kiev/"
    },
	{
      "id": "Petergof",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Petergof",
      "latitude": 59.8742713,
      "longitude": 29.8587085,
      "myUrl": "http://awoisoak.com/gallery/petergof/"
    },
    {
      "id": "Saint Petersburg",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Saint Petersburg",
      "latitude": 59.9171469,
      "longitude": 30.0442034,
      "myUrl": "http://awoisoak.com/gallery/saint-petersburg/"
    },

    {
      "id": "Moscow",
      "svgPath": targetSVG,
      "zoomLevel": 35,
      "scale": 2,
      "title": "Moscow",
      "latitude": 55.7494718,
      "longitude": 37.3516385,
      "images": 
      	[ 
		    {
		      "id": "9 мая",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "9 мая",
		      "latitude": 55.7488318,
		      "longitude": 37.6226647,
		      "myUrl": "http://awoisoak.com/?border_gallery=9-%D0%BC%D0%B0%D1%8F"
		    },
		    {
		      "id": "Moscow",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Moscow",
		      "latitude": 55.7494718,
		      "longitude": 37.3516385,
		      "myUrl": "http://awoisoak.com/gallery/moscow-city/"
		    },
		    {
		      "id": "Park Pobedy",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Park Pobedy",
		      "latitude": 55.7358848,
		      "longitude": 37.5152984,
		      "myUrl": "http://awoisoak.com/gallery/park-pobedy/"
		    },
		    {
		      "id": "Novodevichy",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Novodevichy",
		      "latitude": 55.7283501,
		      "longitude": 37.5569208,
		      "myUrl": "http://awoisoak.com/gallery/novodevichy/"
		    },
		    {
		      "id": "Sergiyev Posad",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Sergiyev Posad",
		      "latitude": 56.30581,
		      "longitude": 38.088667,
		      "myUrl": "http://awoisoak.com/gallery/sergiyev-posad/"
		    },


      	]
    },  	
    {
      "id": "Bosnia and Herzegovina",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Bosnia and Herzegovina",
      "latitude": 43.9110327,
      "longitude": 16.548428,
      "myUrl": "http://awoisoak.com/gallery/bosnia-and-herzegovina/"
    },
    {
      "id": "Dubrovnik",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Dubrovnik",
      "latitude": 42.6457243,
      "longitude": 18.0765056,
      "myUrl": "http://awoisoak.com/gallery/dubrovnik/"
    },
    {
      "id": "Plitvice Lakes",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Plitvice Lakes",
      "latitude": 44.8653966,
      "longitude": 15.5798179,
      "myUrl": "http://awoisoak.com/gallery/plitivice-lakes/"
    },
    {
      "id": "Split",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Split",
      "latitude": 43.5148461,
      "longitude": 16.4139784,
      "myUrl": "http://awoisoak.com/gallery/split/"
    },
    {
      "id": "Zadar",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Zadar",
      "latitude": 44.1349503,
      "longitude": 15.2138089,
      "myUrl": "http://awoisoak.com/gallery/zadar/"
    },
    {
      "id": "Zagreb",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Zagreb",
      "latitude": 45.8401744,
      "longitude": 15.8941205,
      "myUrl": "http://awoisoak.com/gallery/zagreb/"
    },
    {
      "id": "Burano & Murano",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Burano & Murano",
      "latitude": 45.4853442,
      "longitude": 12.4150692,
      "myUrl": "http://awoisoak.com/gallery/burano-murano/"
    },
    {
      "id": "Milan",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Milan",
      "latitude": 45.4627123,
      "longitude": 9.1075212,
      "myUrl": "http://awoisoak.com/gallery/milan/"
    },
    {
      "id": "Trieste",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Trieste",
      "latitude": 45.6523148,
      "longitude": 13.7485568,
      "myUrl": "http://awoisoak.com/gallery/trieste/"
    },
    {
      "id": "Venice",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Venice",
      "latitude": 45.4055776,
      "longitude": 12.2413175,
      "myUrl": "http://awoisoak.com/gallery/venice/"
    },
    {
      "id": "Montenegro, Kosovo , Macedonia & Albania",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Montenegro, Kosovo , Macedonia & Albania",
      "latitude": 42.2136071,
      "longitude": 20.3029722,
      "myUrl": "http://awoisoak.com/gallery/102245/"
    },
    {
      "id": "Porto",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Porto",
      "latitude": 41.1628634,
      "longitude": -8.6569582,
      "myUrl": "http://awoisoak.com/gallery/portugal/"
    },
    {
      "id": "Belgrade",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Belgrade",
      "latitude": 44.1887195,
      "longitude": 18.6743723,
      "myUrl": "http://awoisoak.com/gallery/serbia/"
    },
    {
      "id": "Spain",
      "svgPath": targetSVG,
      "zoomLevel": 20,
      "scale": 2,
      "title": "Spain",
      "latitude": 40.9172672,
      "longitude": -1.3090732,
            "images": 
      	[ 
		    {
		      "id": "Barcelona",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Barcelona",
		      "latitude": 41.3947687,
		      "longitude": 2.0785567,
		      "myUrl": "http://awoisoak.com/gallery/barcelona/"
		    },
		    {
		      "id": "Granada",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Granada",
		      "latitude": 37.180945,
		      "longitude": -3.6088242,
		      "myUrl": "http://awoisoak.com/gallery/granada/"
		    }, 
		    {
		      "id": "Madrid",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Madrid",
		      "latitude": 40.4378693,
		      "longitude": -3.8199623,
		      "myUrl": "http://awoisoak.com/gallery/madrid/"
		    },

		]
    },     	

    {
      "id": "Tenerife",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Tenerife",
      "latitude": 28.2931058,
      "longitude": -16.8035233,
      "myUrl": "http://awoisoak.com/gallery/tenerife/"
    },
    {
      "id": "South Island",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "South Island",
      "latitude": -43.4933447,
      "longitude": 171.2019378,
      "myUrl": "http://awoisoak.com/gallery/south-island/"
    },
    {
      "id": "North Island",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "North Island",
      "latitude": -38.6898215,
      "longitude": 176.009907,
      "myUrl": "http://awoisoak.com/gallery/north-island/"
    },
    {
      "id": "Cairns & Cape Tribulation",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Cairns & Cape Tribulation",
      "latitude": -16.4129301,
      "longitude": 142.9979353,
      "myUrl": "http://awoisoak.com/gallery/cairns-cape-tribulation/"
    },
    {
      "id": "Brisbane",
      "svgPath": targetSVG,
      "zoomLevel": 35,
      "scale": 2,
      "title": "Brisbane",
      "latitude": -27.3818598,
      "longitude": 152.7123351,
      "images": 
      	[ 
			{
		      "id": "Brisbane",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Brisbane",
		      "latitude": -27.3818598,
		      "longitude": 152.7123351,
		      "myUrl": "http://awoisoak.com/gallery/brisbane/"
		    },
		    {
		      "id": "Fraser Island",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Fraser Island",
		      "latitude": -25.2469444,
		      "longitude": 152.8705584,
		      "myUrl": "http://awoisoak.com/gallery/fraser-island/"
		    },
		    {
		      "id": "Mooloolaba & Dreamworld",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Mooloolaba & Dreamworld",
		      "latitude": -26.6849603,
		      "longitude": 153.106889,
		      "myUrl": "http://awoisoak.com/gallery/mooloolaba-dreamworld/"
		    },
		    {
		      "id": "Noosa & Stradbroke Island",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Noosa & Stradbroke Island",
		      "latitude": -26.3181943,
		      "longitude": 152.8009457,
		      "myUrl": "http://awoisoak.com/gallery/stradbroke-island/"
		    },
		    {
		      "id": "Byron Bay & Nimbin",
		      "svgPath": dartboardSVG,
		      "selectable": true,
		      "scale": 1,
		      "title": "Byron Bay & Nimbin",
		      "latitude": -28.6469767,
		      "longitude": 153.5852677,
		      "myUrl": "http://awoisoak.com/gallery/byron-bay/"
		    }
		]
	},

    {
      "id": "Sidney & Blue Mountains",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Sidney & Blue Mountains",
      "latitude": -33.8479715,
      "longitude":150.651096 ,
      "myUrl": "http://awoisoak.com/gallery/sidney-blue-mountains/"
    },
    {
      "id": "Kakadu National Park",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Kakadu National Park",
      "latitude": -13.0922931,
      "longitude": 132.3915718,
      "myUrl": "http://awoisoak.com/gallery/kakadu-national-park/"
    },
    {
      "id": "King Canyon & Devil Marbles",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "King Canyon & Devil Marbles",
      "latitude": -24.2214887,
      "longitude": 131.579162,
      "myUrl": "http://awoisoak.com/gallery/kings-canyon-devil-marbles/"
    },
    {
      "id": "Uluru-Kata Tjuta",
      "svgPath": dartboardSVG,
      "selectable": true,
      "scale": 1,
      "title": "Uluru-Kata Tjuta",
      "latitude": -25.3124125,
      "longitude": 130.7414871,
      "myUrl": "http://awoisoak.com/gallery/uluru-kata-tjuta/"
    },
   ]
  },

  "listeners": [ {
    "event": "clickMapObject",
    "method": function( event ) {
	    if (event.mapObject.myUrl != undefined){
	       $.fancybox({
    		width: 1500,
    		href: event.mapObject.myUrl,
    		title: event.mapObject.title,
    		type: "iframe"
  			});
	   }
    }
  }]
  
  
} );


function clickObject( id ) {
  map.clickMapObject( map.getObjectById( id ) );
}



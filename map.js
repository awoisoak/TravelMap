// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
var currentObject;

var $CHART$ = AmCharts.makeChart( "$CHART$", {
  "type": "map",
  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#CC0000"
  },
  "smallMap": {},
  
  
    "dataProvider": {
    "map": "worldLow",
    "images": [ {
      "id": "Vienna",
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 2,
      "title": "Vienna",
      "latitude": 48.2092,
      "longitude": 16.3728,
      "myUrl": "https://www.amcharts.com/"
    },
    {
      "id": "Egypt",
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 2,
      "title": "Egypt",
      "latitude": 26.7645498,
      "longitude": 26.3034919,
      "myUrl": "http://awoisoak.com/gallery/egypt/"
    },

    {
      "id": "Guangzhou",
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 2,
      "title": "Guangzhou",
      "latitude": 23.1253491,
      "longitude": 112.9469735,
      "myUrl": "http://awoisoak.com/gallery/guangzhou/"
    },
    {
      "id": "Qibao & Zhujiajiao",
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 2,
      "title": "Qibao & Zhujiajiao",
      "latitude": 31.157657,
      "longitude": 121.349174,
      "myUrl": "http://awoisoak.com/gallery/qibao-zhujiajiao/"
    },
    {
      "id": "Shanghai",
      "svgPath": targetSVG,
      "zoomLevel": 5,
      "scale": 2,
      "title": "Shanghai",
      "latitude": 31.2240438,
      "longitude": 121.1958847,
      "myUrl": "http://awoisoak.com/gallery/shanghai/"
    },
     ]
  },

  "listeners": [ {
    "event": "clickMapObject",
    "method": function( event ) {
      // check if the map is already at traget zoomLevel and go to url if it is
      if ( currentObject && event.mapObject.id == currentObject.id ) {
        window.location.href = event.mapObject.myUrl;
      }
      currentObject = event.mapObject;
    }
  }]
  
  
} );


function clickObject( id ) {
  map.clickMapObject( map.getObjectById( id ) );
}


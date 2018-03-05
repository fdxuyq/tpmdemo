<template>

    <div id="myMap" >
      <v-map ref="map" :zoom="zoom" :center="center">
        <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
     <!--    <v-marker :lat-lng="marker" @l-click="dialogVisible = true;">
         </v-marker> -->
       <!--  <v-geo-json :geojson="truckPoint.geojson" :options="truckPoint.options"></v-geo-json>-->
        <v-geo-json :geojson="truckRoute.geojson" :options="truckRoute.options" :focus="focusLocId"></v-geo-json>
        <v-geo-json :geojson="fence.geojson" :options="fence.options"></v-geo-json>
<!--         <v-geo-json :geojson="campus.geojson" :options="campus.options"></v-geo-json> -->
        <v-geo-json :geojson="ship.geojson" :options="ship.options"></v-geo-json>
        <v-geo-json :geojson="shipStart.geojson" :options="shipStart.options"></v-geo-json>
        <v-geo-json :geojson="shipEnd.geojson" :options="shipEnd.options"></v-geo-json>
        <v-geo-json :geojson="shipRoute.geojson" :options="shipRoute.options"></v-geo-json>
        <v-geo-json :geojson="truck.geojson" :options="truck.options"></v-geo-json>
      </v-map>

<!--       <el-dialog
        title="Shipment History Details"
        :visible.sync="dialogVisible"
        width="30%" id="popupLayer">
        <img src="../assets/images/popup-1.png" alt="Shipment Details" class="popup">
      </el-dialog> -->

    </div>


</template>

<script>
import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet';
// import polylineDecorator from 'leaflet-polylinedecorator'

import PopupContent from './PopupContent';
import TooltipContent from './TooltipContent';
// import FilterContent from './FilterContent';
import Bus from '../bus.js'

import { default as data } from '../assets/geojson/map-geojson.js';
import { default as story1 } from '../assets/geojson/story-1-geojson.js';
import { default as story2 } from '../assets/geojson/story-2-geojson.js';
import { default as story3 } from '../assets/geojson/story-3-geojson.js';
import { default as story4 } from '../assets/geojson/story-4-geojson.js';
import { default as story5 } from '../assets/geojson/story-5-geojson.js';
// import { default as data } from '../assets/geojson/inland-geojson.js';

var shipIcon = L.icon({
  iconUrl: 'markerShip.png',
  iconSize: [48,48],
  iconAnchor: [24,48],
  popupAnchor: [0,-48]
});

var truckIcon = L.icon({
  iconUrl: 'markerTruck.png',
  iconSize: [48,48],
  iconAnchor: [24,48],
  popupAnchor: [0,-48]
});
var startIcon = L.icon({
  iconUrl: 'markerStart.png',
  iconSize: [48,48],
  iconAnchor: [24,48],
  popupAnchor: [0,-48]
});
var endIcon = L.icon({
  iconUrl: 'markerEnd.png',
  iconSize: [48,48],
  iconAnchor: [24,48],
  popupAnchor: [0,-48]
});

function onEachFeature(feature, layer) {
  // var that = this;
  //For display Popup Content
  let popupContent = Vue.extend(PopupContent);
  let popup = new popupContent({
    propsData: {
      data: {
        type: feature.properties.popupContent,
      }
    }
  });
  let popupOption = {
     'maxWidth' : '500',
     'className' : 'custom'
  };

  if(popup.data.type != null) {
    layer.bindPopup(popup.$mount().$el, popupOption);
  }
  layer.on('mouseover', function () {
      this.openPopup();
  });

  let tooltipContent = Vue.extend(TooltipContent);
  let tooltip = new tooltipContent({
    propsData: {
      data: {
        type: feature.properties.tooltipContent
      }
    }
  });
  if(tooltip.data.type != null) {
    layer.bindTooltip(tooltip.$mount().$el);
  }

}

// function filterRoute(feature, layer) {
//   let filterFocus = Vue.extend(filterContent);
//   let filterId = new filterFocus({
//     propsData: {
//       data: {
//         type: feature.properties.focusId,
//       }
//     }
//   });
//   let mapLocFocus = myMap.data.focusLocId;
//   console.log(mapLocFocus);
// }


// function onEachFeature(feature, layer) {
//   let popupContent = Vue.extend(PopupContent);
//   let popup = new popupContent({ propsData: { data: { type: feature.type, color: 'blue'}}});
//   layer.bindPopup(popup.$mount().$el);
// }

// var shipIcon = L.icon({
//   iconUrl: 'ship.png',
//   iconSize: [30, 30]
// });

// var truckIcon = L.icon({
//   iconUrl: 'truck.png',
//   iconSize: [30, 30],
//   iconAnchor: [16, 37],
//   popupAnchor: [0, -28]
// });

export default {
  name: 'myMap',
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer' :Vue2Leaflet.TileLayer,
    'v-marker': Vue2Leaflet.Marker,
    'v-polyline': Vue2Leaflet.Polyline,
    'v-geo-json': Vue2Leaflet.GeoJSON,
    'v-popup': Vue2Leaflet.Popup,
    'v-tooltip': Vue2Leaflet.Tooltip
  },
  data () {
    return {
      zoom:3,
      // center: L.latLng(32.8303,-79.8785),
      center: [20.7303,-155.1919],
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      focusLocId: '',

      truckRoute: {
        geojson: data.truckRoute,
        options: {
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng);
            console.log(this.fId);
          },
          // filter: function (feature, layer, focusLocId) {
          //   if(focusLocId != null) {
          //     console.log('Existed!');
          //   }
          //   if (feature.properties.focusId == this.focusLocId) {
          //     console.log('success');
          //     console.log(this.focusLocId);
          //     return true;
          //   }
          // },
          style: function() {
            return {
              color: '#59F9FC'
            }
          },
        }
      },
      truck: {
        geojson: data.truck,
        options: {
          style: function (feature) {
            return feature.properties && feature.properties.style;
          },
          onEachFeature: onEachFeature,
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: truckIcon});
            // if (L.zoom < 10) {
            //   this.setOpacity(0);
            // }
          },

        }
      },
      ship: {
        geojson: data.ship,
        options: {
          style: function (feature) {
            return feature.properties && feature.properties.style;
          },
          onEachFeature: onEachFeature,
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: shipIcon});
          }
        }
      },
      shipStart: {
        geojson: data.shipRouteStart,
        options: {
          style: function (feature) {
            return feature.properties && feature.properties.style;
          },
          onEachFeature: onEachFeature,
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: startIcon});
          }
        }
      },
      shipEnd: {
        geojson: data.shipRouteEnd,
        options: {
          style: function (feature) {
            return feature.properties && feature.properties.style;
          },
          onEachFeature: onEachFeature,
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: endIcon});
          }
        }
      },
      shipRoute: {
        geojson: data.shipRoute,
        options: {
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng);
          },
          style: function() {
            return {
              color: "yellow"
            }
          },
          onEachFeature: onEachFeature
        }
      },
      fence: {
        geojson: data.fence,
        options: {
          style: function(){
            return {
              weight: 1,
              color: "#999",
              opacity: 1,
              fillColor: "#FF0000",
              fillOpacity: 0.6
            }
          },
          onEachFeature: onEachFeature
        }
      },
      dialogVisible: false
    }
  },
  mounted() {
    Bus.$on('on',(mapLoc,mapZoom,mapLocId) => {
      this.center = mapLoc;
      this.zoom = mapZoom;
      this.focusLocId = mapLocId;
      console.log(this.focusLocId);
      switch(this.focusLocId){
        case 1:
          this.truckRoute.geojson = story1.truckRoute;
          this.shipRoute.geojson = story1.shipRoute;
          this.shipStart.geojson = story1.shipRouteStart;
          this.ship.geojson = story1.ship;
          this.truck.geojson = story1.truck;
          break;
        case 2:
          this.truckRoute.geojson = story2.truckRoute;
          this.shipRoute.geojson = story2.shipRoute;
          this.shipStart.geojson = story2.shipRouteStart;
          this.ship.geojson = story2.ship;
          this.truck.geojson = story2.truck;

          break;
        case 3:
          this.truckRoute.geojson = story3.truckRoute;
          this.shipRoute.geojson = story3.shipRoute;
          this.shipStart.geojson = story3.shipRouteStart;
          this.ship.geojson = story3.ship;
          this.truck.geojson = story3.truck;
          break;
        case 4:
          this.truckRoute.geojson = story4.truckRoute;
          this.shipRoute.geojson = story4.shipRoute;
          this.shipStart.geojson = story4.shipRouteStart;
          this.ship.geojson = story4.ship;
          this.truck.geojson = story4.truck;
          break;
        case 5:
          this.truckRoute.geojson = story5.truckRoute;
          this.shipRoute.geojson = story5.shipRoute;
          this.shipStart.geojson = story5.shipRouteStart;
          this.shipEnd.geojson = story5.shipRouteEnd;
          this.ship.geojson = story5.ship;
          this.truck.geojson = story5.truck;
          break;


      }
      // if(this.focusLocId == 2){
      //   this.truckRoute.geojson = data.truckR1
      // }


    } )
  },
  // computed: {
  //   truckRoute() {
  //       const self = this
  //       geojson: data.truckRoute,
  //       options: {
  //         pointToLayer: function (feature, latlng) {
  //           return L.marker(latlng);
  //         },
  //         filter() {
  //           console.log(self.focusLocId);
  //         },
  //         // filter: function (feature, layer) {
  //         //   if (feature.properties.record == 5) {
  //         //     return true;
  //         //   }
  //         // },
  //         style: function() {
  //           return {
  //             color: '#59F9FC'
  //           }
  //         },
  //       }
  //     },
  // },
  methods: {
    // filterRoute: function(feature, focus){
    //   console.log(this.focusLocId);
    // }

  }
}

</script>

<style>
  #myMap {
  height: 80vh;
  min-height: 650px;
  margin-top: 20px;
  }
  .popup {
    margin:0;
    padding:0;
  }
  .custom .leaflet-popup-tip,.custom .leaflet-popup-content-wrapper  {
      background: #30364d;
      color: #ffffff;
  }

</style>


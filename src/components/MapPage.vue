<template>

    <div id="myMap" >

      <v-map ref="map" style="height: 700px" :zoom="zoom" :center="center">
        <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
     <!--    <v-marker :lat-lng="marker" @l-click="dialogVisible = true;">
         </v-marker> -->
       <!--  <v-geo-json :geojson="truckPoint.geojson" :options="truckPoint.options"></v-geo-json>
        <v-geo-json :geojson="truckRoute.geojson" :options="truckRoute.options"></v-geo-json> -->
        <v-geo-json :geojson="ship.geojson" :options="ship.options"></v-geo-json>
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
import PopupContent from './PopupContent';
import Bus from '../bus.js'

import { default as data } from '../assets/geojson/map-geojson.js';
// import { default as data } from '../assets/geojson/inland-geojson.js';

var shipIcon = L.icon({
  iconUrl: 'ship.png',
  iconSize: [30, 30],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

var truckIcon = L.icon({
  iconUrl: 'truck.png',
  iconSize: [30, 30],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

function onEachFeature(feature, layer) {
  var that = this;
  let popupContent = Vue.extend(PopupContent);
  let popup = new popupContent({ propsData: { data: { type: feature.properties.popupContent}}});
  layer.bindPopup(popup.$mount().$el);
  layer.on('mouseover', function (e) {
      this.openPopup();
  });
}


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
      // marker: L.latLng(32.8346634,-79.8785019),
      polyline: {
        type: "polyline",
        latlngs: [[32.8346634,-79.8785019],[32.8349686,-79.8769913],[32.8351746,-79.8761444],[32.8357887,-79.8755569],[32.8361206,-79.875351],[32.8367119,-79.8749466]],
        color: "green"
      },
      truckPoint: {
        geojson: data.truckPoint,
        options: {
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: truckIcon});
          },
        }
      },
      truckRoute: {
        geojson: data.truckRoute,
        options: {
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: shipIcon});
          }
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
          }
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
      dialogVisible: false
    }
  },
  // mounted: function(){
  //   const mapComponent = this.$refs.map;
  //   mapComponent.mapObject.on('move', () => {
  //     this.centerLatLong = this.$refs.map.mapObject.getCenter()
  //     console.log('map was moved')
  //   })
  // }
  mounted() {
    Bus.$on('on',(mapLoc,mapZoom) => {
      this.center = mapLoc;
      this.zoom = mapZoom;
    })
  }
}

</script>

<style scoped>
  #myMap {
  height: 700px;
  margin-top: 20px;

  .popup {
    margin:0;
    padding:0;
  }
}
</style>


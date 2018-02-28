<template>

    <div id="myMap" >
      <!-- <v-map ref="mapid" :zoom=8 :center="[33.7303,-118.1919]">
        <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
        <v-marker :lat-lng="[33.7303,-118.1919]"></v-marker>
      </v-map> -->
      <v-map ref="map" style="height: 700px" :zoom="zoom" :center="center">
        <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
        <v-marker :lat-lng="marker" @l-click="dialogVisible = true;">
         </v-marker>
        <v-geo-json :geojson="truck.geojson" :options="truck.options"></v-geo-json>
        <v-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"></v-polyline>
      </v-map>

      <el-dialog
        title="Shipment History Details"
        :visible.sync="dialogVisible"
        width="30%">
        <img src="../assets/images/popup-1.png" alt="Shipment Details" class="popup">
        <!-- <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span> -->
      </el-dialog>

    </div>


</template>

<script>
import Vue2Leaflet from 'vue2-leaflet';
import { default as data } from '../assets/geojson/inland-geojson.js';

function onEachFeature(feature, layer) {
  let popupContent = Vue.extend(PopupContent);
  let popup = new popupContent({ propsData: { data: { type: feature.type, color: 'blue'}}});
  layer.bindPopup(popup.$mount().$el);
}

var shipIcon = L.icon({
  iconUrl: 'ship.png',
  iconSize: [30, 30]
});

var truckIcon = L.icon({
  iconUrl: 'truck.png',
  iconSize: [30, 30],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

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
      zoom:14,
      center: L.latLng(32.8303,-79.8785),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(32.8346634,-79.8785019),
      polyline: {
        type: "polyline",
        latlngs: [[32.8346634,-79.8785019],[32.8349686,-79.8769913],[32.8351746,-79.8761444],[32.8357887,-79.8755569],[32.8361206,-79.875351],[32.8367119,-79.8749466]],
        color: "green"
      },
      truck: {
        geojson: data.truck,
        options: {
          onEachFeature: onEachFeature,
          pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {icon: truckIcon});
          }
        }
      },
      dialogVisible: false
    }
  },
  mounted: function(){
    const mapComponent = this.$refs.map;
    this.$refs.map.mapObject.on('move', () => {
      this.centerLatLong = this.$refs.map.mapObject.getCenter()
      console.log('map was moved')
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


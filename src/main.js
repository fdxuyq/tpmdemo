import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



// Vue.config.productionTip = false

Vue.use(ElementUI)



new Vue({
  el: '#app',
  render: h => h(App)
}).$mount('#app')



// var mymap = L.map('mapid').setView([33.7303,-118.1919], 6);
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
//     maxZoom: 20,
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//       '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//       'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     id: 'mapbox.streets'
//   }).addTo(mymap);

// var vesselIcon = L.icon({
//   iconUrl: 'ship.png',
//   iconSize: [40, 40],
//   // iconAnchor: [20, 40],
//   // popupAnchor: [-20, -40]

// })

// var marker = L.marker([33.6090,-118.1929], {icon: vesselIcon}).addTo(mymap);



// // var circle = L.circle([51.508, -0.11], {
// //     color: 'red',
// //     fillColor: '#f03',
// //     fillOpacity: 0.5,
// //     radius: 500
// // }).addTo(mymap);

// // var polygon = L.polygon([
// //     [32.6303,-116.1919],
// //     [33.7303,-118.5919],
// //     [33.8303,-120.9919]
// // ]).addTo(mymap);

// var polyline = L.polyline([
//     [33.6090,-118.1929],
//     [32.5090,-118.2929],
//     [31.7090,-120.4929],
//     [31.3090,-121.6929],
//     [30.8090,-122.1929],
//     [30.1090,-122.9929],
//     [29.6090,-124.3512]

//   ]).addTo(mymap);

// // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// // circle.bindPopup("I am a circle.");
// // polygon.bindPopup("I am a polygon.");

// // var popup = L.popup()
// //     .setLatLng([51.5, -0.09])
// //     .setContent("I am a standalone popup.")
// //     .openOn(mymap);

// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(mymap);
// }

// mymap.on('click', onMapClick);

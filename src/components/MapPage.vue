<template>

    <div id="mapid" >
      <v-map ref="mapid" :zoom=6 :center="[33.7303,-118.1919]">
        <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
        <v-marker :lat-lng="[33.7303,-118.1919]" @l-move="doSomething"></v-marker>
      </v-map>
    </div>


</template>

<script>


</script>

<style scoped>
  #mapid {
  height: 700px;
  margin-top: 20px;
}
</style>


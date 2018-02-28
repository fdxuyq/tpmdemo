<template>
  <div id="wrapper">
    <el-row>
      <el-col :span="24"><HeaderPage /></el-col>
    </el-row>    <el-row :gutter="0">
      <el-col :span="8"><LeftPage /></el-col>
      <el-col :span="16"><KeyFiguresPage /><MapPage /></el-col>
    </el-row>
  </div>
</template>

<script>


import HeaderPage from './components/HeaderPage.vue';
import LeftPage from './components/LeftPage.vue';
import MapPage from './components/MapPage.vue';
import KeyFiguresPage from './components/KeyFiguresPage.vue';





export default {
  name: 'app',
  components: {
    HeaderPage,
    LeftPage,
    KeyFiguresPage,
    MapPage,

  }
}
</script>

<style>
/*.leaflet-fake-icon-image-2x {
  background-image: url(../../node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(../../node_modules/leaflet/dist/images/marker-shadow.png);
}*/
/*@import "../../node_modules/leaflet/dist/leaflet.css";*/


html {
  font-size:62.5%;
}
body{
  margin: 0;
  background-color: #30364d;
}
#wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.inline-block{
  display: inline-block;
}
.el-table th, .el-table tr{
  background-color: #242243;
  color:#fff;
  border-bottom-color: #242243;
}
.el-table td{
/*  border-bottom: 0px;*/
  border-bottom-color: #242243;
}

.el-button+.el-button {
  margin-left: 0;
}

.el-table__body tr .current-row>td{
  background-color: black;
}

/*.el-table--striped .el-table__body tr.el-table__row--striped.current-row td, .el-table__body tr.current-row>td, .el-table__body tr.hover-row.current-row>td, .el-table__body tr.hover-row.el-table__row--striped.current-row>td, .el-table__body tr.hover-row.el-table__row--striped>td, .el-table__body tr.hover-row>td {
  background-color: #242243;
  border-width: 1px;
  border-color: #18d6c1;
}
*/

.side-table .el-table__body tr.current-row> td , .side-table .el-table__body tr.hover-row.current-row>td,.side-table .el-table__body tr.hover-row.el-table__row--striped.current-row>td,.side-table .el-table__body tr.hover-row.el-table__row--striped>td,.side-table .el-table__body tr.hover-row>td{
  background-color: transparent!important;
}

.side-table .el-table__body tr:hover>td{
  background-color: rgba(255,255,255,0.3)!important;
}

.side-table .el-table__body tr.current-row>td {
  border-width: 1px 0!important;
  border-style: solid;
  border-color: #18D6C1;

}
.side-table .el-table__body tr.current-row>td:first-child {
  border-width: 1px 0 1px 1px!important;
}
.side-table .el-table__body tr.current-row>td:last-child {
  border-width: 1px 1px 1px 0!important;
}

.el-table::before {
  height:0;
}

</style>

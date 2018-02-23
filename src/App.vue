<template>
  <div id="app">

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!--     <TestPage msg="Map sample" /> -->

  <el-row>
    <el-col :span="24"><HeaderPage /></el-col>
  </el-row>    <el-row :gutter="0">
    <el-col :span="8"><div class="grid-content bg-purple"><LeftPage /></div></el-col>
    <el-col :span="16"><div class="grid-content bg-purple"><KeyFiguresPage /><MapPage /></div></el-col>
  </el-row>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TestPage from './components/TestPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import LeftPage from './components/LeftPage.vue';
import MapPage from './components/MapPage.vue';
import KeyFiguresPage from './components/KeyFiguresPage.vue';

export default {
  name: 'app',
  components: {
    // TestPage,
    HeaderPage,
    LeftPage,
    KeyFiguresPage,
    MapPage
  }
}
</script>

<style>
html {
  font-size:62.5%;
}
body{
  margin: 0;
  background-color: #30364d;
}
#app {
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

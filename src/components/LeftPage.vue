<template>
  <div class="side">
  <div class="side-content">
    <h2 class="side-title">Shipments Overview</h2>
    <div class="side-figure-wrapper">
      <el-row>
        <el-col :span="8" class="side-figure">
           <div class="figure-circle">
              <span>5</span>
           </div>
           <span class="figure-description">Potential Delay </span>
        </el-col>
        <el-col :span="8" class="side-figure">
           <div class="figure-circle">
              <span>4</span>
           </div>
           <span class="figure-description">Arriving in 10 days</span>
        </el-col>
        <el-col :span="8" class="side-figure">
           <div class="figure-circle">
              <span>7</span>
           </div>
           <span class="figure-description">Trucks</span>
        </el-col>

      </el-row>
    </div>
    <h3 class="side-section-title">Delay Shipment Severity</h3>
    <div class="filter-buttons">
      <el-row>
         <el-col :span="4"><el-button class="filter-button-1" v-on:click="serverityFilter('0')">19</el-button></el-col>
         <el-col :span="4"><el-button class="filter-button-2" v-on:click="serverityFilter('1')">3</el-button></el-col>
         <el-col :span="4"><el-button class="filter-button-3" v-on:click="serverityFilter('2')">4</el-button></el-col>
         <el-col :span="4"><el-button class="filter-button-4" v-on:click="serverityFilter('3')">4</el-button></el-col>
         <el-col :span="4"><el-button class="filter-button-5" v-on:click="serverityFilter('4')">4</el-button></el-col>
         <el-col :span="4"><el-button class="filter-button-6" v-on:click="serverityFilter('5')">1</el-button></el-col>
       </el-row>






    </div>
      <el-input placeholder="Search with Shipment Number" prefix-icon="el-icon-search"
      v-model="searchNum" clearable class="side-table-filter">
    </el-input>
      <el-table ref="singleTable" :data="tables" highlight-current-row
       @current-change="handleCurrentChange" @row-click="changeMap" row-key="shipmentNum" class="side-table">
      <el-table-column property="shipmentNum" label="Shipment #" width="120">
      </el-table-column>
      <el-table-column property="from" label="From" width="120">
      </el-table-column>
      <el-table-column property="to" label="To" width="120">
      </el-table-column>
      <el-table-column property="destination" label="Destination">
      </el-table-column>
      <el-table-column property="containerNum" label="# of Container">
      </el-table-column>
    </el-table>
  </div>
  </div>
</template>

<script>
import Bus from '../bus.js'

  export default {
    data() {
      return {
        tableData: [{
          shipmentNum: '5503020090',
          from: 'Charleston',
          to: 'Rotterdam',
          destination: 'Rotterdam',
          containerNum: '1',
          mapLoc: [32.8346634,-79.8785019],
          mapZoom: 12,
          mapLocId: 1,
          severityNum: '1'
        }, {
          shipmentNum: '5503020091',
          from: 'Savannah',
          to: 'Huston',
          destination: 'McAllen',
          containerNum: '3',
          mapLoc: [28.980266666666665,-94.58271666666667],
          mapZoom: 8,
          mapLocId: 2,
          severityNum: '2',
        },
        {
          shipmentNum: '5503020092',
          from: 'Rotterdam',
          to: 'Huston',
          destination: 'McAllen',
          containerNum: '3',
          mapLoc: [40.51745,-73.30651],
          mapZoom: 9,
          mapLocId: 3,
          severityNum: '3'
        },
        {
          shipmentNum: '5503020093',
          from: 'Rotterdam',
          to: 'Houston',
          destination: 'Edinburg',
          containerNum: '4',
          mapLoc: [36.927355,-76.329735],
          mapZoom: 8,
          mapLocId: 4,
          severityNum: '3'
        },
        {
          shipmentNum: '5503020094',
          from: 'Rotterdam',
          to: 'Savannah',
          destination: 'Edinburg',
          containerNum: '5',
          mapLoc: [31.7961979,-81.4869995],
          mapZoom: 8,
          mapLocId: 5,
          severityNum: '3'
        },
        {
          shipmentNum: '5503020095',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '6',
          mapLoc: [50.050745,-2.6518],
          mapZoom: 8,
          mapLocId: 1,
          severityNum: '4'
        },{
          shipmentNum: '5403020096',
          from: 'Hong Kong',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '7',
          mapLoc: [33.840828333333334, -76.20225],
          mapZoom: 8,
          mapLocId: 2,
          severityNum: '5'
        },
        {
          shipmentNum: '5503020097',
          from: 'Rotterdam',
          to: 'Savannah',
          destination: 'Edinburg',
          containerNum: '8',
          mapLoc: [32.124066666666664, -81.1355],
          mapZoom: 8,
          mapLocId: 3,
          severityNum: '3'
        },
        {
          shipmentNum: '5503020098',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '9',
          mapLoc: [40.665915,-74.14422333333333],
          mapZoom: 8,
          mapLocId: 4,
          severityNum: '4'
        },{
          shipmentNum: '5403020099',
          from: 'Hong Kong',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '10',
          mapLoc: [33.32706666666667,-35.875033333333334],
          mapZoom: 8,
          mapLocId: 5,
          severityNum: '5'
        },{
          shipmentNum: '5403020100',
          from: 'Hong Kong',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '10',
          mapLoc: [31.98743,-80.68986666666666],
          mapZoom: 8,
          mapLocId: 5,
          severityNum: '5'
        }],


        allData: [{
          shipmentNum: '5503020090',
          from: 'Charleston',
          to: 'Rotterdam',
          destination: 'Rotterdam',
          containerNum: '1',
          mapLoc: [32.8346634,-79.8785019],
          mapZoom: 12,
          mapLocId: 1,
          severityNum: '1'
        }, {
          shipmentNum: '5503020091',
          from: 'Savannah',
          to: 'Huston',
          destination: 'McAllen',
          containerNum: '3',
          mapLoc: [28.980266666666665,-94.58271666666667],
          mapZoom: 8,
          mapLocId: 2,
          severityNum: '2',
        },
        {
          shipmentNum: '5503020092',
          from: 'Rotterdam',
          to: 'Huston',
          destination: 'McAllen',
          containerNum: '3',
          mapLoc: [-74.15291166666667,40.68550333333334],
          mapZoom: 8,
          mapLocId: 3,
          severityNum: '3'
        },
        {
          shipmentNum: '5503020093',
          from: 'Rotterdam',
          to: 'Houston',
          destination: 'Edinburg',
          containerNum: '4',
          mapLoc: [-76.329735,36.927355],
          mapZoom: 8,
          mapLocId: 4,
          severityNum: '3'
        },
        {
          shipmentNum: '5503020094',
          from: 'Rotterdam',
          to: 'Savannah',
          destination: 'Edinburg',
          containerNum: '5',
          mapLoc: [-94.99217,29.682103333333334],
          mapZoom: 8,
          mapLocId: 5,
          severityNum: '3'
        },
        {
          shipmentNum: '5503020095',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '6',
          mapLoc: [50.050745,-2.6518],
          mapZoom: 8,
          mapLocId: 1,
          severityNum: '4'
        },{
          shipmentNum: '5403020096',
          from: 'Hong Kong',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '7',
          mapLoc: [33.840828333333334, -76.20225],
          mapZoom: 8,
          mapLocId: 2,
          severityNum: '5'
        },
        {
          shipmentNum: '5503020097',
          from: 'Rotterdam',
          to: 'Savannah',
          destination: 'Edinburg',
          containerNum: '8',
          mapLoc: [32.124066666666664, -81.1355],
          mapZoom: 8,
          mapLocId: 3,
          severityNum: '3'
        },
        {
          shipmentNum: '5503020098',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '9',
          mapLoc: [40.665915,-74.14422333333333],
          mapZoom: 8,
          mapLocId: 4,
          severityNum: '4'
        },{
          shipmentNum: '5403020099',
          from: 'Hong Kong',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '10',
          mapLoc: [33.32706666666667,-35.875033333333334],
          mapZoom: 8,
          mapLocId: 5,
          severityNum: '5'
        },{
          shipmentNum: '5403020100',
          from: 'Hong Kong',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '10',
          mapLoc: [31.98743,-80.68986666666666],
          mapZoom: 8,
          mapLocId: 5,
          severityNum: '5'
        }],
        currentRow: null,
        searchNum: '',
      }
    },
    computed:{
      tables:function(){
        var searchNum = this.searchNum.toLowerCase();
        if(searchNum){
          return this.tableData.filter(function(shipmentNum){
            return Object.keys(shipmentNum).some(function(key){
              return String(shipmentNum[key]).toLowerCase().indexOf(searchNum) > -1
            })
          })
        }
        return this.tableData;
      }
    },
    methods:{
      serverityFilter: function(filterNum){
        var allData = this.allData;
        if(filterNum){
          var nowData = allData;
          if(filterNum === '0'){
            // console.log(filterNum, "hi here is 0")
          }else{
            nowData = allData.filter(item => item.severityNum === filterNum);
          }
        }
        this.tableData = nowData;
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      changeMap(row) {
        // console.log(row.shipmentNum);
        Bus.$emit('on',row.mapLoc,row.mapZoom,row.mapLocId);
      }
    }


}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .side{
    width: 100%;
    height: 90vh;
    background-color: #242243;

  }
  .side-content {
    margin:0 20px;
  }
  .side-title {
    color: #fff;
    font-size: 3rem;
    margin:0;
    line-height: 6rem;

  }
  .side-figure-wrapper {
    color: #fff;
    font-size: 2.8rem;
    margin-top: 20px;
  }




  .side-figure {
    text-align: center;
  }

  .side-figure div {
    margin:0 auto;
  }
  .figure-circle {
    width:80px;
    height:80px;
    border-width:4px;
    border-style: solid;
    border-color: orange;
    border-radius:45px;
  }

  .figure-circle span{
    height:80px;
    line-height:80px;
    display: block;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
    font-size:4.6rem;
  }

  .side-figure span.figure-description {
    font-size: 1.4rem;
  }

  .filter-buttons .el-button{
      width:98%;
      margin:0 auto;
      font-size:3.5rem;
      color: #fff;
      border: 0px;
  }

  .filter-button-1{
    background-color: #0cac81;
  }
  .filter-button-2{
    background-color: #cebf11;
  }
  .filter-button-3{
    background-color: #ecb127;
  }
  .filter-button-4{
    background-color: #e56a0e;
  }
  .filter-button-5{
    background-color: #e31616;
  }
  .filter-button-6{
    background-color: #7c1111;
  }
  .side-table-filter{
    margin-top: 30px;
  }
  .side-table {
    width:100%;
    margin-top:20px;
  }

  .side-section-title {
    color: #fff;
    font-size:2rem;
    margin: 30px 0 10px 0;
  }


</style>

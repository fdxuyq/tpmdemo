<template>
  <div class="side">
  <div class="side-content">
    <h2 class="side-title">Overview of all your shipments</h2>
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
           <span class="figure-description">Inland Figures</span>
        </el-col>

      </el-row>
    </div>
    <h3 class="side-section-title">Delay Shipment Severity</h3>
    <div class="filter-buttons">
      <el-button class="filter-button-1" v-on:click="serverityFilter('1')">3</el-button>
      <el-button class="filter-button-2" v-on:click="serverityFilter('2')">3</el-button>
      <el-button class="filter-button-3" v-on:click="serverityFilter('3')">4</el-button>
      <el-button class="filter-button-4" v-on:click="serverityFilter('4')">5</el-button>
      <el-button class="filter-button-5" v-on:click="serverityFilter('5')">6</el-button>
      <el-button class="filter-button-6" v-on:click="serverityFilter('6')">1</el-button>
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
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
          mapLoc: [33.7303,-118.1919],
          mapZoom: 8,
          severityNum: '1'
        }, {
          shipmentNum: '5503020091',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
          mapLoc: [32.8346634,-79.8785019],
          mapZoom: 14,
          severityNum: '2',
        },{
          shipmentNum: '5503020092',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
          severityNum: '3'
        }, {
          shipmentNum: '5503020093',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
          severityNum: '4'
        },{
          shipmentNum: '5403020094',
          from: 'Hong Kong',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
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
        var allData = [{
          shipmentNum: '5503020090',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
          severityNum: '1'
        }, {
          shipmentNum: '5503020091',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
          severityNum: '2'
        },{
          shipmentNum: '5503020092',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
          severityNum: '3'
        }, {
          shipmentNum: '5503020093',
          from: 'Yantian',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
          severityNum: '4'
        },{
          shipmentNum: '5403020094',
          from: 'Hong Kong',
          to: 'Long Beach',
          destination: 'Los Angeles',
          containerNum: '12',
          severityNum: '5'
        }];
        if(filterNum){
          var nowData = allData.filter(item => item.severityNum === filterNum)
        }
        this.tableData = nowData;
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      changeMap(row) {
        console.log(row.shipmentNum);
        Bus.$emit('on',row.mapLoc,row.mapZoom);
      }
    }


}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .side{
    width: 100%;
    height: 1000px;
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
      padding:25px 35px;
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

.stat-circle
{
  circle.bg
  {
    fill: none;
    stroke: #f1f1f1;
    stroke-width: 2;
  }
  circle.progress
  {
    fill: none;
    stroke: #2ecc71;
    stroke-width: 2;
    stroke-dasharray: 51 51;
    stroke-dashoffset: -51;
    stroke-linecap: round;
  }
  text
  {
    font-size: 3px;
    text-anchor: middle;
    fill: #555;
  }
}
</style>

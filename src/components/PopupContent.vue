<template>
  <div>
    <ul class="map-popup-content">
      <li v-for="(val) in data.type.slice(0,6)" >{{val[0]}} : {{val[1]}}</li>
      <li><a href="#" @click="centerDialogVisible = true">Find more details</a></li>
    </ul>


    <el-dialog
      class="map-popup"
      title="Vessel Details"
      :visible.sync="centerDialogVisible"
      width="30%"
      append-to-body>
      <img :src="data.type[6]">
    </el-dialog>
  </div>
</template>

<script>

export default {

  name: 'PopupContent',
  props: {
    data: {
      type: Object,
      default: () => ({ type: ''}),
    },
  },
  data(){
      return{
          centerDialogVisible : false
      }
  }

}
</script>

<style scoped>
  .map-popup-content ul{
    margin-left:0;
    padding-left:0!important;
    -webkit-padding-start:0;
  }
  .map-popup-content li{
    list-style: none;
    padding-left:0;
    margin-left:0;
  }

  .map-popup-content a{
    color: #0CFEF2 ;
  }
  .map-popup{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;;
  }
</style>

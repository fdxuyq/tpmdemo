<template>
  <div>
    Name: <a href="#" @click="centerDialogVisible = true">{{data.type[0]}}</a><br>
    IMO: {{data.type[1]}}<br>
    MMSI: {{data.type[2]}}<br>
    Destination: {{data.type[3]}}<br>
    ETA: {{data.type[4]}}<br>
    Speed: {{data.type[5]}}

    <el-dialog
      title="Vessel Details"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      append-to-body = true>
      <img src="test.png">
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

<style>
  @import '~/element-ui/lib/theme-chalk/index.css'
</style>

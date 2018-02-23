<template>

  <div class="header">
    <el-row>
      <el-col :span="6">
        <div class="logo"></div>
      </el-col>
      <el-col :span="14"><h1 class="page-title">Shipment Real Time Monitoring</h1></el-col>
      <el-col :span="4">
        <div class="user-img"></div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
  height: 100px;
  background-color: black;
}
.page-title {
  margin-top:20px;
  color: white;
  font-size:4.2rem;
  line-height: 5rem;
}
.logo {
  width:200px;
  background-image: url(../assets/cslogo.png);
  -webkit-background-size: cover;
  background-size: cover;
  height:76px;
  background-repeat: none;
  margin:10px;
}
.user-img {
  width:60px;
  height:60px;
  background-color: #fff;
  float: right;
  margin:10px;
}
</style>

<template>
  <div class="figure-wrapper">
    <el-row class="figure-content">
      <el-col :span="4" >
        <div class="figure-content-1">

        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content-2"></div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content-3"></div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content-4"></div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content-5"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .figure-wrapper{
/*    width: 100%;*/
    height: 120px;
    color:#fff;
    margin: 30px;
  }

  .figure-content-1{
    padding: 20px;
    background-color: #2f9595;
    height: 80px;
/*    margin: 20px;*/
  }
  .figure-content-2{
    padding: 20px;
    background-color: #2f9595;
    height: 80px;
/*    margin: 20px 20px 20px 0;*/
  }
  .figure-content-3{
    padding: 20px;
    background-color: #446ed2;
    height: 80px;
/*    margin: 20px 20px 20px 0;*/
  }
  .figure-content-4{
    padding: 20px;
    background-color: #446ed2;
    height: 80px;
/*    margin: 20px 20px 20px 0;*/
  }
  .figure-content-5{
    padding: 20px;
    background-color: #446ed2;
    height: 80px;
/*    margin: 20px 20px 20px 0;*/
  }
</style>

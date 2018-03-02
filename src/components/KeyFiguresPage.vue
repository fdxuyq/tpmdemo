<template>
  <div class="figure-wrapper">
    <el-row>
      <el-col :span="4" >
        <div class="figure-content figure-content-1">
            <img src="../assets/images/vessel.png" alt="Vessel">
           <!-- <i class="fg-icon"></i> -->
            7K+
            <span>Vessel Coverage</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content figure-content-2">
          <img src="../assets/images/port.png" alt="Port">
          800+
          <span>No. of Ports</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content figure-content-3">
          <img src="../assets/images/carriers.png" alt="Carriers">
          30+ <span>Carriers</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content figure-content-4">
          <img src="../assets/images/route_pin.png" alt="Port Pairs">
          216K+ <span>No. of City Port Pair</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content figure-content-5">
          <img src="../assets/images/train.png" alt="Rail Routes">
          10K+ <span>Rail routes in NA</span>
        </div>
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
    font-size:2.8rem;
  }

  .figure-content{
    padding: 20px;
    height: 80px;
  }

  .figure-content img {
    width:50px;
    height:50px;
    position: relative;
    float: left;
    padding:5px;
  }

  .figure-content span{
    display:block;
    font-size:1.4rem;
  }
  .figure-content-1{
    background-color: #2f9595;
/*  background: url(../assets/images/vessel.png) no-repeat center;
   -webkit-background-size: 40px 40px;
    background-size: 40px 40px;*/
  }


  .figure-content-2{
    background-color: #416D90;
  }
  .figure-content-3{
    background-color: #22A975;
  }
  .figure-content-4{
    background-color: #0E5D9C;
  }
  .figure-content-5{
    background-color: #446ed2;
  }
</style>

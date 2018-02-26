<template>
  <div class="figure-wrapper">
    <el-row class="figure-content">
      <el-col :span="4" >
        <div class="figure-content-1">
            <img src="../assets/images/vessel.png" alt="Vessel">
           <!-- <i class="fg-icon"></i> -->
            7K+
            <span>Vessel Coverage</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content-2">
          <img src="../assets/images/port.png" alt="Port">
          800+
          <span>No. of Ports</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content-3">
          <img src="../assets/images/carriers.png" alt="Carriers">
          30+ <span>Carriers</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content-4">
          <img src="../assets/images/route_pin.png" alt="Port Pairs">
          216K+ <span>No. of City Port Pair</span>
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <div class="figure-content-5">
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

  }
  .figure-content div{
    font-size:2.8rem;
  }
  .figure-content img {
    width:50px;
    height:50px;
    position: relative;
    float: left;
    padding:5px;
  }
/*  .fg-icon{
    display:inline-block;
    width:50px;
    height:50px;
    padding:5px;
    overflow: hidden;
    position: relative;
    background:url(../assets/images/vessel.png) no-repeat center;
  }
  .fg-icon:after {
    content:"";
    position: absolute;
    height: 50px;
    width: 150px;
    left:0;
    transform:translateX(-100px);
    -webkit-filter:drop-shadow(rgba(255,255,255,.5) 50px 0);
    filter:drop-shadow(rgba(255,255,255,.5) 50px 0);
  }*/
  .figure-content span{
    display:block;
    font-size:1.4rem;
  }
  .figure-content-1{
    padding: 20px;
    background-color: #2f9595;
    height: 80px;
/*  background: url(../assets/images/vessel.png) no-repeat center;
   -webkit-background-size: 40px 40px;
    background-size: 40px 40px;*/
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

<template>
  <v-container fluid>
    <!-- ---Title--- -->
    <v-row class="Title text-center ">
      <v-col class="">
        <h1 class="Title-text font-weight-bold">
          使用說明
        </h1>
      </v-col>
    </v-row>
    <!-- ---Main-input--- -->
    <v-row id="main-input" class="main"  width="100vw" >
      <!-- Main Left -->
      <v-col class="main-left" >
        <h1 class="main-text-title">上傳你要偵測的胸腔X光影像</h1>
        <div class="box">
          <img src="../assets/images/XRay1.png" alt="">
        </div>
        <v-file-input  disabled prepend-icon="mdi-upload"></v-file-input>
        <div class="fakeBtns">
          <div class="fakeBtn">
            <p>開始偵測</p>
          </div>
        </div>
      </v-col>
      <!-- Main Right -->
      <v-col class="main-right">
        <img class="NumberIMG" src="../assets/images/b1.png" alt="">
        <p class="quote">上傳你要偵測的胸腔X光影像，若輸入的圖片非胸腔X光，系統會無法判斷。</p>
        <img class="NumberIMG" src="../assets/images/b2.png" alt="">
        <p class="quote">按下"開始偵測"按鈕，系統便會開始預測X光影像。</p>
      </v-col>
    </v-row>

    <div class="splitLine"></div>

    <!-- ---Main-learn--- -->
    <v-row id="main-learn" class="main">
      <v-col class="outerBox">
        <h1>按下開始偵測後，我們的系統究竟做了哪些事情呢?</h1>
        <v-col class="innerBox">
          <img class="NumberIMG" src="../assets/images/b1.png" alt="">
          <p class="quote">系統會先對影像做前置處理，讓氣管內管可以更明顯。會先做對比度的處理，再做感興趣區域分析，將影像中非必要的部分裁切掉，保留我們需要的部分給模型預測。</p>
          <img class="NumberIMG" src="../assets/images/b2.png" alt="">
          <p class="quote">接下來會使用4個不同的Model對影像進行預測，系統會將四個model的結果圖系集，讓預測精準度更高。</p>
          <img class="NumberIMG" src="../assets/images/b3.png" alt="">
          <p class="quote">然後再經過一系列的處理最終會得到兩個座標(氣管內管端點與氣管分岔點)，計算兩點的距離，並藉由距離判斷插管位置是否正確。</p>
          <img class="NumberIMG" src="../assets/images/b4.png" alt="">
          <p class="quote">距離在3~10公分內為「位置正常」，在範圍之外都會輸出「位置不正常」。</p>
        </v-col>
      </v-col>
    </v-row>

    <div class="splitLine"></div>

    <!-- ---Main-output--- -->
    <v-row id="main-output" class="main"  width="100vw">
      <!-- Main Left -->
      <v-col class="main-left text-center align-center" >
        <h1 class="main-text-title">輸出結果</h1>
        <div class="box">
          <img src="../assets/images/XRay2.png" alt="">
        </div>
        <v-row class="fakeBtns mt-10">
          <div class="fakeBtn">
            <p>切換</p>
          </div>
          <div class="fakeBtn">
            <p>儲存影像</p>
          </div>
        </v-row>
      </v-col>
      <!-- Main Right -->
      <v-col class="main-right">
        <p>File Name：001.png</p>
        <p>Distence：6cm</p>
        <p>Result：位置正常</p>
      </v-col>
    </v-row>
    <div id="main-bottom">
      <img class="NumberIMG" src="../assets/images/b1.png" alt="">
      <p class="quote">輸出結果會標記氣管內插管的端點以及隆突端點(氣管分岔點)，同時也會計算兩點間的距離，並告知使用者插管位置是否合理。</p>
      <img class="NumberIMG" src="../assets/images/b2.png" alt="">
      <p class="quote">"切換"按鈕可以讓使用者對照比對，確認系統預測的標點是否正確。</p>
      <img class="NumberIMG" src="../assets/images/b3.png" alt="">
      <p class="quote">最後使用者如果滿意標點的結果，可以將影像儲存。</p>
    </div>

    <div class="btn-wrap">
      <v-btn large color="blue lighten-2" @click="PushToStartPage()"> 
      開始使用
      </v-btn>
    </div>
    


  </v-container>
</template>

<script>
  export default {
    name: 'LearnPage',

    data: () => ({
    }),
    methods:{
      PushToStartPage(){
        let currentPageName = this.$router.currentRoute.name
        if(currentPageName != 'start'){
          this.$router.push({name:'start'})
        }
      },
    }
  }
</script>

<style scoped>
.container{
  width: 70vw;
}

/* Title */
.Title-text{
  font-size: 60px;
}
.main-text-title{
  white-space: nowrap;
}

/* main input */
#main-input .main-right{
  margin-top: 50px;
}


/* main learn */
#main-learn .outerBox .innerBox{
  margin-top: 10px;
}

/* #main-learn .outerBox .innerBox p {
  font-size: 20px;
} */

/* main output */
#main-output {
  margin-bottom: 5px;
}

#main-output .main-right{
  margin:auto 0;
}

#main-output .main-right p{
  font-size: 35px;
}

/* main class共同 */
p{
  font-weight: 600;
}

.quote{
  font-size: 20px;
}

.main .main-left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main .main-left .box{
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px black solid;
  width: 350px;
  height: 350px;
}

.v-file-input{
  width: 200px;
}

.main .main-left .fakeBtns .fakeBtn{
  width: 120px;
  height: 40px;
  background-color: black;
  color: white;
  margin-right: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main .main-left .fakeBtns .fakeBtn p{
  margin: 0 auto;
  font-size: 20px;
}

.btn-wrap{
  display: flex;
  justify-content: center;
}

/* other */
.NumberIMG{
  width: 25px;
  height: 25px;
}


/* ipad Screen */
@media screen and (max-width:850px){
  .Title-text{
    font-size: 50px;
  }
  .main-text-title{
    white-space: nowrap;
    font-size: 32px;
  }

  /* main input */
  #main-input .main-right{
    margin-top: 40px;
  }

  #main-input .main-right p{
    font-size: 20px;
  }
  /* main learn */

  #main-learn .outerBox .innerBox p {
    font-size: 20px;
  }

  /* main output */
  #main-output {
    margin-bottom: 5px;
  }

  #main-output .main-right{
    margin:auto 0;
  }

  #main-output .main-right p{
    font-size: 35px;
  }

  #main-bottom{
    font-size: 20px;
  }
}
/* phone Screen */
@media screen and (max-width:500px) {
  .container{
    width: 80%;
  }

  .main-text-title{
    white-space: nowrap;
    font-size: 28px;
  }


  #main-output .main-right p{
    font-size: 35px;
  }

  #main-input .main-right{
    margin-top: 50px;

  }

  .main .main-left .box{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px black solid;
    width: 250px;
    height: 250px;
  }

  .main .main-left .box img{
    width: 100%;
  }

   #main-output .main-right p{
    font-size: 30px;
  }

}

</style>
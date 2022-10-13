<template>
  <v-container class="container" fluid>
    <!-- Introduce -->
    <v-row class="Introduce" align="center">
      <v-col class="Introduce-vcol" align="center">
        <h1 class="display-3">
        透過深度學習模型
        </h1>
        <h1 class="display-3">分析您的胸腔X光照片判斷插管位置是否正確</h1>
        <h1  class="font-weight-bold">及時分析 · 精準預測 · 免下載直接使用</h1>
        <v-row justify="center" class="mt-10">
          <v-btn
          x-large
          color="primary"
          @click="PushToLearnPage()"
          class="mr-4"
          > 
            How To Use?
          </v-btn>
          <v-btn
          x-large
          color="primary"
          @click="PushToStartPage()"
          > 
            Get Started
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <div class="splitLine"></div>
    <!-- SystemStyle -->
    <v-col class="SystemStyle">
      <h1 class="display-3 font-weight-bold text-center mb-10">
        系統特色
      </h1>
      <v-row justify="center"> 
        <v-card 
        class="mr-6 mb-10"
        width="300"
        height="300"
        align="center"
        >
          <img src="../assets/images/msg.png" alt="">
          <v-col>
              <h1>輔助判斷</h1>
              <p>藉由深度學習模型判斷胸腔X光影像, 並顯示插管位置是否正確。</p>
          </v-col>
        </v-card>

        <v-card 
        class="mr-6 mb-10"
        width="300"
        height="300"
        align="center">
          <img src="../assets/images/time.png" alt="">
          <v-col>
              <h1>增加效率</h1>
              <p>不同於以往人工辨識, 使用此系統可以提高氣管內插管的判斷效率。</p>
          </v-col>
        </v-card>

        <v-card 
        class="mb-10"
        width="300"
        height="300"
        align="center">
          <img src="../assets/images/instant.png" alt="">
          <v-col>
              <h1>無須下載</h1>
              <p>不用下載, 使用者可以更快得到結果。</p>
          </v-col>
        </v-card>
      </v-row>
    </v-col>

    <div class="splitLine"></div>

    <!-- TeamMember -->
    <v-col class="TeamMember">
      <h1 class="display-3 font-weight-bold text-center mb-10">
        團隊成員
      </h1>

      <v-row justify="center" width="100%">
        <v-card 
          class="member mb-10 mr-10"
          elevation="5"
          shaped
          >
          <v-row >
            <img id="personPhoto" src="../assets/images/changjam.jpg" alt="">
            <v-col class="mt-15 ml-5 mr-5">
              <v-card-title class="display-2">組長/張家誠</v-card-title>
              
               <ol class="mt-5">
                <li><v-card-text><p>統籌所有進度。</p></v-card-text></li>
                <li><v-card-text><p>前端：網頁製作、API串接。</p></v-card-text></li>
                <li><v-card-text><p>後端：模型訓練、模型系集。</p></v-card-text></li>
              </ol>
            </v-col>
          </v-row>
        </v-card>

        <v-card 
          class="member mb-10  mr-10"
          elevation="5"
          shaped
          >
          <v-row >
            <img id="personPhoto" src="../assets/images/allen.jpg" alt="">
            <v-col class="mt-15 ml-5 mr-5">

              <v-card-title class="display-2">美宣/黃振家</v-card-title>
              
               <ol class="mt-5">
                <li><v-card-text><p>前端：網頁設計，團隊中的美術擔當，立志成為建築師。</p></v-card-text></li>
                <li><v-card-text><p>後端：模型訓練。</p></v-card-text></li>
          
              </ol>
            </v-col>
          </v-row>
        </v-card>

        <v-card 
          class="member mb-10  mr-10"
          elevation="5"
          shaped
          >
          <v-row >
            <img id="personPhoto" src="../assets/images/Sam.jpg" alt="">
            <v-col class="mt-15 ml-5 mr-5">
              <v-card-title class="display-2">後端/吳冠毅</v-card-title>
               <ol class="mt-5">
                <li><v-card-text><p>後端：資料前處理、模型訓練及績效評估。</p></v-card-text></li>
                <li><v-card-text><p>網站：網站架設、API串接，最討厭龍潭路的腳踏車。</p></v-card-text></li>
              </ol>
            </v-col>
          </v-row>
        </v-card>

        <v-card 
          class="member mb-10  mr-10"
          elevation="5"
          shaped
          >
          <v-row align="center">
            <img id="personPhoto" src="../assets/images/Leo.png" alt="">
            <v-col class="mt-15 ml-5 mr-5">
              <v-card-title class="display-2">後端/江昱賢</v-card-title>
               <ol class="mt-5">
                <li><v-card-text><p>後端：包括模型訓練、端點計算。</p></v-card-text></li>
                <li><v-card-text><p>網站：網站架設、模型的參數調適，總有一天會上台大。</p></v-card-text></li>
              </ol>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: 'HomePage',

    data: () => ({
      StyleList:[{
        id:"01",
        Title:"輔助判斷",
        Txet:"藉由深度學習模型判斷胸腔X光影像, 並顯示插管位置是否正確。" ,
      },
      {
        id:"02",
        Title:"增加效率",
        Txet:"不同於以往人工辨識, 使用此系統可以提高氣管內插管的判斷效率。" ,
      },
      {
        id:"03",
        Title:"無須下載",
        Txet:"不用下載, 使用者可以更快得到結果。" ,
      }],

    }),
    methods:{
      PushToLearnPage(){
        let currentPageName = this.$router.currentRoute.name
        if(currentPageName != 'learn'){
          this.$router.push({name:'learn'})
        }
      },
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
  width: 90vw;
}


p{
  font-weight: 600;
  font-size: 20px;
}

.v-card{
  cursor: pointer;
}

.member{
  width: 700px;
  height:auto;
}

.Introduce{
  height: 80vh;
  width: 90vw;
}

.Introduce h1{
  margin-bottom: 15px;
}
#personPhoto{
  width: 250px;
  height: 300px;
  margin-top: 30px;
  margin-left: 30px;
  border-radius: 20%;
}

</style>
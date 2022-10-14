<template>
  <v-container class="container" fluid>
    <!-- Introduce -->
    <v-row class="Introduce" align="center">
      <v-col class="Introduce-vcol" align="center">
        <h1 class="Introduce-text">
        透過深度學習模型
        </h1>
        <h1 class="Introduce-text">分析胸腔X光照片判斷插管位置是否正確</h1>
        <h1  class="Introduce-subtext font-weight-bold">及時分析 · 精準預測 · 免下載直接使用</h1>
        <v-row justify="center" class="mt-10">
          <v-btn
          x-large
          color="green lighten-2"
          @click="PushToLearnPage()"
          class="mr-2 mt-2"
          > 
            How To Use?
          </v-btn>
          <v-btn
          x-large
          color="blue lighten-2"
          class="mr-2 mt-2"
          @click="PushToStartPage()"
          > 
            Get Started
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-icon large class="arrow">mdi-arrow-down</v-icon>
    <div class="splitLine"></div>

    <!-- SystemStyle -->
    <v-col class="SystemStyle">
      <h1 class="HomePage-Title font-weight-bold text-center mb-10">
        系統特色
      </h1>
      <v-row justify="center"> 
            <v-card class="CardStyle mr-6 mb-10" align="center"
            v-for="style in StyleList" :key="style.id">
            <img :src="style.Imgurl" alt="">
            <v-col>
                <h1>{{style.Title}}</h1>
                <p>{{style.Text}}</p>
            </v-col>
          </v-card>
      </v-row>
    </v-col>

    <div class="splitLine"></div>

    <!-- TeamMember -->
    <v-col class="TeamMember">
      <h1 class="TeamMember-Title font-weight-bold text-center mb-10">
        團隊成員
      </h1>

      <v-row justify="center" width="100%">
        <v-card class="member" elevation="5" shaped :color="Member.Color"
          v-for="Member in MemberList" :key="Member.id">
          <v-row align="center" justify="center">
            <img id="personPhoto" :src="Member.Imgurl" alt="">
            <v-col>
              <v-card-title class="name">{{Member.Title}}</v-card-title>
              <ol>
                <li><p>{{Member.Text1}}</p></li>
                <li><p>{{Member.Text2}}</p></li>
                <li><p>{{Member.Text3}}</p></li>
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
        Text:"藉由深度學習模型判斷胸腔X光影像, 並顯示插管位置是否正確。",
        Imgurl:require('../assets/images/msg.png'),
      },
      {
        id:"02",
        Title:"增加效率",
        Text:"不同於以往人工辨識, 使用此系統可以提高氣管內插管的判斷效率。" ,
        Imgurl:require('../assets/images/time.png'),
      },
      {
        id:"03",
        Title:"無須下載",
        Text:"不用下載, 使用者可以更快得到結果。" ,
        Imgurl:require('../assets/images/instant.png'),
      }],
      MemberList:[{
        id:"01",
        Color:"red lighten-4",
        Title:"組長/張家誠",
        Text1:"統籌所有進度。",
        Text2:"前端：網頁製作、API串接。",
        Text3:"後端：模型訓練、模型系集。",
        Imgurl:require('../assets/images/changjam.jpg'),
      },
      {
        id:"02",
        Color:"blue lighten-4",
        Title:"美宣/黃振家",
        Text1:"前端：網頁設計，團隊中的美術擔當。",
        Text2:"後端：模型訓練。",
        Text3:"立志成為建築師。",
        Imgurl:require('../assets/images/allen.jpg'),
      },
      {
        id:"03",
        Color:"purple lighten-4",
        Title:"後端/吳冠毅",
        Text1:"後端：資料前處理、模型訓練及績效評估。",
        Text2:"網站：網站架設、API串接。",
        Text3:"最討厭龍潭路的腳踏車。",
        Imgurl:require('../assets/images/Sam.jpg'),
      },
      {
        id:"04",
        Color:"orange lighten-4",
        Title:"後端/江昱賢",
        Text1:"後端：包括模型訓練、端點計算。",
        Text2:"網站：網站架設、模型的參數調適。",
        Text3:"夢想是進入台大。",
        Imgurl:require('../assets/images/Leo.png'),
      }]

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
.arrow{
  width: 100%;
}

.container{
  width: 90%;
}


p{
  font-weight: 600;
  font-size: 20px;
}

.CardStyle{
  cursor: pointer;
  width: 30%;
  background-color: rgba(243, 240, 240, 0.731);
  color: black;
}

.member{
  margin:10px;
  width: 600px;
}

.member .name{
  font-weight: 700;
  font-size: 40px;
}

.member ol li p{
  font-weight: 600;
  line-height:40px;
  font-size: 26px;
}

.Introduce{
  height: 80vh;
}

.Introduce .Introduce-text{
  font-size: 50px;
  font-weight: 300;
}

#personPhoto{
  width: 250px;
  height: 300px;
  padding: 10px;
  margin-left: 15px;
  border-radius: 20%;
}
.HomePage-Title,.TeamMember-Title{
  font-size: 60px;
}



/* ipad */
@media screen and (max-width:700px) {
  .Introduce .Introduce-text{
    font-size: 30px;
    font-weight: 300;
  }
  .Introduce .Introduce-subtext{
    font-size: 20px;
  }
  .Introduce{
    height:50vh;
  }

  .HomePage-Title,.TeamMember-Title{
    font-size: 40px;
  }

  .CardStyle{
    cursor: pointer;
    width: 70%;
  }

  .member{
    margin:8px;
  }

  .member .name{
    font-size: 30px;
  }
  .member ol li p{
    font-size: 20px;
  }
  

}
/* phone */
@media screen and (max-width:500px) {
  
  .CardStyle p{
    display: none;
  }

  #personPhoto{
    position: absolute;
    padding: 10px;
    margin: 0px;
  }
  .member .name{
    font-size: 35px;
  }

  .member ol li p{
    font-size: 30px;
  }

  .member div.col{
    opacity: 0;
  }

  .member:hover div.col{
    opacity: 1;
  }
  .member:hover #personPhoto{
    opacity: 0;
  }
}

</style>
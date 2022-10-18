<template>
  <v-app>
    <v-app-bar
      app
      dark
      height="80"
    >
    <!-- logo -->
      <v-btn class="logo d-flex align-center" @click="PushToHomePage()">
        <h3>Detect ETT Tube</h3>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        x-large
        @click="PushToLearnPage()"
        id="LearnBtn"
      >
        <v-icon class="mr-2"  large>mdi-book</v-icon>
        <span>Learn</span>
      </v-btn>

      <v-btn
        target="_blank"
        text
        x-large
        @click="PushToStartPage()"
        id="StartBtn"
      >
        
        <v-icon class="mr-2"  large>mdi-television</v-icon>
        <span>Start</span>
      </v-btn>

      <v-btn
        href="https://github.com/changjam/ETT_Website"
        target="_blank"
        text
        x-large
        id="GithubBtn"
      >
        <v-icon class="mr-2" large>mdi-github</v-icon>
        <span id="GithubText">GitHub</span>
      </v-btn>
      
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer dark><v-icon class="mr-2" >mdi-copyright</v-icon>Made by changjam</v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  

  components: {
  },

  data: () => ({

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
    PushToHomePage(){
      let currentPageName = this.$router.currentRoute.name
      if(currentPageName != 'home'){
        this.$router.push({name:'home'})
      }
    },
  },
};
</script>

<style>

.v-main__wrap{
  background-color: rgba(212, 208, 208, 0.857);
}

.container {
  background-color:white;
}

.v-btn__content{
  font-size: 20px;
  font-weight:700;
}

.v-btn{
  text-transform:none;
}


.splitLine{
  background-color: black;
  height: 2px;
  margin:5vw 0px;
}

@media screen and (max-width:700px) {
  #LearnBtn,#StartBtn,#GithubText{
    display: none;
  }
}

@media screen and (max-width:500px) {
  .logo{
    font-size: 14px;
  }
  #LearnBtn,#StartBtn,#GithubText{
    display: none;
  }
}

</style>
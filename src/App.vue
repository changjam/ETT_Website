<template>
  <v-app>
    <v-app-bar
      app
      dark
      height="80"
    >
    <!-- logo -->
      <div class="logo d-flex align-center" @click="PushToHomePage()">
        <h2>Detect ETT Tube</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        x-large
        @click="PushToLearnPage()"
      >
        <v-icon class="mr-2"  large>mdi-book</v-icon>
        <span>Learn</span>
      </v-btn>

      <v-btn
        target="_blank"
        text
        x-large
        @click="PushToStartPage()"
      >
        
        <v-icon class="mr-2"  large>mdi-television</v-icon>
        <span>Start</span>
      </v-btn>

      <v-btn
        href="https://reurl.cc/1m5l5G"
        target="_blank"
        text
        x-large
      >
        <v-icon class="mr-2" large>mdi-github</v-icon>
        <span>GitHub</span>
      </v-btn>
      
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer dark ><v-icon class="mr-2" >mdi-copyright</v-icon>Made by changjam</v-footer>
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
.v-btn{
  text-transform:none;
}
.logo{
  cursor: pointer;
}

.splitLine{
  background-color: black;
  height: 2px;
  margin:5vw 0px;
}

</style>
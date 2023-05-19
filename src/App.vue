<template>
  <HeaderComponent/>
  <router-view/>
  <FooterComponent/>
</template>
  
  <script >

  import LoginView from "./views/LoginView.vue"

  import HeaderComponent from './components/HeaderComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  import {mapState} from 'vuex' 

  export default {
    name: 'App',
    computed : {
      ...mapState(['user'])
    },
    components: {
      LoginView,
      HeaderComponent,
      FooterComponent,
    }
  }

  </script>

<template>
  <HeaderComponent/>
  <router-view/>
  <FooterComponent/>
  <!-- <h1 class="ms-5 mt-5">Bienvenidos a INDOMITA </h1>
    <div>
      <p v-if="user">Logged in as {{ user.email }}</p>
      <p v-else>Not logged in</p>
    </div> -->
    

  <!-- ESTE SI VA  -->
   <!-- <div>
    <div v-if="user" >
      
    </div>
    <div v-else>
      <LoginView></LoginView>
    </div>
    
  </div> -->

</template>
  
  <script >

  import LoginView from "./views/LoginView.vue"

  import HeaderComponent from './components/HeaderComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  // import Continentes from "./components/Continentes";
  // import Buscador from "./components/Buscador";


// import { ref } from 'vue'
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
  
<style lang="scss">


  // body{
  //   height: 100vh;
  //   /* background-image: url(./assets/tiro-angulo-alto-vertical-edificios-blancos-santorini-grecia.jpg); */
  //   /* background-size: cover; */
  //   /* background-position: center; */
  //   background-color: #000000;
  // }
</style>

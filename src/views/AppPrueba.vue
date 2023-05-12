<template>
    <!-- <HeaderComponent/> -->
    <h1 class="ms-5 mt-5"> APP PRUEBA </h1>
    <p>Acá veremos si es rol user o admin</p>
    <div class="hola"> QUI DEBERIA ESTAR EL BOTON 
        <button class="btn btn-primary" v-on:click="logout" >Logout</button>
    </div>
    <div v-if="(user.rol === 'admin')">
      <AdminComponent></AdminComponent>
    </div>
    <div v-else-if="(user.rol === 'usuario')">
      <UserComponent></UserComponent>
    </div>
    <div>
      {{ user.rol }}
    </div> 
    
        <!-- <h1 class="text-center my-3 text-uppercase">top country population</h1>
        <Continentes />
        <Buscador />
        <CardList /> -->
    </template>
    
    <script>
    // import LoginView from "./views/LoginView.vue"
    // import HomeView from "./views/LoginView.vue"
    // import HeaderComponent from './components/HeaderComponent.vue';
    // import Continentes from "./components/Continentes";
    // import Buscador from "./components/Buscador";


    import UserComponent from "../components/UserComponent.vue";
    import AdminComponent from "../components/AdminComponent.vue";
  
  
  // import { ref } from 'vue'
  import {mapState} from 'vuex'
  import { useStore } from 'vuex' 
  import { db, auth } from "@/auth/auth.service"

  
  export default {
    name: 'App',
    setup() {
      const store = useStore();        
        const logout = () => {
			store.dispatch('logout');
		}
      return {
        logout
      }
    },
    computed : {
      ...mapState(['user'])
    },
    mounted() {
      const store = useStore();  
      store.dispatch('UsuarioActivo');  
  },
    components: {
      UserComponent,
      AdminComponent
    }
  } 
  
  
    </script>
    
  <style>
    body{
      height: 100vh;
      background-color: rgb(174, 224, 255);
      /* background-image: url(./assets/tiro-angulo-alto-vertical-edificios-blancos-santorini-grecia.jpg); */
      /* background-size: cover; */
      /* background-position: center; */
    }
  </style>
  
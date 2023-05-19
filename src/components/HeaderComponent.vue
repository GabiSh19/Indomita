<template>
  <header >
    <nav class="navbar fixed-top" id="navbar">
      <router-link class="listNav" to="/"><img class="logo" src="../assets/logo.png"></router-link>
      <div v-if="(loginIsTrue)" class="msgUsuario ">
          <p v-if="isRolUser" class="mb-3"> ¡Bienvenido! {{$store.state.user.email}}</p>           
          <p v-else-if="isRolAdmin" class="ms-2 mt-0">Bienvenido ADMINISTRADOR</p>
      </div>
        <ul class="links">
          <li><router-link class="listNav DatosInt" to="/"> Inicio </router-link></li>
          <li><router-link class="listNav DatosInt" to="/TravelsView">Destinos</router-link></li>
          <li><router-link class="listNav DatosInt" to="/AdminTravel" v-if="(loginIsTrue && isRolAdmin )">Mantenedor</router-link></li>
          <li><router-link class="listNav DatosInt" to="/countries"> Datos internacionales</router-link></li>
          <li><router-link class="listNav DatosInt" to="/ContactView" >Contacto</router-link></li>
          <li class="chartDesktop" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><IconShoppingCart color="#fff" :size="22" stroke-width="2"  /></li>
        </ul>
        <router-link class="action_btn" to="/login"  v-if="(!loginIsTrue)">Iniciar sesión</router-link>
        <router-link class="action_btn" to="/login"  v-if="(loginIsTrue)"  v-on:click="logout" >Cerrar sesión</router-link>
        <div class="toggle_btn " @click="showMenu()" >  <IconMenu2 color="#fff" :size="30" stroke-width="2" /></div>

    </nav>
    <div class="dropdown_menu" :class="this.showMobileMenu ? 'open' : ''">
      <ul class="linksDrop">
        <li><router-link class="listNav " to="/HomeView"> Inicio </router-link></li>
        <li><router-link class="listNav " to="/TravelsView">Destinos</router-link></li>
        <li><router-link class="listNav " to="/ContactView" >Contacto</router-link></li>
        <li><router-link class="listNav " to="/countries"> Datos internacionales</router-link></li>
        <li><router-link class="listNav " to="/AdminTravel" v-if="(loginIsTrue && isRolAdmin )">Mantenedor</router-link></li>
        <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><IconShoppingCart color="#fff" :size="25" stroke-width="2"  /></li>
        <li><router-link class="action_btn_mobile listNav " to="/login"  v-if="(!loginIsTrue)">Iniciar sesión</router-link></li>
        <li><router-link class="action_btn_mobile listNav  mt-0" to="/login"  v-if="(loginIsTrue)"  v-on:click="logout" >Cerrar sesión</router-link></li>
      </ul>
    </div>
  </header>

  <ShoppingCart></ShoppingCart>
</template>


<script>
import { IconMenu2 } from '@tabler/icons-vue';
import { IconShoppingCart } from '@tabler/icons-vue';  
import ShoppingCart from './ShoppingCart.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
    showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
    logout(){
			this.$store.dispatch('logout');
    },
  },
  computed:{
    ...mapState(['user']),
    
  },
  components: {
    ShoppingCart, 
    IconMenu2,
    IconShoppingCart
  }, computed: {
    ...mapGetters(['loginIsTrue', 'isRolAdmin', 'isRolUser'])
  }
};
</script>



<style>

nav.navbar{
  padding: 1em 1em;

}
.visible {
  display: block;
}
#navbar{
  background-color: rgba(0,0,0,1);
  height: 4.7em;
  align-content: center;
}
  header{
    position: relative;
    padding: 0 1rem;
    /* height: 1em; */
  }
  .logo{
    height: 1.7em;
    } 
  
  .toggle_btn{
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
  }

  .msgUsuario{
    color: #ffff;
    font-size: .7em
  }

  .dropdown_menu{
    display: block;
    position: fixed;
    right: 10px;
    top: 65px;
    width: 90%;
    height: 500px;
    background: rgba(6, 14, 39, .7);
    backdrop-filter: blur(15px);
    border-radius: 10px;
    overflow: hidden;
    height: 0;
    z-index: 200;
    transition: height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .dropdown_menu li{
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dropdown_menu.open{
    height: auto;
  }

  .action_btn_mobile{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .listNav {
      text-decoration: none;
      color: #ffffff;
      font-size: 1rem;
      list-style: none;
    }
  
  .listNav:hover{
    color: orange;
  }
  .linksDrop{
    list-style: none;
    padding: 0;
    margin: 0;

  } 

  .action_btn, .action_btn_mobile{
    background-color: rgba(3, 221, 182, .9);
    color: #ffffff;
    padding: .5rem 1rem;
    border: none;
    outline: none;
    border-radius: 20px;
    font-size: .8rem;
    font-weight: bold;
    cursor: pointer;
    transition: scale 0.2 ease;
    text-decoration: none;
    list-style: none;
  }
  
  .action_btn:hover, .action_btn_mobile:hover{
    scale: 1.05;
    color: #fff;
  }
  
  .links, .action_btn {
    display: none;
  }

  .toggle_btn{
    display: block;
  }



/* RESPONSIVE DESIGN -> Media Queries*/


  @media screen and (min-width: 650px){
    .logo{
    height: 1.8em;
    } 

    .msgUsuario{
      margin-top: 1em
    }

    nav.navbar{   
      display: flex;
      align-items: center;
      justify-content: space-around ;
      padding: .2em 0em;      

    }

    .DatosInt{
      margin-right: 1em;
      font-size: 1em;
    }
    ul.links{
      display: flex;
      align-items: center;
      align-content: center;
      list-style: none;
      /* gap: 2rem; */
      font-size: .8em;
      margin: 0;
      padding: 0;
            
    } 

    .chartDesktop{
      margin-left: 0em;
    }

    .toggle_btn{
      display: none;
    }

    .action_btn{
      display: block;
    }

    .dropdown_menu{
      display: none;
    }

  }


/* RESPONSIVE DESIGN -> Media Queries*/


@media screen and (min-width: 1000px){
  
  nav.navbar{
    padding: 1em 1em;
  } 

  #navbar{
    height: 7em;
  }

  .logo{
    height: 3em;
    } 
  
  .DatosInt{
    margin-right: 1em;
    font-size: 1.3em;
  }  

  .msgUsuario{
    color: rgba(3, 221, 182, .9);
    font-size: 1em
  }

}
@media screen and (min-width: 1300px){
  
  .DatosInt{
    margin-right: 2.4em;
    font-size: 1.4em;
  }  

  .msgUsuario{
    color: rgba(3, 221, 182, .9);
    font-size: 1em
  }

  .action_btn{
    font-size: 1em;
  }

}


</style>

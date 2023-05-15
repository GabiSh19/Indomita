<template>
  <header>
    <nav class="navbar">

      <router-link class="listNav" to="/"><img class="logo" src="../assets/logo.png"></router-link>
        <ul class="links">
          <li><router-link class="listNav DatosInt" to="/"> Inicio </router-link></li>
          <li><router-link class="listNav DatosInt" to="/travels"> Viajes Disponibles </router-link></li>
          <li><router-link class="listNav DatosInt" to="/countries"> Datos internacionales</router-link></li>
          <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><IconShoppingCart color="#fff" :size="25" stroke-width="2"  /></li>
          <!-- <li> <a href="#" class="listNav" >Inicio</a> </li>
          <li> <a href="#" class="listNav" >Servicios </a> </li>
          <li> <a href="#" class="listNav" >Contacto</a> </li> -->
        </ul>
        <!-- <a href="#" class="action_btn">Planificar Viaje</a> -->
        <!-- <router-link class="action_btn" to="/login">Login</router-link> -->
        <div class="toggle_btn" @click="showMenu()" >  <IconMenu2 color="#fff" :size="30" stroke-width="2" /></div>

    </nav>
    <div class="dropdown_menu" :class="this.showMobileMenu ? 'open' : ''">
      <ul class="linksDrop">
        <li><router-link class="listNav DatosInt" to="/"> Inicio </router-link></li>
        <li><router-link class="listNav DatosInt" to="/travels"> Viajes Disponibles </router-link></li>
        <li><router-link class="listNav DatosInt" to="/countries"> Datos internacionales</router-link></li>
        <!-- <li> <a href="#" class="listNav" >Inicio</a> </li>
        <li> <a href="#" class="listNav">Servicios </a> </li>
        <li> <a href="#" class="listNav">Contacto</a> </li>
        <li> <a href="#" class="action_btn_mobile">Planificar Viaje</a> </li> -->
        <!-- <router-link class="action_btn_to" to="/login">Login</router-link> -->
      </ul>
    </div>
  </header>

  <ShoppingCart></ShoppingCart>
</template>



<style>


.visible {
  display: block;
}

  header{
    background-color: rgba(0,0,0,.85);
    position: relative;
    padding: 1rem 2rem;
  }
  .logo{
    height: 2.5em;
    } 
  
  .toggle_btn{
    color: #ec5d5d;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
  }

  .dropdown_menu{
    display: block;
    position: absolute;
    right: 2rem;
    top: 60px;
    width: 300px;
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
    height: 240px;
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
    background-color: orange;
    color: #fff;
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

@media screen and (min-width: 577px){

  .dropdown_menu{
    background: rgba(255, 255, 255, .7);
    backdrop-filter: blur(15px);
  }
}

/* RESPONSIVE DESIGN -> Media Queries*/

  @media screen and (min-width: 768px){

    nav.navbar{
      display: flex;
      align-items: center;
      justify-content: space-around ;
      padding: 0;
    }

    .DatosInt{
      margin-right: 10em;
      font-size: 1.2em;
    }

    ul.links{
      list-style: none;
      display: flex;
      gap: 2rem;
      color: red;
      margin: 0;
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


</style>

<script>
import { IconMenu2 } from '@tabler/icons-vue';
import { IconShoppingCart } from '@tabler/icons-vue';  

import ShoppingCart from './ShoppingCart.vue';

export default {
  data() {
    return {
    showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      console.log("aveer")
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
  components: {
    ShoppingCart, 
    IconMenu2,
    IconShoppingCart
  }
};
</script>
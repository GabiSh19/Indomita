<template>
    <h2 class="pt-5 tituloViajes" >  Elige un destino</h2>
    <p class="subtituloViaje py-3 ">Aventúrate con seguridad y descubre sitios inimaginables junto a la gente local.</p>

      <div class="row justify-content-center py-5" v-if="($store.state.viajes.length) == 0">
        <div class="col-auto">
        <scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
        </div>
        </div>
      <div class="row" v-else>
        <div class="row">
          <div class="col-lg-4 mb-5 col-md-6" v-for="viaje in rankingViajes" :key="viaje.nombre"> 
          <div class=" card border mb-3 mx-auto" style="width: 18rem; height: 30em;"  >
              <img :src= "viaje.img" class="card-img-top" alt="img">
              <div class="card-body">
                  <h5 class="card-title text-center">{{viaje.nombre}}</h5>
                  <p class="card-text text-center pb-1">{{viaje.descripcion}}</p>
              </div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Duración: {{viaje.duracion  }}</li>
                  <li class="list-group-item">Inscritos: {{viaje.inscritos }} / {{viaje.cupos }}</li>
                  <li class="list-group-item">Precio: $ {{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(viaje.precio)}}</li>
              </ul>
              <button v-if="(loginIsTrue)" @click="agregar(viaje)" :class = " viaje.estado === 'true' ? 'btnInscribir' : 'btnDisabled'" :disabled="viaje.estado === 'false' ">{{viaje.estado === 'true' ? 'Inscribirme' : 'No disponible' }}</button>
          </div>
      </div>
  </div>
  </div>
</template>
  
  
  <script>
  import {mapActions, mapState, mapMutations, mapGetters} from 'vuex' 
  import { useStore } from 'vuex'

  

  export default {
    name: "Home-View",
    data() {
        return {
        color:'rgb(255,142,1)',
    }
    },

    setup(){

        const store = useStore();        
        const logout = () => {
			store.dispatch('logout');
		}

        return {
            logout
        }
    },

    created(){
        this.getViajes()
    },

    methods: {
        ...mapMutations (['agregar']),
        ...mapActions(['getViajes']),
    },
    mounted(){

    },
    computed : {
        ...mapState(['viajes']),
        rankingViajes() {
            const rankingViajes = [...this.viajes];  
            rankingViajes.sort((a, b) => a.inscritos - b.inscritos);
            return rankingViajes;
        },
        ...mapGetters(['loginIsTrue']),

      },  
  }
  
  </script>
  
  <style>
      .tituloViajes{
      text-align: center;
      margin-top: 2.2em;
      font-size: 1.3em;
      }

      .subtituloViaje{
      text-align: center;
      font-size: .9em;
      margin: 0 1em
      }

      .card {
        max-height: 32em;
        overflow: hidden;
          border-color: rgb(255,142,1);
      }

      .card-img-top{
      height: 160px;
      align-self: center;
      }
      
      .card-text{
        font-size: .8em;
      }
      .card-body{
      padding-top: 1rem;
      }

      .btnInscribir {
          background-color: rgb(255,142,1);
          color: white;
          border: 1px solid rgb(255,142,1);

          letter-spacing: 3px;
          padding: .6em 0;
      }


       .btnInscribir:hover{
          background-color: rgba(255,142,1,.7);
      } 

      .btnDisabled{
          background-color: #dadada;
          letter-spacing: 3px;
          color: rgb(70, 70, 70); 
          border: 1px solid rgb(255,142,1);
          padding: .6em 0;
          border: 1px solid #dadada;
      }

    /* RESPONSIVE DESIGN -> Media Queries*/

    @media screen and (min-width: 1000px){
    .tituloViajes{
        text-align: center;
        margin-top: 5em;
        font-size: 1.5em;
      }

      .subtituloViaje{
        text-align: center;
        font-size: 1.1em;
        margin: 0 3.5em 2.2em 0 
      }
    }



  </style>
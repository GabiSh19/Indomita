## Indomita 
Sitio web dedicado a la venta de viajes por el mundo. 

### Instalación del proyecto

```sh
npm install
```

### Compilar código para visualización del proyecto

```sh
npm run dev
```

### Compilar código para visualización del proyecto

```sh
npm run dev
```

### Ingreso de usuarios 

```html
Usuario -> mail: usuario@micorreo.com , contraseña: usuario
Administrador -> mail: administrador@micorreo.com , contraseña: administrador

```

## Características:

* Maquetación con HTML y CSS
* Uso de Componenetes Vue
* Programación con Javascript ES6
* Consumo, manejo de datos y estados
* Estructura de archivos y carpetas


### 1.Maquetación con HTML y CSS
> Ejemplo de HTML Semántico y CSS en [src/views/CountryView.vue](src/views/CountryView.vue) (línea 1)
```html
<template>
    <div class="row pt-5 rowCountry">
        <h1 class="mt-5 text-center tituloCountry"> INFORMACIÓN DEL PAÍS</h1>
            <div class="col-lg-4 mb-5 col-md-6" v-for="(pais, index) in arrayData" :key="index"> 
            <div class=" card border mb-3 mx-auto"   >
                <img :src= "pais.flags.png" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title text-center"> País: {{pais.name.common}}</h5>
                    <router-link :to="`/paises/${pais.name.common}`"> 
                        {{ pais.name.common }}
                    </router-link>
                    <p class="card-text text-center">Capital: {{pais.capital}}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Continente: {{pais.region}}</li>
                    <li class="list-group-item">Moneda: {{pais.currencies }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

```
> Responsividad por CSS en [src/views/CountryView.vue](src/views/CountryView.vue) (línea 37 y 48)
```css
 <style>
.tituloCountry{
    font-size: 1em;
}

.card{
    width: 15em;
    margin: 1em;
    font-size: .9em;
}

/* RESPONSIVE DESIGN -> Media Queries*/

@media screen and (min-width: 650px){

    .rowCountry{
        justify-content: center;
    }

    .card{
        margin: 1em 2em;
    }
    
}
@media screen and (min-width: 1000px){

    .card{
        width: 25em;
        margin: 1.5em;
        border: 1px solid black;
    }
    
}

</style>

```

### 2. Uso de Componentes Vue
> Uso de componentes en src/components, ejemplo de componente importado en [src/views/AdminTravel.vue](src/views/AdminTravel.vue) (línea 7)
```html
<template>
    <AdminTable/>
</template>

<script>

import AdminTable from '@/components/AdminTable.vue'

export default {
    name: 'AdminView',
    components: {
        AdminTable
    }
    }
</script>
```

> Comunicación entre componentes en [src/views/TravelsView.vue](src/views/TravelsView.vue) (línea 63, 64, 70)

```html
<div class="col-lg-4 mb-5 col-md-6" v-for="(pais, index) in arrayData" :key="index"> 
            <div class=" card border mb-3 mx-auto"   >
                <img :src= "pais.flags.png" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title text-center"> País: {{pais.name.common}}</h5>
                    <router-link :to="`/paises/${pais.name.common}`"> 
                        {{ pais.name.common }}
                    </router-link>
```

```js
  import {mapActions, mapState, mapMutations, mapGetters} from 'vuex' 
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
```
> Uso de props para obtener información de la API con rutas dinámicas en [src/views/CountryView.vue](src/views/CountryView.vue) (línea 67)

```js
<script>
import {useRoute} from 'vue-router'
import {fetchData} from '../services/fetchData'

export default {
    props: ['nombre'],
    setup(props){
        console.log(props.nombre)
        const nombreParams = useRoute();
        const {params} = nombreParams
        // fetch a la API 
        return {...fetchData(`https://restcountries.com/v3.1/name/${params.nombre}`)}
    }
}

</script>
```


### 3. Programación con JavaScript

> Ranking de viajes utilizando método sort [src/views/AdminTable.vue ](src/views/AdminTable.vue) (línea 238)
```js
computed : {
            ...mapState(['viajes', 'viajesFiltrados', 'mostrarViaje', 'agregarViaje' ]),
            rankingViajes() {
              const rankingViajes = [...this.viajesFiltrados];  
              rankingViajes.sort((a, b) => b.inscritos - a.inscritos);
              return rankingViajes;
            },
          },  
```

### 4. Consumo, manejo de datos y estados 

> Uso de actions del store 'vuex' en [src/views/TravelsView.vue](src/views/TravelsView.vue) (línea 63, 64, 70)

```html
<div class="col-lg-4 mb-5 col-md-6" v-for="(pais, index) in arrayData" :key="index"> 
            <div class=" card border mb-3 mx-auto"   >
                <img :src= "pais.flags.png" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title text-center"> País: {{pais.name.common}}</h5>
                    <router-link :to="`/paises/${pais.name.common}`"> 
                        {{ pais.name.common }}
                    </router-link>
```

```js
  import {mapActions, mapState, mapMutations, mapGetters} from 'vuex' 
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

      }
```
> Uso 'vuex' [src/store/index.js](src/store/index.js) (línea 1)
```js
import { createStore } from 'vuex'
import router from '../router'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc} from "firebase/firestore";
import { db, auth } from "@/auth/auth.service"

export default createStore({

  state: {
    user: null,
    login: false,
    rolAdmin: false,
    rolUser: false,
    viajes: [],
    viajesFiltrados: [],
    mostrarViaje: {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''},
    carrito: JSON.parse(localStorage.getItem('carrito')) ? JSON.parse(localStorage.getItem('carrito')) : [],
    valores: JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : 0,
    cantCarrito: JSON.parse(localStorage.getItem('cantCarrito')) ? JSON.parse(localStorage.getItem('cantCarrito'))   : 0,
  },

  getters: {
    loginIsTrue(state){
      return state.login
    },
    isRolAdmin(state){
      return state.rolAdmin
    },
    isRolUser(state){
      return state.rolUser
    },

  },

  mutations, actions,

```
  
  ### 5. Estructura de archivos y carpetas
  
    .
    ├── ...
    ├── public                  # HTML base y favicon
    ├── src                     # Archivos Principales
    │   ├── assets              # Documentos multimedia y CSS base
    │   ├── auth                # Conexión con Firebase: auth y firestore 
    │   ├── components          # Componentes Vue reutilizables
    │   ├── router              # Módulo de Router (rutas)
    │   ├── services            # API REST 
    │   ├── store               # Módulo de Store 'vuex'
    │   ├── views               # Vistas Principales
    │   ├── App.vue             # Archivo base de carga de vistas, componentes y módulos
    │   └── main.js             # Archivo base de carga de scripts
    └── ...
  
 

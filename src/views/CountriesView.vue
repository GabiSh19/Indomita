<template>
    <div class="row pt-5">
        <h1 class="my-5 text-center tituloCountries"> PAÍSES DEL MUNDO</h1>
    <!-- <router-link :to="`/paises/${pais.name}`"> -->
        <!-- </router-link> -->
            <div class="col-lg-4 mb-2 col-md-6" v-for="(pais, index) in arrayData" :key="index"> 
            <div class=" card border mb-3 mx-auto" >
                <img :src= "pais.flags[1]" class="card-img-top" alt="img">
                <div class="card-body">
                    <h5 class="card-title text-center"> País:</h5>
                    <router-link :to="`/paises/${pais.name.common}`"><p class="toPais text-center">{{ pais.name.common }} </p></router-link>
                    
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

<script>
import {fetchData} from '../services/fetchData'
export default {
    setup(){
        return {...fetchData('https://restcountries.com/v3/all')}
    }
}
</script>

<style>
body{
  background-color: rgb(255, 255, 255);
}

.tituloCountries{
    font-size: 1.3em;
    margin-top: 8em;
}

.card{
    max-width: 18em;
    height: 26em;
    overflow: hidden;
}
.card-body{
    max-height: auto;

}
.card-img-top{
    max-height: 8em;
}

.toPais{
    font-size: 1.5em;
    color: rgba(3, 221, 182, 1);
}

/* RESPONSIVE DESIGN -> Media Queries*/

@media screen and (min-width: 1000px){
    .tituloCountries{
        padding-top: 2em;
        font-size: 1.7em
    }
}


</style>
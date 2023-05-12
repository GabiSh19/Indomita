<template>
    <div class="row">
        <h1 class="my-5 text-center"> PAÍSES DEL MUNDO</h1>
    <!-- <router-link :to="`/paises/${pais.name}`"> -->
        <!-- </router-link> -->
            <div class="col-lg-4 mb-5 col-md-6" v-for="(pais, index) in arrayData" :key="index"> 
            <div class=" card border mb-3 mx-auto" style="width: 18rem;"  >
                <img :src= "pais.flags[1]" class="card-img-top" alt="img">
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
.card{
    max-width: 15em;
    height: 24em;
}
.card-body{
    max-height: 7em;

}
.card-img-top{
    max-height: 8em;
}

</style>
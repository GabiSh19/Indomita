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


<script>
import {useRoute} from 'vue-router'
import {fetchData} from '../services/fetchData'

export default {
    props: ['nombre'],
    setup(props){
        console.log(props.nombre)
        const nombreParams = useRoute();
        const {params} = nombreParams
        
        return {...fetchData(`https://restcountries.com/v3.1/name/${params.nombre}`)}
    }
}

</script>
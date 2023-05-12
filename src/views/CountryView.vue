<template>
    <!-- <h1>Detalle de país: {{nombre }}</h1> -->
    <h1> {{ arrayCountry }} </h1>
    <!-- <p v-for="(pais, index) in arrayCountry" :key="index">
        {{ pais.name }} - {{ pais.region }}
    </p> -->
    <h3>INTENTO</h3>
</template>


<style>



</style>


<script>
import {useRoute} from 'vue-router'
import {fetchData} from '../hooks/fetchData'

export default {
    props: ['nombre'],
    setup(props){
        // console.log(props.nombre)
        const nombreParams = useRoute();
        console.log(nombreParams.params.nombre); 

        
        return {arrayCountry}
    },
    data: {

    }
}

</script>
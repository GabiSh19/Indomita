<template>
    <div class="confirmaReserva" >
        <h6 class="mb-3 textoConfirma">Tu reserva ha sido confirmada</h6>
        <router-link to="/"> <button class="btn btn-primary btntoHome p-2">Volver</button> </router-link>
    </div>
    

</template>


<style>

.confirmaReserva{
    margin: 4.2em 3em 0 0;
    padding-top: 7em;
    height: 29em;
    width: 100%;
    background-image: url(../assets/aurora-g5db16d216_1280.jpg);
    background-color: #000;
    justify-content: center;
    color: white;
}

.titulo{
    font-size: 2em;
    margin-left: 1.6em;
}

.textoConfirma{
    margin-left: 1.6em;
}

.btntoHome{
    background-color: rgba(3, 221, 182, .5);
    border: 1px solid rgba(3, 221, 182, .5);
    margin-left: 4em;
    width: 60%;
}

@media screen and (min-width: 650px){
    
    .titulo{
    font-size: 2em;
    margin-left: 3em;
    }

    .textoConfirma{
        margin-left: 5em;
    }

    .btntoHome{
    background-color: rgba(3, 221, 182, .5);
    border: 1px solid rgba(3, 221, 182, .5);
    margin-left: 5em;
    width: 30%;
}
    
}
@media screen and (min-width: 1000px){
    .btntoHome{
        width: 20%;
    }
}

@media screen and (min-width: 1300px){
    .confirmaReserva{
    margin: 6.8em auto 0 auto;
    padding-top: 7em;
    padding-left: 5em;
    height: 29em;
    width: 80%;
    background-color: #000;
    justify-content: center;
}

.titulo{
    font-size: 2em;
    margin-left: 0em;
    }
}


</style>



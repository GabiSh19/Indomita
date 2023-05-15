<template>  
  <div class="margeeen">
    <video class="video-container" autoplay muted loop>
      <source src="../assets/ProyectVideo.mp4" type="video/mp4">
    </video>
    <div class="texto">
      <h1>SUMÉRGETE EN LA AVENTURA DE INDÓMITA</h1>
      <h5>¡Descubrir el mundo suena genial!</h5>
      <p>Elige un destino y nosotros nos preocupamos del resto: pasajes aéreos, estadía, guía turística, seguro médico y ¡Mucho más!</p>
      <button class="actionStart">COMENZAR</button>
    </div>
  </div>
  <!-- <p>TU ELIGES EL DESTINO, NOSOTROS NOS ENCARGAMOS DEL RESTO</p> -->
</template>

<script setup>


</script>

<style>
body{
  margin: 0;
}
.video-container{
  width: 100%;
  height: 80vh;
 
  margin: 0;
  padding: 0;
  object-fit:fill;
}
.margeeen{
  background-color: rgba(0,0,0,1);
  display: flex;
  justify-content: center;
}

.texto{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: auto;
  height: 100%;
  padding: 0 2%;
  left: 65%;
  backdrop-filter: blur(20px);
  box-shadow: 10px 0 15px (0,0,0,1);
  
}

h1{
  font-family: 'Raleway', sans-serif;
  font-size: 800;
  color: rgb(255,142,1);
  margin: 1em .3em .7em .3em;
  align-items: end;
}

h5{
  margin: 0 0 1em 0;
}

p{
  padding: 0 1em;
  margin: 1em 0 4em 0;
}

.actionStart{
  border: 1px solid rgb(255,142,1);
  padding: 1em 3em;
  border-radius: 30px;
  background-color: rgb(255,142,1)
}

</style>

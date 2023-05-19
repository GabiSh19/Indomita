<template>  
  <div class="margeeen">
    <video class="video-container" autoplay muted loop>
      <source src="../assets/ProyectVideo.mp4" type="video/mp4">
    </video>
    <div class="texto">
      <h1 class="titulo">SUMÉRGETE EN LA AVENTURA DE INDÓMITA</h1>
      <h5 class="subtitulo">Explora el mundo junto a nosotros</h5>
      <p class="textop">Inicia sesión o regístrate para reservar tu cupo</p>
      <router-link to="/login"> <button class="actionStart">COMENZAR</button></router-link> 
    </div>
  </div>
</template>

<script setup>


</script>

<style>

body{
  margin: 0;
}
.video-container{
  width: 100%;
  height: 50vh;
  margin: 0;
  padding: 0;
  object-fit: cover;
}
.margeeen{
  background-color: rgba(0,0,0,1);
  display: flex;
  flex-direction: column;
}

.titulo{
  font-size: 1em;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: rgb(0, 0, 0);
  margin: 1em .3em .7em .3em;
  align-items: end;
  font-weight: 600;
}

.subtitulo{
  font-size: .8em;
  margin: 0;
}

.textop{
  padding: 0 1em;
  margin: 1em 0 1em 0;
  font-size: .8em;
  width: 90%;
  text-align: center;
}

.texto{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(0, 0, 0);
  font-size: 1em;
  backdrop-filter: blur(20px);
  box-shadow: 10px 0 15px (0,0,0,1);
  background-color: rgba(245, 251, 255, 0.7);
}

.actionStart{
  border: 1px solid rgb(255,142,1);
  border-radius: 30px;
  background-color: rgb(255,142,1);
  font-size: .8em;
  padding: .6em 2em;
  margin: 0 0 1em 0 ;
  color: white;
}


/* RESPONSIVE DESIGN -> Media Queries*/



@media screen and (min-width: 650px){

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

  .titulo{
    padding-top: 1.7em;
    font-size: 1.5em;
    text-align: center;
  }

  .subtitulo{
    font-size: 1em;
    color: #000000;
    text-align: center;
  }

  .texto{
    position: absolute;
    color: rgb(55, 55, 55);
    height: calc(100% - 5em);
    left: 65%;
    backdrop-filter: blur(20px);
    box-shadow: 10px 0 15px (0,0,0,1);
  }

  .titulo{
    color: rgb(255,142,1);
  }

  .subtitulo{
    margin: 0 0 1em 0;
  }

  .textop{
    padding: 0 1em;
    margin: 1em 0 2em 0;
  }

  .actionStart{
    border: 1px solid rgb(255,142,1);
    padding: 1em 3em;
    border-radius: 30px;
    background-color: rgb(255,142,1);
    font-weight: bold;
  }

}

/* RESPONSIVE DESIGN -> Media Queries*/


@media screen and (min-width: 1000px){
  
  .video-container{
  width: 100%;
  height: 80vh;
  margin: 0;
  padding: 0;
  object-fit:fill;
  }

  .titulo{
    font-size: 1.7em;
  }

  .subtitulo{
    font-size: 1.2em;
    margin-bottom: 0;
  }
  .texto{
    backdrop-filter: blur(10px);
  }

  .textop{
    font-size: 1em;
  }

  .actionStart{
    border: 1px solid rgb(255,142,1);
    padding: 1em 3em;
    border-radius: 30px;
    background-color: rgb(255,142,1);
    font-weight: bold;
  }

}


</style>

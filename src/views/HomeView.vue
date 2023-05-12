<template>  
  <div class="margeeen">
    <video class="video-container" autoplay muted loop>
      <source  class="anchoc" src="../assets/aurora-borealis-74183.mp4" type="video/mp4">
    </video>
    <div class="texto">
      <h1>VIDEO ON BACKGROUND</h1>
      <p>The <em>object-fit</em> CSS property specifies how the contents of a replaced element should be fitted to the box established by its used height and width (from <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/object-fit">MDN</a>).</p>
      <button>BUTTON</button>
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
  height: 70vh;
  margin: 0;
  padding: 0;
  object-fit:fill;
  position: relative;
}
.margeeen{
  margin-left: 0;
  background-color: black;
}

.texto{
  position: absolute;
  color: white;
}

.anchoc{
  width: 100%;
}

</style>

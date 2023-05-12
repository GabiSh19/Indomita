<template>
    <footer class="footer">
      <div class="logoFooter">
        <router-link class="listNav" to="/"><img class="logo" src="../assets/image (2).png"></router-link>
      </div>
      <div class="informacion">
        <h2>INDOMITA EXPEDITIONS</h2>
        <h5> 2023</h5>
      </div>
    </footer>
  </template>
  
  <script setup>

  </script>
  
  <style>

    .footer{
        background-color: #434F85;
        padding: 1em 2rem;
        color: white;
        display: flex;
        justify-content: center;
    }

    .logo{
      font-size: 2em;
    }

    .informacion{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  /* @media screen and (min-width: 577px){


} */


/* RESPONSIVE DESIGN -> Media Queries*/

    /* @media screen and (min-width: 768px){


    } */

</style>

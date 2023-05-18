<template>
    <footer class="footer">
      <ButtonScroll @scroll-to-top="handleScrollToTop"></ButtonScroll>
      <div class="informacion">
        <h2 class="titleFooter">INDOMITA EXPEDITIONS</h2>
        <h5 class="yearFooter"> 2023</h5>
      </div>
    </footer>
  </template>
  
  <script>

  import ButtonScroll from '@/components/ButtonScroll.vue'
  
  export default {
      name: 'AdminView',
      components: {
        ButtonScroll
      }
      }
  </script>
  
  <style>

    .footer{
        background-color: rgba(0,0,0,1);
        padding: 1em 2em;
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        height: 7em;
        z-index: 200;
        position: relative;
        width: 100%;
    }

    .logo{
      font-size: 2em;
    }

    .titleFooter{
      font-size: 1em;
      margin: 0;
    }

    .yearFooter{
      font-size: .7em;
      margin-top: .2em;
    }

    .informacion{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

/* RESPONSIVE DESIGN -> Media Queries*/


@media screen and (min-width: 650px){
  
  .footer{
    height: 8em;
  }

  .titleFooter{
      font-size: 1.3em;
    }

    .yearFooter{
      font-size: 1.2em;
    }

}

/* RESPONSIVE DESIGN -> Media Queries*/


@media screen and (min-width: 1000px){

  .footer{
    height: 10em;
  }

  .titleFooter{
      font-size: 1.8em;
    }

    .yearFooter{
      font-size: 1.5em;
    }


}

</style>

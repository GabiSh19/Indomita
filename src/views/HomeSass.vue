<template>
    <section>
        <div class="bannerVideo">
            <h4>Prueba</h4>
    
        </div>
    
        <div class="contenedor">
            <div class="content">
                <div class="bannerText"> 
                    <div class="active">
                        <h2>Tokyo</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores nobis molestias corporis placeat, in odio pariatur. Nulla recusandae eaque, beatae harum obcaecati necessitatibus possimus adipisci nesciunt ut laboriosam porro consectetur
                        </p>
                    </div>
                    <div>
                        <h2>Egipto</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores nobis molestias corporis placeat, in odio pariatur. Nulla recusandae eaque, beatae harum obcaecati necessitatibus possimus adipisci nesciunt ut laboriosam porro consectetur
                        </p>
                    </div>
                    <div>
                        <h2>Maldivas</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores nobis molestias corporis placeat, in odio pariatur. Nulla recusandae eaque, beatae harum obcaecati necessitatibus possimus adipisci nesciunt ut laboriosam porro consectetur
                        </p>
                    </div>
                </div>    
                
            </div>
        </div>          
        <div class="controls">
            <li @click="nextSlide()"><img src="../assets/limage.png" alt=""></li>
            <li><img src="../assets/rightimage.png" alt=""></li>
    
        </div>
    </section>

</template>


<script >



</script>


<style  lang="scss">
section{
    background: #111;
    min-height: 100vh;

    .bannerVideo{
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        video{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            object-fit: cover;
            opacity: 0;
            &.active{
                opacity: 1;
            }
        }
    }

    .contenedor{
        position: relative;
        padding: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        min-height: 100vh;
        margin: 0;
        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100%;
            backdrop-filter: blur(10px);
            box-shadow: 10px 0 15px (0,0,0,0.05);
            
        }

    }

    .content{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .bannerText{
            position: relative;
            max-width: 100%;
            text-align: center;
            div{
                display: none;
                transition: .5s ease-in-out;
                h2{
                    color: white;
                    font-size: 3em;
                    line-height: 1em;
                    font-weight: 700;                    
                }
                p{
                    color: white;
                    font-size: 1.2em;
                    margin: 20px 0;
                }
                &.active{
                    display: initial;
                }
            }
        }
    }

    .controls{
        position: absolute;
        margin: 0;
        bottom: 0;
        right: 0;
        display: flex;
        li{
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            cursor: pointer;
            &:hover{
                background: #f5f5f5;
            }
        }
    }
}

@media screen and (min-width: 577px){
    section{
        .contenedor{
            padding: 0 100px;
            &::before{
                width: 50vw;
            }
        }
        .content{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .bannerText{
            max-width: 700px;
            div{
                h2{
                    font-size: 6em;                    
                }
            }
        }
    }



    }
    

}

</style>



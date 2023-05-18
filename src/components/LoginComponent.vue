<template>
        <div class="contenedor">
            <div class="row ">
                <div class="col-12 col-lg-11 contenedorRow">
                        <v-window v-model="step">
                        <v-window-item :value="1">
                        <div class="row inicioS">
                            <div class="col-12 col-sm-6 formulario login preview d-flex flex-column">
                                <h5 class="text-center mt-3 ">Inicio de sesión</h5>
                                <form  class="formDesktop" action="" @submit.prevent="login">
                                    <label class="label"> Correo: <input type="text" label="Email" name="Email"  class="input" v-model="login_form.email" placeholder="ejemplo@correo.com" required></label>
                                    <label class="label"> Contraseña: <input type="password" label="Password" class="input" name="Email" v-model="login_form.password" placeholder="contraseña" required></label> 
                                    <button class="btnTypeSub principal mb-4" type="submit" value="Login">INICIAR SESIÓN</button> 
                                </form>                  
                            </div>
                            <div class="col-12 col-sm-6 formulario register preview d-flex flex-column"> 
                                <h5 class="text-center mt-3">¿No tienes cuenta?</h5>
                                <p class="text-center mx-4 msgRegistro">Regístrate y entérate de nuestras novedades </p>  
                                    <button class="btnTypeSub secundario mb-4" @click="step++" type="submit">QUIERO REGISTRARME</button>
                            </div>  
                        </div>
                    </v-window-item>
                    <v-window-item :value="2">
                        <div class="row BienvenidoDenuevo">
                            <div class="col-12 col-sm-6 crearCuenta">
                                <h5 class="text-center">Crear cuenta </h5>
                                <p class="text-center mt-2 mb-3 msgRegistro">Ingresa los siguientes datos: </p>
                                <form class="formulario formRegistro "  @submit.prevent="register">
                                    <input type="text" label="name" name="Name" v-model="signup_form.name" placeholder="Nombre" class="input registro" required>
                                    <input type="text" label="Email" name="Email" v-model="signup_form.email" placeholder="Correo" class="input registro" required>
                                    <input type="password" label="Password" name="Email" v-model="signup_form.password" class="input registro" placeholder="Contraseña" required>
                                    <button class="btnTypeSub registro mb-4 mt-3 " type="submit">REGISTRARME</button>
                                </form>
                            </div>

                            <div class="col-12 col-sm-6 formulario login formlogin">
                                <h5 class="text-center mt-3">¿Ya tienes cuenta?</h5>
                                <p class="text-center msgRegistro mb-2 msgRegistroDesktop">Ingresa tus datos e inicia sesión</p>
                                <div class="text-center">
                                    <button class="btnTypeSub secundario mt-0 mb-4" @click="step--">INICIAR SESIÓN</button>
                                </div>
                            </div>
                            
                    </div>
                    </v-window-item>
                    </v-window>
                </div>
            </div>
        </div>
</template>

<script>
    import { IconMenu2 } from '@tabler/icons-vue';
    import { ref } from 'vue'
    import { useStore } from 'vuex'

    export default {
    setup () {
        const login_form = ref({});
        const signup_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }
        const register = () => {
            store.dispatch('register', signup_form.value);
        }
        return {
            login_form,
            signup_form,
            login,
            register
        }
    },
    data: () => ({
        step: 1
    }),
    props: {
        source: String
    }
};
</script>

<style>
    .contenedor{
        font-family: 'Yantramanav', sans-serif;
        margin: 7.5em 1em 2.1em 1em;
        overflow: hidden;
        height: 23em;
        /* position: relative; */
    }

    form{
        display: flex;
        flex-direction: column;
        
    }


    .formulario.login{
        background-color: rgb(248 248 255);
        color: #000000;
        font-size: 1em; 
    }

    .formulario.register.preview{
        display: flex;
        align-items: center;
        justify-content: center;
        background-image:   url(../assets/aurora-g5db16d216_1280.jpg);
        background-size: cover;
        color: #DDDAEA;
    }

    .formRegistro{
        margin: 0 .2em;
    }

    .label{
        font-size: .8em;
        display: flex;
        justify-content:space-between;
        margin: .5em 2.5em;
    }
    .input{
        margin-left: .3em;
        width: 63%;
        border: 1px solid rgb(0, 0, 0);
        border-radius: 25px;
        text-align: center;
        padding: .3em 0;
    }
    
    .input.registro{
        background-color: rgb(255, 255, 255);
        width: 70%;
        margin: .3em auto;
        font-size: .8em;
    }

    .msgRegistro{
        font-size: .8em;
        margin: 0;
    }

    .btnTypeSub{
        border: 1px solid rgba(3, 221, 182, .5);
        width: 72%;
        margin: 1em auto .5em auto;
        padding: .8em .2em;
        border-radius: 5px;
        letter-spacing: 3px;
        background-color: rgba(3, 221, 182, .5);
        font-size: .7em;
    }

    .btnTypeSub.secundario{
        background-color: #060E27;
        color: white;
        border: 1px solid rgba(0, 0, 0, 0.5);
        font-size: .7em;
    }

    .btnTypeSub.registro{
        background-color: rgba(3, 221, 182, .5);
        margin-top: 2.5em;
        font-size: .7em;
    }

   /* RESPONSIVE DESIGN -> Media Queries*/


  @media screen and (min-width: 650px){
    .contenedor{
        height: 20em;
        padding: 1em 0 2em 0;
    }

    .formulario{
        height: 17em;
    }

    .formulario.login{
        justify-content: center;
    }

    .btnTypeSub, .btnTypeSub.secundario{
        padding: .8em 0;
        width: 71%;
        font-size: .8em;
    }

    .btnTypeSub.secundario{
        padding: 1em .3em;
        width: 60%;
        font-size: .7em;
    }

    .crearCuenta{
        align-items: center;
        justify-content: center;
        padding-top: 2em;    
    }

    .formlogin{
        padding-top: 3em;
    }

    .msgRegistroDesktop{
        padding-bottom: 1em;
    }
  }
/* RESPONSIVE DESIGN -> Media Queries*/


@media screen and (min-width: 1000px){
    
    .contenedor{
        height: 26em;
        /* padding: 1em 0 4em 0; */
    }

    .formulario{
        height: 22em;
    }

    .formulario.login{
        justify-content: center;
    }

    .btnTypeSub, .btnTypeSub.secundario{
        padding: .8em 0;
        width: 71%;
        font-size: .8em;
    }

    .btnTypeSub.secundario{
        padding: 1em .3em;
        width: 55%;
    }

    .crearCuenta{
        align-items: center;
        justify-content: center;
        padding-top: 3em;    
    }

    .formlogin{
        padding-top: 7em;
    }

    .msgRegistroDesktop{
        padding-bottom: 1em;
    }

    .contenedorRow{
        margin: 1em 3em;
        padding-top: 2em;
    }

    .label{
        font-size: 1em;
        margin: 1em 2em;

    }
    .input{
        margin-left: 0;
        width: 65%;
        border: 1px solid rgb(0, 0, 0);
        border-radius: 25px;
        text-align: center;
        
    }
    .formDesktop{
        margin: 1em 0;
        padding: 0 1em;
    }
    .formulario.register.preview h5, .formulario.login.preview h5, .crearCuenta h5, .formlogin h5{
        font-size: 1.5em;
    }

    .formulario.register.preview p, .formulario.login.preview p, .crearCuenta p, .formlogin p{
        font-size: 1em;
        margin-bottom: 2em;
    }

    .btnTypeSub.registro, .btnTypeSub.principal{
        font-size: .9em;
        width: 60%;
    }

    .input.registro{
        width: 60%;
        margin: .5em auto;
        font-size: 1em;
        padding: .2em 0;
    }

}    

@media screen and (min-width: 1300px){

    .contenedor{
        height: 28em;
        /* padding: 1em 0 4em 0; */
    }

    .formDesktop{
        margin: 1em 5em;
        padding: 0 1em;
    }
}

</style>

<template>
        <div class="contenedor">
            <div class="row">
                <div class="col-12">
                        <v-window v-model="step">
                        <v-window-item :value="1">
                        <div class="row">
                            <div class="col-12 col-sm-6 form login d-flex flex-column">
                                    <h1 class="text-center mt-5 ">Inicio de sesión</h1>
                                    <form action="" @submit.prevent="login">
                                        <label class="label"> Correo: <input type="text" label="Email" name="Email"  class="input" v-model="login_form.email" placeholder="ejemplo@correo.com" required></label>
                                        <label class="label"> Contraseña: <input type="password" label="Password" class="input" name="Email" v-model="login_form.password" placeholder="contraseña" required></label> 
                                        <button class="typeSub principal" type="submit" value="Login">INICIAR SESIÓN</button> 
                                    </form>                  
                            </div>
                            <div class="col-12 col-sm-6 form register preview d-flex flex-column"> 
                                <h1 class="text-center ">¿No tienes cuenta?</h1>
                                <h5 class="text-center mx-4">Regístrate y entérate de nuestras novedades </h5>  
                                    <button class="typeSub secundario" @click="step++" type="submit">QUIERO REGISTRARME</button>
                            </div>  
                        </div>
                    </v-window-item>
                    <v-window-item :value="2">
                        <div class="row BienvenidoDenuevo">
                            <div class="col-12 col-sm-6">
                                <h1 class="text-center">CREAR CUENTA </h1>
                                <h4 class="text-center mt-4">Ingresa los siguientes datos para registrarte</h4>
                                <form class="form"  @submit.prevent="register">
                                    <input type="text" label="name" name="Name" v-model="signup_form.name" placeholder="Nombre" required>
                                    <input type="text" label="Email" name="Email" v-model="signup_form.email" placeholder="Correo" required>
                                    <input type="password" label="Password" name="Email" v-model="signup_form.password" placeholder="Contraseña" required>
                                    <div class="text-center mt-n5">
                                        <button class="typeSub" type="submit">REGISTRARME</button>
                                    </div>
                                </form>
                            </div>

                            <div class="col-12 col-sm-6">
                                <h1 class="text-center ">¿Ya tienes cuenta?</h1>
                                <h5 class="text-center">Ingresa tus datos e inicia sesión</h5>
                                <div class="text-center">
                                    <button class="typeSub" @click="step--">INICIAR SESIÓN</button>
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
    }

    form{
        display: flex;
        flex-direction: column;
    }

    .form.login{
        padding: .2em 0 .2em 0;
        background-color: rgb(248 248 255);
        color: #000000;
    }

    .form.register.preview{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: .5em 0 2em 0;
        background-image:   url(../assets/aurora-1197753_1280.jpg);
        background-size: cover;
        color: #DDDAEA;
    }

    .label{
        font-size: 1.2em;
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
    }
    .contenedor{
        /* border: 1px solid black; */
        /* height: 98vh; */
        overflow: hidden;
        margin: 0 10em;
        padding: 5em 0;
    }

    .typeSub{
        border: 1px solid rgba(3, 221, 182, .5);
        width: 82%;
        margin: 1em auto .5em auto;
        padding: .5em 1em;
        border-radius: 5px;
        letter-spacing: 5px;
        background-color: rgba(3, 221, 182, .2);
    }

    .typeSub.secundario{
        background-color: #060E27;
        color: white;
        border: 1px solid rgba(0, 0, 0, 0.5);
    }

    @media screen and (min-width: 577px){

        .form.login{
        padding: .5em 0 1.3em 0;

    }
    }
</style>

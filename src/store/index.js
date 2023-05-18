import { createStore } from 'vuex'
import router from '../router'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc} from "firebase/firestore";
import { db, auth } from "@/auth/auth.service"

export default createStore({

  state: {
    user: null,
    login: false,
    rolAdmin: false,
    rolUser: false,
    viajes: [],
    viajesFiltrados: [],
    mostrarViaje: {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''},
    carrito: JSON.parse(localStorage.getItem('carrito')) ? JSON.parse(localStorage.getItem('carrito')) : [],
    valores: JSON.parse(localStorage.getItem('valores')) ? JSON.parse(localStorage.getItem('valores')) : 0,
    cantCarrito: JSON.parse(localStorage.getItem('cantCarrito')) ? JSON.parse(localStorage.getItem('cantCarrito'))   : 0,
  },

  getters: {
    loginIsTrue(state){
      return state.login
    },
    isRolAdmin(state){
      return state.rolAdmin
    },
    isRolUser(state){
      return state.rolUser
    },

  },

  mutations: {
    SET_USER (state, user) {
      state.user = user
      state.login = true;
      // console.log(user)
    },

    CLEAR_USER (state) {
      state.user = null
      state.login = false;
    },

    getViajes(state,payload){
      state.viajes = payload
      state.viajesFiltrados = payload 
    },

    getViaje(state,payload){
      state.mostrarViaje = payload 
    },

    getViajesFiltrados(state, payload){
      state.viajesFiltrados = payload
    },
    agregar(state, payload){
      // console.log(state.carrito)
      const yaExiste = state.carrito.some((element) => { 
          return payload.id === element.id
      })
      
      if(yaExiste){
          payload.cantidad = payload.cantidad + 1 
          state.valores = state.valores+(payload.precio) 
      }else{
          state.carrito.push(payload) 
          // state.carrito = JSON.parse(localStorage.getItem('carrito')),
          state.valores = state.valores+(payload.precio) 
      }
      state.cantCarrito = state.carrito.length; 
      localStorage.setItem('carrito', JSON.stringify(state.carrito))
      localStorage.setItem('valores', JSON.stringify(state.valores))
      localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))

    },
    restar(state, payload){

        if(payload.cantidad == 1){
            state.carrito = state.carrito.filter((element)=>{
            return element.id != payload.id;
            })
            state.valores = state.valores - (payload.precio * payload.cantidad)
            payload.cantidad = 1
        }
        else if(payload.cantidad > 1){
            payload.cantidad = payload.cantidad - 1
            state.valores = state.valores - (payload.precio)
        }
        state.cantCarrito = state.carrito.length;
        localStorage.setItem('carrito', JSON.stringify(state.carrito))
        localStorage.setItem('valores', JSON.stringify(state.valores))
        localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
    },

    eliminar(state, payload){
        state.carrito = state.carrito.filter((element)=>{
            return element.id != payload.id;
        })
        state.valores = state.valores - (payload.precio * payload.cantidad)
        payload.cantidad = 1

        state.cantCarrito = state.carrito.length;
        localStorage.setItem('carrito', JSON.stringify(state.carrito))
        localStorage.setItem('valores', JSON.stringify(state.valores))
        localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
    },

    limpiarCarro(state,payload){
        state.carrito = [];
        state.valores = 0;
        payload.forEach(element => {
            element.cantidad = 1;
        });
        state.cantCarrito = state.carrito.length;
        localStorage.setItem('carrito', JSON.stringify(state.carrito));
        localStorage.setItem('valores', JSON.stringify(state.valores));
        localStorage.setItem('cantCarrito', JSON.stringify(state.carrito.length))
    },
    finalizaCompra(state){
      state.carrito =[];
      state.valores = 0;
      router.push('/ConfirmTravel')
      // router.push('/ConfirmTravel')
    }
    

  },

  actions: {

    async UsuarioActivo ({commit}){
      auth.onAuthStateChanged(async (user) => {
        if (user) { 
          const docuCifrada = await getDoc(doc(db, "usuarios", `${user.uid}`))
          const rol = docuCifrada.data().rol;          
            const userData = {
              uid: user.uid,
              email: user.email,
              rol: rol
            };
            if (userData.rol === 'admin'){ 
              this.state.rolAdmin = true;
            }
            else if (userData.rol === 'usuario'){
              this.state.rolUser = true; 
            }
            commit('SET_USER', userData)          
        } else {
          commit('SET_USER', null)
        }
      })
    },


    async login ({ commit }, details) {
      const { email, password } = details
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/TravelsView')


      const docuCifrada = await getDoc(doc(db, "usuarios", `${auth.currentUser.uid}`))
        const rol = docuCifrada.data().rol;          
          const userData = {
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            rol: rol
          };
          if (userData.rol === 'admin'){ 
            this.state.rolAdmin = true;
          }
          else if (userData.rol === 'usuario'){
            this.state.rolUser = true; 
          }       
    },

    async register ({ commit}, details) {
      const { email, password } = details
      try {
        const infoUsuario = await createUserWithEmailAndPassword(auth, email, password).then((user) =>   {
          return user  
        });
        console.dir(infoUsuario.user.uid) 
        await setDoc(doc(db, "usuarios", `${infoUsuario.user.uid}`), {
          correo: email,
          rol: 'usuario'
        });
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/TravelsView')
    },

    async logout ({ commit }) {
      commit('CLEAR_USER')
      await auth.signOut();
      router.push('/login')
      this.state.rolAdmin = false;
      this.state.rolUser = false;
    },

    // fetchUser ({ commit }) {
    //   auth.onAuthStateChanged(async user => {
    //     if (user === null) {
    //       commit('CLEAR_USER')
    //     } else {
    //       commit('SET_USER', user)
    //       if (router.isReady() && router.currentRoute.value.path === '/login') {
    //         router.push('/')
    //       }
    //     }
    //   })
    // },

     // CRUD -> READ 

     async getViajes ({commit}){
      const viajes = [];
      const listado = await getDocs(collection(db, "viajes"))
          listado.forEach(doc => {    
            let viaje =  doc.data()
            // console.log(viaje)
            viaje.id = doc.id
            viajes.push(viaje)
            // console.log(listado)
          });
          commit('getViajes', viajes)
      },

        // Obtiene datos del viaje seleccionado 

      async getViaje ({commit}, idViaje){
        const datosViaje = await getDoc(doc(db, "viajes", idViaje));
        const viaje = datosViaje.data();
        viaje.id = datosViaje.id;
        viaje.nombre = datosViaje.data().nombre;
        viaje.estado = datosViaje.data().estado;
        viaje.precio = datosViaje.data().precio;
        viaje.duracion = datosViaje.data().duracion;
        viaje.descripcion = datosViaje.data().descripcion;
        viaje.cupos = datosViaje.data().cupos;
        viaje.inscritos = datosViaje.data().inscritos;
        viaje.img = datosViaje.data().img;
        commit('getViaje', viaje)
        },

       // CRUD -> UPDATE 

    async modificarViaje({commit}, mostrarViaje){
      await setDoc(doc(db, "viajes", mostrarViaje.codigo), {
        codigo: mostrarViaje.codigo,
        nombre: mostrarViaje.nombre,
        estado: mostrarViaje.estado,
        precio: mostrarViaje.precio,
        duracion: mostrarViaje.duracion,
        descripcion: mostrarViaje.descripcion,
        cupos: mostrarViaje.cupos,
        inscritos: mostrarViaje.inscritos,
        img: mostrarViaje.img
      });
    },

     // CRUD -> CREATE 

     async crearViaje({commit}, agregarViaje){
      await setDoc(doc(db, "viajes", agregarViaje.codigo), {
        codigo: agregarViaje.codigo,
        nombre: agregarViaje.nombre,
        estado: agregarViaje.estado,
        precio: agregarViaje.precio,
        duracion: agregarViaje.duracion,
        descripcion: agregarViaje.descripcion,
        cupos: agregarViaje.cupos,
        inscritos: agregarViaje.inscritos,
        img: agregarViaje.img
      })
      agregarViaje = '';
    },

    // CRUD -> DELETE 

    async eliminarViaje({commit}, idBorrar){
      await deleteDoc(doc(db,"viajes", idBorrar))
    },

    async filtroName({ commit, state }, nombre) {
      const filtro = state.viajes.filter((viaje) => {
        let nombresViajes = viaje.nombre.toLowerCase();
        let nombreInput = nombre.toLowerCase();
        if (nombresViajes.includes(nombreInput)) {
          return viaje;
        }
      });
      commit("getViajesFiltrados", filtro);
    },

  }
})
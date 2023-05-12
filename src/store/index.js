import { createStore } from 'vuex'
import router from '../router'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { collection, getDocs, doc, getDoc, deleteDoc, setDoc} from "firebase/firestore";
import { db, auth } from "@/auth/auth.service"

export default createStore({

  state: {
    user: null,
    login: false,
    viajes: [],
    viajesFiltrados: [],
    mostrarCurso: {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''}
  },

  getters: {
    loginIsTrue(state){
      return state.login
    }
  },

  mutations: {
    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    },

    getViajes(state,payload){
      state.viajes = payload
      state.viajesFiltrados = payload 
    },

    getViaje(state,payload){
      state.mostrarCurso = payload 
    },

    getViajesFiltrados(state, payload){
      state.cursosFiltrados = payload
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
            commit('SET_USER', userData)
            console.log(userData)
          
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
      router.push('/countries')
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
      router.push('/AppPrueba')
    },

    async logout ({ commit }) {
      await signOut(auth)
      commit('CLEAR_USER')
      router.push('/login')
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)
          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    },

     // CRUD -> READ 

     async getViajes ({commit}){
      const viajes = [];
      const listado = await getDocs(collection(db, "viajes"))
          listado.forEach(doc => {    
            let viaje =  doc.data()
            console.log(viaje)
            viaje.id = doc.id
            viajes.push(viaje)
            console.log(listado)
          });
          commit('getViajes', viajes)
      },

        // Obtiene datos del curso seleccionado 

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
          return curso;
        }
      });
      commit("getViajesFiltrados", filtro);
    },

  }
})
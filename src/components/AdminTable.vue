<template>
    <div class="container">
      <div class="row">
        <h2 class="titulo">Administrador de Viajes</h2>
      </div>
      <div class="row justify-content-center py-5" v-if="($store.state.viajes.length) == 0">
          <div class="col-auto">
            <fade-loader :loading="loading" :color="color" :size="size" class="mb-5"></fade-loader>
          </div>
        </div>
        <div  v-else>
          <div class="row justify-content-center py-4" id="searchContainer">
            <div id="search"  class="col-8" style="display: flex;">
              <input id="input-search" v-model = "texto" @keyup= "formulario" class="form-control w-100 me-2"  type="text" placeholder="Ingrese su búsqueda" >
              <button id="buttonSearch" class="btn btn-buscar" >
                <i class="fa fa-search"></i> Buscar
              </button>
            </div>
            <div class="col-2" style="display: flex;"> 
              <button type="button" class="btn btn-agregar" id="new" data-bs-toggle="modal" data-bs-target="#createModal" >Agregar Curso</button>
            </div>
          </div>
          <div class=" table-responsive contenedorTabla">
            <table class="table table-bordered table-hover align-middle">
            <thead class="table-primary">
                <tr>
                    <th scope="col" class="text-center">Código</th>
                    <th scope="col" class="text-center">Nombre</th>
                    <th scope="col" class="text-center">Descripción</th>
                    <th scope="col" class="text-center">Duración</th>
                    <th scope="col" class="text-center">Precio</th>
                    <th scope="col" class="text-center">Cupos</th>
                    <th scope="col" class="text-center">Inscritos</th>
                    <th scope="col" class="text-center">Imagen</th>
                    <th scope="col" class="text-center">Estado</th>
                    <th scope="col" class="text-center">Modificar</th>
                    <th scope="col" class="text-center">Eliminar</th>
                </tr>
          </thead>
  
          <TBody>
              <tr v-for="viaje in viajesFiltrados" :key="viaje.nombre">
                  <td  class="text-center">{{viaje.id}}</td>
                  <td  class="text-center">{{viaje.nombre}}</td>
                  <td  class="text-center">{{viaje.descripcion}}</td>
                  <td  class="text-center">{{viaje.duracion}}</td>
                  <td  class="text-center">$ {{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(viaje.precio)}}</td>
                  <td  class="text-center">{{viaje.cupos}}</td>
                  <td  class="text-center">{{viaje.inscritos}}</td>
                  <td  class="text-center" > 
                    <img :src= "viaje.img" id="card-img-top" alt="img">
                  </td>
                  <td  class="text-center">{{viaje.estado}}</td>
                  <td class="text-center">
                      <button class="btn btn-modificar"  id="modificar" @click="getCurso(viaje.id)" type="button" data-bs-toggle="modal" data-bs-target="#editModal">&#9998;</button>
                  </td>
                  <td class="text-center"><button class="btn btn-modificar" id="borrar" type="button" @click="mensajeBorraCurso(viaje.id)">&#128465;</button></td>
              </tr>
          </tbody>
          </table>
        </div>
        </div>
    </div>
  
  
        
    <!-- Modal Editar -->
    <!-- <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar Curso</h1>
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{  }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="form" @submit.prevent="mensajeEditarCurso()">
              <label for="code-obj" class="form-label">Código</label>
              <input type="text" class="form-control" v-model="mostrarCurso.codigo">
              <label for="name-obj" class="form-label">Nombre</label>
              <input type="text" class="form-control" v-model="mostrarCurso.nombre">
              <label for="state-obj" class="form-label">Estado</label>
              <input type="text" class="form-control" v-model="mostrarCurso.estado">
              <label for="price-obj" class="form-label">Precio</label>
              <input type="text" class="form-control" v-model="mostrarCurso.precio">
              <label for="duration-obj" class="form-label">Duración</label>
              <input type="text" class="form-control" v-model="mostrarCurso.duracion">
              <label for="description-obj" class="form-label">Descripción</label>
              <input type="text" class="form-control" v-model="mostrarCurso.descripcion">
              <label for="capacity-obj" class="form-label">Cupos</label>
              <input type="text" class="form-control" v-model="mostrarCurso.cupos">
              <label for="enrolled-obj" class="form-label">Inscritos</label>
              <input type="text" class="form-control" v-model="mostrarCurso.inscritos">
              <label for="img-obj" class="form-label">Imagen</label>
              <input type="text" class="form-control" v-model="mostrarCurso.img">
              <div class="modal-footer">
                <button type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-modificar ms-2 p-2" data-bs-dismiss="modal" >Modificar</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div> -->
  
    <!-- Modal crear curso -->
    <!-- <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Crear Curso</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
        
            <form class="form" @submit.prevent="confirmaAgregarCurso()">
              <label for="code-obj" class="form-label" >Código</label>
              <input type="text" class="form-control" v-model="agregarCurso.codigo">
              <label for="name-obj" class="form-label">Nombre</label>
              <input type="text" class="form-control" v-model="agregarCurso.nombre">
              <label for="state-obj" class="form-label">Estado</label>
              <input type="text" class="form-control" v-model="agregarCurso.estado">
              <label for="price-obj" class="form-label">Precio</label>
              <input type="text" class="form-control" v-model="agregarCurso.precio">
              <label for="duration-obj" class="form-label">Duración</label>
              <input type="text" class="form-control" v-model="agregarCurso.duracion">
              <label for="description-obj" class="form-label">Descripción</label>
              <input type="text" class="form-control" v-model="agregarCurso.descripcion">
              <label for="capacity-obj" class="form-label">Cupos</label>
              <input type="text" class="form-control" v-model="agregarCurso.cupos">
              <label for="enrolled-obj" class="form-label">Inscritos</label>
              <input type="text" class="form-control" v-model="agregarCurso.inscritos">
              <label for="img-obj" class="form-label">Imagen</label>
              <input type="text" class="form-control" v-model="agregarCurso.img">
              <div class="modal-footer">
                <button type="button" class="btn btn-cancelar " data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-crear ms-2 py-2" data-bs-dismiss="modal" >Crear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> -->
    </template>
      
      <script>
      import Swal from 'sweetalert2'
      import {mapActions, mapState} from 'vuex';
      import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
      import { useStore } from 'vuex'
      
      export default {
        name: 'AdminTable',
        components: {
           FadeLoader
        },
        setup(){
          return{
            agregarViaje: {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''},
            idBorrarViaje: '',
            color: '#d676ab',
            texto : '',    
          }
        },
        created(){
              this.getCursos()
              this.getCurso(this.idEditar)
          },
          methods: { 
            formulario() {
              this.$store.dispatch('filtroName', this.texto)
          }
  
            ,
            ...mapActions(['getCursos', 'getCurso', 'crearCurso', 'modificarCurso','eliminarCurso', 'filtroName']),
  
          // SweetAlert para agregar curso
  
            confirmaAgregarCurso(){
              Swal.fire({
                title: '¿Estás seguro de crear este curso?',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('¡Listo! El curso ha sido creado exitosamente ', '', 'success')
                  this.crearCurso(this.agregarCurso)
                  this.getCursos()
                  this.resetearCurso(this.agregarCurso)
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              })
            },
  
            // SweetAlert para borrar curso
  
            mensajeBorraCurso(elemento){
              Swal.fire({
                title: '¿Estás seguro de borrar este curso?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#f2b119',
                cancelButtonColor: '#8B82B7',
                confirmButtonText: 'Si, Borrar'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Listo!',
                    'El curso ha sido eliminado exitosamente.',
                    'success'
                  )
                  this.idBorrarCurso =  elemento;
                  this.eliminarCurso(this.idBorrarCurso);
                  this.getCursos();
                }
              })
            },
            
            // SweetAlert para editar curso
  
            mensajeEditarCurso(){
              Swal.fire({
                title: '¿Estás seguro de los cambios realizados?',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('¡Listo! El curso ha sido modificado exitosamente ', '', 'success')
                  this.getCursos() 
                  this.modificarCurso(this.mostrarCurso)
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              })
            },
  
            // Función para limpiar campos de formulario
  
            resetearCurso(){
              this.agregarCurso =  {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''}
            },
  
  
          },
  
          computed : {
          ...mapState(['cursos', 'mostrarCurso', 'agregarCurso', 'cursosFiltrados']),
          },  
          
        }
  
  
      </script>
      
      <style>
        
        #card-img-top{
          max-width: 8rem;
          height: 60px;
          }
  
        .container{
          font-family: 'Montserrat', sans-serif;
        }
  
        .titulo{
          padding-top: 5rem;
        }
  
        .table.table-bordered{
          font-family: 'Montserrat', sans-serif;
          margin-bottom: 5em;
        }
        .contenedorTabla{
          max-width: 99vw;
        }
  
        .modal-content{
        font-family: 'Montserrat', sans-serif;
        }
  
        #search{
          border-radius: 50px;
        }
  
        .btn.btn-crear,.btn.btn-modificar{
                background-color: #8B82B7;
                color: azure;
                font-family: 'Montserrat', sans-serif;
                margin: 0;
            }
            .btn.btn-crear:hover,.btn.btn-modificar:hover{
                background-color: #f2b119;
                color: azure;
            }
            .btn.btn-cancelar,.btn.btn-agregar,.btn.btn-buscar{
                background-color: #8B82B7;
                color: azure;
                font-family: 'Montserrat', sans-serif;
            }
  
            .btn.btn-agregar{
                background-color: #f2b119;
                color: azure;
                font-family: 'Montserrat', sans-serif;
            }
  
            .btn.btn-cancelar:hover,.btn.btn-agregar:hover,.btn.btn-buscar:hover{
                background-color: #f2b119;
                color: azure;
            }
  
            .btn.btn-agregar:hover{
                background-color: #f3c65c;
                color: azure;
            }
  
            .btn.btn-eliminar{
                background-color: #f2b119;
                color: azure;
            }
            .btn.btn-eliminar:hover{
                background-color: #f2b119;
                color: azure;
            }
      </style>
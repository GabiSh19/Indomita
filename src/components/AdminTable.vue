<template>
    <div class="container">
      <div class="row">
        <h2 class="tituloAdmin mt-5">Administrador de Viajes</h2>
      </div>
        <div >
          <div class="row justify-content-center py-1 mb-4" id="searchContainer">
            <div id="search"  class="col-8" style="display: flex;">
              <input id="input-search" v-model = "texto" @keyup= "formulario" class="form-control w-100 me-2"  type="text" placeholder="Ingrese su búsqueda" >
              <button id="buttonSearch" class="btn btn-buscar py-3" >Buscar</button>
            </div>
            <div class="col-2" style="display: flex;"> 
              <button type="button" class="btn btn-agregar" id="new" data-bs-toggle="modal" data-bs-target="#createModal" >Agregar Viaje</button>
            </div>
          </div>

          <!-- Tabla mostrada en la página "mantenedor" sólo para el administrador -->
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
              <tr v-for="viaje in rankingViajes" :key="viaje.nombre">
                  <td  class="text-center">{{viaje.codigo}}</td>
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
                      <button class="btn btn-modificar" id="modificar" @click="getViaje(viaje.id)" type="button" data-bs-toggle="modal" data-bs-target="#editModal">&#9998;</button>
                  </td>
                  <td class="text-center"><button class="btn btn-modificar" id="borrar" type="button" @click="mensajeBorrarViaje(viaje.id)">&#128465;</button></td>
              </tr>
          </tbody>
          </table>
        </div>
        </div>
    </div>
  
  
        
    <!-- Modal Editar viaje-->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modificar Viaje</h1>
            <h1 class="modal-title fs-5" id="exampleModalLabel">{{  }}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="form" @submit.prevent="mensajeEditarViaje()">
              <label for="code-obj" class="form-label">Código</label>
              <input type="text" class="form-control" v-model="mostrarViaje.codigo" disabled>
              <label for="name-obj" class="form-label">Nombre</label>
              <input type="text" class="form-control" v-model="mostrarViaje.nombre">
              <label for="state-obj" class="form-label">Estado (ingresa true o false)</label>
              <input type="text" class="form-control" v-model="mostrarViaje.estado">
              <label for="price-obj" class="form-label">Precio</label>
              <input type="text" class="form-control" v-model="mostrarViaje.precio">
              <label for="duration-obj" class="form-label">Duración</label>
              <input type="text" class="form-control" v-model="mostrarViaje.duracion">
              <label for="description-obj" class="form-label">Descripción</label>
              <input type="text" class="form-control" v-model="mostrarViaje.descripcion">
              <label for="capacity-obj" class="form-label">Cupos</label>
              <input type="text" class="form-control" v-model="mostrarViaje.cupos">
              <label for="enrolled-obj" class="form-label">Inscritos</label>
              <input type="text" class="form-control" v-model="mostrarViaje.inscritos">
              <label for="img-obj" class="form-label">Imagen</label>
              <input type="text" class="form-control" v-model="mostrarViaje.img">
              <div class="modal-footer">
                <button type="button" class="btn btn-cancelar" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-modificar ms-2 p-2" data-bs-dismiss="modal" >Modificar</button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div> 
  
    <!-- Modal crear viaje -->

    <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Crear nuevo destino</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
        
            <form class="form" @submit.prevent="confirmaAgregarViaje()">
              <label for="code-obj" class="form-label" >Código</label>
              <input type="text" class="form-control" v-model="agregarViaje.codigo">
              <label for="name-obj" class="form-label">Nombre</label>
              <input type="text" class="form-control" v-model="agregarViaje.nombre">
              <label for="state-obj" class="form-label">Estado (ingresa true o false)</label>
              <input type="text" class="form-control" v-model="agregarViaje.estado">
              <label for="price-obj" class="form-label">Precio</label>
              <input type="text" class="form-control" v-model="agregarViaje.precio">
              <label for="duration-obj" class="form-label">Duración</label>
              <input type="text" class="form-control" v-model="agregarViaje.duracion">
              <label for="description-obj" class="form-label">Descripción</label>
              <input type="text" class="form-control" v-model="agregarViaje.descripcion">
              <label for="capacity-obj" class="form-label">Cupos</label>
              <input type="text" class="form-control" v-model="agregarViaje.cupos">
              <label for="enrolled-obj" class="form-label">Inscritos</label>
              <input type="text" class="form-control" v-model="agregarViaje.inscritos">
              <label for="img-obj" class="form-label">Imagen</label>
              <input type="text" class="form-control" v-model="agregarViaje.img">
              <div class="modal-footer">
                <button type="button" class="btn btn-cancelar " data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-crear ms-2 py-2" data-bs-dismiss="modal" >Crear</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </template>
      
      <script>
      import Swal from 'sweetalert2'
      import {mapActions, mapState} from 'vuex';
      
      export default {
        name: 'AdminTable',
        setup(){
          return{
            agregarViaje: {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''},
            idBorrarViaje: '',
            texto : '',    
          }
        },
          methods: { 
            formulario() {
              this.$store.dispatch('filtroName', this.texto)
          },
            ...mapActions(['getViajes', 'getViaje', 'crearViaje', 'modificarViaje','eliminarViaje', 'filtroName']),
  
          // SweetAlert para agregar viaje
  
            confirmaAgregarViaje(){
              Swal.fire({
                title: '¿Estás seguro de crear este viaje?',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('¡Listo! El viaje ha sido creado exitosamente ', '', 'success')
                  this.crearViaje(this.agregarViaje)
                  this.getViajes();
                  this.resetearViaje(this.agregarViaje)
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              })
            },
  
            // SweetAlert para borrar destino
  
            mensajeBorrarViaje(elemento){
              Swal.fire({
                title: '¿Estás seguro de borrar este viaje?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'rgb(255,142,1)',
                cancelButtonColor: 'rgba(3, 221, 182, .5)',
                confirmButtonText: 'Si, Borrar'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Listo!',
                    'Este destino ha sido eliminado exitosamente.',
                    'success'
                  )
                  this.idBorrarViaje =  elemento;
                  this.eliminarViaje(this.idBorrarViaje);
                  this.getViajes();
                }
              })
            },
            
            // SweetAlert para editar viaje
  
            mensajeEditarViaje(){
              Swal.fire({
                title: '¿Estás seguro de los cambios realizados?',
                showCancelButton: true,
                confirmButtonText: 'Confirmar',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('¡Listo! El viaje ha sido modificado exitosamente ', '', 'success')
                  this.getViajes() 
                  this.modificarViaje(this.mostrarViaje)
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
              })
            },
  
            // Función para limpiar campos de formulario
  
            resetearViaje(){
              this.agregarViaje =  {codigo: '', nombre: '', estado: '', precio: '', duracion: '', descripcion: '', cupos: '', inscritos: '', img: ''}
            },
  
  
          },
  
          computed : {
            ...mapState(['viajes', 'viajesFiltrados', 'mostrarViaje', 'agregarViaje' ]),
            rankingViajes() {
              const rankingViajes = [...this.viajesFiltrados];  
              rankingViajes.sort((a, b) => b.inscritos - a.inscritos);
              return rankingViajes;
            },
          },  
          
        }
  
  
      </script>
      
      <style>
        #searchContainer{
          margin: 0;
          padding: 0;
          width: 92%;
        }

        #card-img-top{
          max-width: 8rem;
          height: 60px;
          }
  
        .container{
          font-family: 'Montserrat', sans-serif;
        }
  
        .tituloAdmin{
          padding-top: 4em;
          color: #000;
          text-align: center;
          font-size: 1em ;
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

        #input-search{
          font-size: .7em;
        }
  
        .btn.btn-crear,.btn.btn-modificar{
                background-color: rgba(3, 221, 182, .5);
                color: azure;
                font-family: 'Montserrat', sans-serif;
                margin: 0;
            }
            .btn.btn-crear:hover,.btn.btn-modificar:hover{
                background-color: rgba(255,142,1,.7);
                color: azure;
            }
            .btn.btn-cancelar,.btn.btn-agregar{
                background-color: rgba(3, 221, 182, .5);
                color: azure;
                font-family: 'Montserrat', sans-serif;
                font-size: .92em;
            }
            
            .btn.btn-buscar{
              border: 3px solid rgba(255,142,1,.7);
              font-size: .9em;
            }

            .btn.btn-agregar{
                background-color: rgb(255,142,1);
                color: azure;
                padding: .4em .7em;
            }
  
            .btn.btn-cancelar:hover,.btn.btn-agregar:hover,.btn.btn-buscar:hover{
                background-color: rgba(255,142,1,.7);
                color: azure;
            }
  
            .btn.btn-agregar:hover{
                background-color: rgba(255,142,1,.7);
                color: azure;
            }
  
            .btn.btn-eliminar{
                background-color: rgba(3, 221, 182, .5);
                color: azure;
            }
            .btn.btn-eliminar:hover{
                background-color: rgba(3, 221, 182, .8);
                color: azure;
            }
        
        /* RESPONSIVE DESIGN -> Media Queries*/

      @media screen and (min-width: 650px){

        #searchContainer{
          width: 100%;
        }

        #input-search{
          font-size: 1em;
        }

        .btn.btn-agregar{
          padding: .2em 0;
          font-size: 1em;
        }

        .tituloAdmin{
          padding-top: 6rem;
          padding-bottom: 2em;
          font-size: 1.5em
        }
      }

      /* RESPONSIVE DESIGN -> Media Queries*/

      @media screen and (min-width: 1000px){

        .btn.btn-agregar{
          padding: 1em 1em;
          font-size: 1em;
        }

      }

      @media screen and (min-width: 1300px){
        .contenedorTabla{
          margin-bottom: 3em;
        }
       
        
      }

      
            
      
      </style>
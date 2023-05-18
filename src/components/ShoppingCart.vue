<template>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Mi Carrito</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ta ble class="table table-bordered">
                <thead class=" table-info">
                <tr class="align-items-center">
                    <th scope="col">Producto</th> 
                    <th scope="col">Cant</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">A</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="carro in carrito" :key="carro.cantidad">
                        <td>{{carro.nombre}}</td>
                        <td class="cantidad">
                            <div class="suma">{{carro.cantidad}}</div>
                            <IconCirclePlus color="#e15343" :size="20" stroke-width="2" @click="agregar(carro)" />
                            <IconCircleMinus color="#66d767" :size="20" stroke-width="2"  @click="restar(carro)" />                        
                        </td>
                        <td>${{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(carro.precio)}}</td>
                        <td><IconTrash color="#000000" :size="20" stroke-width="2"  @click="eliminar(carro)" /></td>
                    </tr>
                </tbody>
        </ta>
        <div class="summary mt-5 ms-3">
            <p>Total: $ {{new Intl.NumberFormat('ES', {style: 'currency', currency: 'clp' }).format(valores)}}</p>
        </div> 
        <div class="d-grid gap-2 col-10 mx-auto mt-5">
            <button class="btn btn-outline-info" id="btnLimpiarCarrito" type="button" @click="limpiarCarro(carrito)">Limpiar mi Carrito</button>

            <button class="btn btn-primary" id="btnFinalizaCompra" type="button" v-if="carrito.length != 0" @click="finalizaCompra(carrito)"> Finalizar mi compra </button>
            <!-- <button class="btn btn-success" type="button" @click="finalizaCompra(carrito)"> Finalizar mi compra </button> -->
            
        </div> 
      </div>
    </div>

</template>

<script>
import { IconCirclePlus } from '@tabler/icons-vue';
import { IconCircleMinus } from '@tabler/icons-vue';
import { IconTrash } from '@tabler/icons-vue';
import {mapState, mapMutations} from 'vuex'

export default {

    components: {
        IconCirclePlus,
        IconCircleMinus,
        IconTrash
        
    },
    computed: {
    ...mapState(['carrito']),
    ...mapState(['valores'])    
    },

    methods: {
    
    ...mapMutations(['agregar']),
    ...mapMutations(['restar']),
    ...mapMutations(['eliminar']),
    ...mapMutations(['limpiarCarro']),
    ...mapMutations(['finalizaCompra']),

}}

</script>


<style scoped>
.cantidad {
    display: flex;
}
.controlador{
    width: 70px;
    margin-left: 15px;
    margin-right: 15px;
}
.suma{
    margin-left: 10px;
    margin-right: 10px;
}

#btnLimpiarCarrito{
    border: 1px solid rgba(3, 221, 182, .5);
    color: black;
}

#btnLimpiarCarrito:hover{
    background-color: rgba(3, 221, 182, .1);
}

#btnFinalizaCompra{
    background-color: rgba(3, 221, 182, .5);
    border: 1px solid rgba(3, 221, 182, .5);
    color: black;
}

#btnFinalizaCompra:hover{
    background-color: rgba(3, 221, 182, .9);
}

</style> 
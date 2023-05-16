<template>
  <div class="container">
    <form @submit.prevent="sendEmail">
      <label>Name</label>
      <input
        type="text"
        v-model="name"
        name="name"
        placeholder="Your Name"
        required
      >
      <label>Email</label>
      <input
        type="email"
        v-model="email"
        name="email"
        placeholder="Your Email"
        required
      >
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30" rows="5"
        placeholder="Message"
        required
      ></textarea>

      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';
import { ref } from 'vue'

export default {
  name: 'ContactUs',
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');

    const sendEmail = () => {
      const templateParams = {
        from_name: name.value,
        from_email: email.value,
        message: message.value
      };

      const recipients = [{ email: email.value }];

      const promises = recipients.map((recipient) => {
        return emailjs.send(
          'service_wubs2yb',
          'template_lgza3ga',
          templateParams,
          '5RPWfUi2zqkXyARo_',
          recipient.email
        );
      });

      Promise.all(promises)
        .then(() => {
          console.log('Emails sent successfully!');
          envioDeEmail();
          resetForm();
        })
        .catch((error) => {
          console.error('Error sending emails:', error);
        });
    };

    const resetForm = () => {
      name.value = '';
      email.value = '';
      message.value = '';
    };

    const envioDeEmail = () => {
      let timerInterval
      Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    };

    return {
      name,
      email,
      message,
      sendEmail,
      resetForm,
      envioDeEmail
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>






<!-- <template> -->

    <!-- Datos para compra -->
    <!-- <section class="section">
        <h2 class="section__title">Datos de Envío</h2>
        <p class="section__text">Ingresa aquí tus datos de envío para poder finalizar tu compra</p>

        <form class="form">
            <input id="form-fullname" class="form__input" name="nombre" type="text" placeholder="Nombre completo">
            <input id="form-email" class="form__input" name="email" type="email" placeholder="Email"> 
            <input id="form-phone" class="form__input" name="telefono" type="text" placeholder="Teléfono">
            <input id="form-address" class="form__input" name="direccion" type="text" placeholder="Dirección">
            <input id="form-comuna" class="form__input" name="comuna" type="text" placeholder="Comuna">
            <input id="form-region" class="form__input"  name="region" type="text" placeholder="Región">

            <textarea id="form-text" class="form__textarea" rows="3" placeholder="Agrega Detalles de tu envío si es necesario" name="detalles"></textarea>
            <button id="form-submitcart" type="button" name="submit" class="button form__button button--primary js-scroll fade-in">Enviar
            <ion-icon name="send-outline" class="form__icon" role="img" aria-label="send outline"></ion-icon>
            </button>
        </form>        
    </section>

</template> -->

<!-- <script> -->

<!-- // Crear Tabla de Datos -->

<!-- const body = document.querySelector("body")
const table = document.createElement("table")
const detalle = document.createElement("div")
table.style.borderCollapse = "collapse"; -->

<!-- // Montos de Precio en LStorage -->
<!-- let valores= JSON.parse(localStorage.getItem('valoresFinales'));
// Productos en LStorage
let carrito = JSON.parse(localStorage.getItem('carrito')); -->


<!-- 
let BORDES_DE_TABLA = "1px solid black";
let PADDING_DE_TABLA = "0.5em";
let POSICION_PARA_HEADINGS = 0;
let POSICION_INICIAL_ARREGLO = 0;
let POSICION_FINAL_ARREGLO = carrito.length - 1;

function crearHeadings(arreglo, posicion, tabla) {
    const headings = document.createElement("tr");
    const arregloRecorrido = arreglo[posicion];
    Object.keys(arregloRecorrido).forEach(element => {
        const th = document.createElement("th");
        th.textContent = element.toUpperCase();
        th.style.border = BORDES_DE_TABLA;
        th.style.padding = PADDING_DE_TABLA;
        headings.appendChild(th)
    });
    tabla.appendChild(headings)
}; -->

<!-- 
function crearContenido(arreglo, posicionInicial, tabla) {
    const contenidos = document.createElement("tr");
    const arregloRecorrido = arreglo[posicionInicial];
    Object.values(arregloRecorrido).forEach(element => {
        const td = document.createElement("td");
        td.textContent = element;
        td.style.border = BORDES_DE_TABLA;
        td.style.padding = PADDING_DE_TABLA;
        contenidos.appendChild(td)
    });
    tabla.appendChild(contenidos)
}

function iterarCreacion(desdePosicion, hastaPosicion, arreglo, tabla) {
    for (let i= desdePosicion; i <= hastaPosicion; i++) {
        crearContenido(arreglo, i , tabla)
    }
}

function crearDatoContacto(key, value, objetivo) {
    const dato = document.createElement("p");
    dato.textContent = `${key}: ${value}`;
    objetivo.appendChild(dato)
}

function crearDatoPago(key, value, objetivo) {
    const dato = document.createElement("p");
    const cifra = document.createElement("strong");
    dato.textContent = `${key}: `;
    cifra.textContent = value;
    dato.appendChild(cifra);
    objetivo.appendChild(dato)
}

function actualizarTabla(contenido, tabla) {
    tabla.replaceChildren();
    contenido.replaceChildren();
    POSICION_FINAL_ARREGLO = carrito.length - 1;
    valores= JSON.parse(localStorage.getItem('valoresFinales'));
    carrito = JSON.parse(localStorage.getItem('Carrito'));
    crearHeadings(carrito, POSICION_PARA_HEADINGS , table);
    iterarCreacion(POSICION_INICIAL_ARREGLO, POSICION_FINAL_ARREGLO, carrito, table);
}

// Enviar Correo


const serviceID = "service_wubs2yb";
const templateID = "template_lgza3ga";
const publicKey = "5RPWfUi2zqkXyARo_";


function enviarEmail(){
    console.log("se envio")
    actualizarTabla(detalle, table);
    crearDatoPago("", "", detalle);
    crearDatoPago("Subtotal", valores[0].Subtotal, detalle);
    crearDatoPago("Impuestos", valores[0].Impuestos, detalle);
    crearDatoPago("Total", valores[0].Total, detalle);
    crearDatoContacto("", "", detalle);
    crearDatoContacto("Nombre",inputFullname.value, detalle);
    crearDatoContacto("Email",inputEmail.value, detalle);
    crearDatoContacto("Dirección",inputAddress.value, detalle);
    crearDatoContacto("Comuna",inputComuna.value, detalle);
    crearDatoContacto("Region",inputRegion.value, detalle);
    crearDatoContacto("Texto",inputText.value, detalle);
    table.appendChild(detalle);

    let templateParams = {
        to_name: inputFullname.value,
        from_name: "Cachureando Store",
        to_email: inputEmail.value,
        my_html: table.innerHTML
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(function() {
        alert('El comprobante se ha enviado correctamente a tu email');
    }, function(error) {
        alert('Ha fallado el envío del comprobante...', error);
    });    
}



</script>


<style>
.form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  width: 70%;
  margin: 2em auto;
}

.form__input, .form__textarea {
  width: 100%;
  border: 1px solid #dee2e6;
  padding: 0.75em;
  box-sizing: border-box;
  border-radius: 5px;
}

.form__button {
  padding: 1em;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 768px) {
  .form {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
  .form__textarea {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .form__button {
    width: 70%;
    margin: 0;
  }
}

</style> -->
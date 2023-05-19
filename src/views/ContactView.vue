
 <template>
   <section class="section">
        <h2 class="section__title mt-3">Formulario de contacto</h2>
        <p class="section__text mb-4">Proporciona tus datos para comunicarnos contigo</p>

        <form class="form" @submit.prevent="sendEmail">
            <input id="form-fullname" class="form__input" name="nombre" type="text" placeholder="Nombre completo" v-model="name" required>
            <input id="form-email" class="form__input" name="email" type="email" placeholder="Email" v-model="email" required> 
            <input id="form-phone" class="form__input" name="telefono" type="text" placeholder="Whatsapp" v-model="number" required>

            <textarea id="form-text" class="form__textarea" rows="3" placeholder="Déjanos tu comentario" name="detalles" v-model="message" required></textarea>
            <button id="form-submitcart" type="submit" name="submit" class="button form__button button--primary js-scroll fade-in">Enviar
            <ion-icon name="send-outline" class="form__icon" role="img" aria-label="send outline"></ion-icon>
            </button>
        </form>        
    </section>

</template> 

 <script>
  import Swal from 'sweetalert2'
  import emailjs from 'emailjs-com';
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';

  export default {
    name: 'ContactUs',
    setup() {
      const name = ref('');
      const email = ref('');
      const number = ref('');
      const message = ref('');
      const router = useRouter();

  
      const sendEmail = () => {
        const templateParams = {
          from_name: name.value,
          from_email: email.value,
          from_number: number.value,
          message: message.value,
    
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
            console.log('Correo enviado exitosamente!');
            envioDeEmail();
            resetForm();
          })
          .catch((error) => {
            console.error('Error al enviar correo:', error);
          });
      };
  
      const resetForm = () => {
        name.value = '';
        email.value = '';
        email.number = '';
        message.value = '';
      };
  
      const envioDeEmail = () => {
        let timerInterval
        Swal.fire({
          title: 'Correo enviado exitosamente',
          html: 'Te redirigiremos al inicio ',
          timer: 3000,
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
          router.push('/')
          if (result.dismiss === Swal.DismissReason.timer) {
          }
        })
      };
  
      return {
        name,
        email,
        number,
        message,
        sendEmail,
        resetForm,
        envioDeEmail
      }
    },
  }



</script>


<style>
.section{
  height: 60vh;
  padding: 6em 0 0 0;
  margin: 0 0 9em 0;
  text-align: center;
}

.section__title{
  font-size: 1em;
}

.section__text{
  font-size: .7em;
}

.form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1em;
  width: 70%;
  margin: 2em auto;
  font-size: .7em;
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
  border: 2px solid rgba(3, 221, 182, .9);
  border-radius: 7px;
}

.form__button:hover{
  background-color: rgba(3, 221, 182, .9);
  color: white;

}

@media screen and (min-width: 650px) {
  .form {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    font-size: .9em;
  }

  .section__title{
  font-size: 1.5em;
  }

  .section__text{
    font-size: 1em;
  }

  #form-fullname{
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .form__textarea {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .form__button {
    width: 70%;
    margin: 0;
  }

/* RESPONSIVE DESIGN -> Media Queries*/


  @media screen and (min-width: 1000px){

    .section{
      padding: 9em 0 0 0;
      margin: 0 0 14em 0;
      text-align: center;
    }

    .form{
      max-width: 60%;
    }

  }


}

</style>

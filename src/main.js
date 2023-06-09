import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import store from './store'
import './assets/main.css'

const vuetify = createVuetify({
  components,
  directives,
})

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')

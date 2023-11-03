/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@/styles/styles.scss'
import '@core/scss/index.scss'
import { createApp } from 'vue'
import store from './store'


const app = createApp(App)

loadFonts()

app.use(vuetify)
app.use(router)
app.use(store)
app.mount('#app')

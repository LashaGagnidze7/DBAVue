import {createApp} from 'vue'
// import the root component App from a single-file component.
import AppTemp from './components/AppTemp.vue'

const app = createApp(AppTemp)
app.mount('#app')

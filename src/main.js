import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'v-calendar/style.css';
import VCalendar from 'v-calendar';
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

const app = createApp(App);
app.use(router);
app.use(VCalendar);
app.use(createVfm());

app.mount('#app');
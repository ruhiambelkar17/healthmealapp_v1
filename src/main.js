import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/shared/NavBar.vue'

// createApp(App).mount('#app')

const app = createApp(App)

app
    .component('App', App)
    .component('NavBar', NavBar)
    

app.mount('#app')

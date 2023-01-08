import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router'
import GalleryComp from './components/GalleryComp.vue'
import HomeComp from './components/HomeComp.vue'
import OrderComp from './components/OrderComp.vue'
import AboutComp from './components/AboutComp.vue'
import ContactComp from './components/ContactComp.vue'
import NavComp from './components/UI/NavbarComp.vue'
import DialogBox from './components/UI/DialogComp.vue'
import FooterComp from './components/UI/FooterComp.vue'




const app =createApp(App);
const router= createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', component:HomeComp},
        {path:'/Gallery', component:GalleryComp},
        {path:'/Order', component:OrderComp},
        {path:'/About', component:AboutComp},
        {path:'/Contact', component:ContactComp},
       // {path:'/GalleryComp', component:GalleryComp},
        
    ]
})


app.use(router);

app.component('gallery-comp',GalleryComp);
app.component('order-comp',OrderComp);
app.component('about-comp',AboutComp);
app.component('contact-comp',ContactComp);
app.component('home-comp',HomeComp);
app.component('nav-comp',NavComp);
app.component('dialog-box',DialogBox);
app.component('footer-comp',FooterComp);


app.mount('#app');

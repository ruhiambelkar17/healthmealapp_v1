<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/': Home,
  '/About': About,
  '/Gallery': Gallery
}

export default {
  name: 'App',
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>

<template>
  <component :is="currentView" />
</template>

<style>
.img_container img {
  width: 100%;
  height: 500px;
  display: block;
  margin-left: auto;
  margin-right: auto;

}

/*  Text on img slider*/
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  animation: fadeIn 6s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fadein {

  opacity: 0;

}

.fadeonload {
  opacity: 0;
}

.about_hm {}

.about_hm hr {
  width: 2cm;
  height: 2px;
  background-color: red;
}

#about_hm_data {
  text-align: center;
  padding-top: 80px;

}

.about_hm img {
  border: 5px solid white;
}



.imp_info {}

#imp_info_data {

  padding-top: 80px;
  /*animation: fadeIn 10s;*/
}

/*@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}*/

#imp_info_data ul {
  justify-content: center;
}

#imp_info_data h1 {

  text-align: center;
}

.imp_info hr {
  width: 2cm;
  height: 2px;
  background-color: red;
}

.imp_info img {
  border: 5px solid white;
}

.sp_menu {
  background-color: rgb(235, 235, 235);
  text-align: center;
  height: 80px;
  font-size: 48px;
}

hr {
  background-color: aliceblue;
}

.card_container {

  display: flex;
  flex-direction: row;

  justify-content: center;

}

.card_container p {
  padding-top: 20px;
  text-align: center;
}

.card {

  width: 250px;
  height: 300px;

}

.card img {
  width: 100%;
  height: 80%;
  justify-content: center;
}
</style>
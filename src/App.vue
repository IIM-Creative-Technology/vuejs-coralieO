<template>
  <div id="app">
      <div id="nav">
         <div>
           <router-link to="/admin">Gérer le blog |</router-link> 
           <router-link to="/Blog">Blog |</router-link>
           <router-link to="/Login">Login </router-link>
        </div>
         <button id="cree" type="submit">Créer une page</button>
      
     </div>
      <!-- <router-view/> -->
    <main>  
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#cree{
    position: relative;
    left: 56%;

}

</style>
<script>
export default {
  name: 'app',
  components:{
  },
  data () {
    
  }
}

</script>

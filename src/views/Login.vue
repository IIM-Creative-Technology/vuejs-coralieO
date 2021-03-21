<template>
  <div class="Login">
    <h1>CONNEXION</h1>
   <form >
     <div>
       <label for="mail">e-mail : </label>
       <input type="text" name="mail" id="mail">
     </div>
     <div>
       <label for="password">Mot de passe : </label>
       <input type="password" name="password" id="password">
     </div>
     <div class="button">
       <button type="submit">
         <router-link to="/Admin">SE CONNECTER</router-link>
       </button>
     </div>
   </form>

   <h2>Pas encore de compte? <router-link to="/Inscription"> S'inscrire </router-link> </h2>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

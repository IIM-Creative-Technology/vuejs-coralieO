<template>
  <div class="Login">
     <form action="" method="POST">
                    <h1>Connexion</h1><!--titre-->
                     <div>
                        <label for="mail">e-mail :</label><!--deuxième paramètre-->
                        <input type="email" id="mail" name="use_mail"  placeholder="Loacoco@gmail.com">
                    </div>
                    <div>
                        <label for="password">Mot de passe :</label><!--premier paramètre-->
                        <input type="password" id="password" name="password" >
                    </div>
                   
                    <div class="button">
                        <button type="submit"><router-link to="/admin"> SE CONNECTER</router-link></button>
                    </div>
      </form>

    <h2>Pas encore de compte? <router-link to="/admin"> S'inscrire</router-link></h2>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

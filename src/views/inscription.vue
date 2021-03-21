<template>
<div id="Inscription">
    <form  @submit.prevent="Inscription">
     <h1>CONNEXION</h1>
     <div>
       <label for="mail">e-mail : </label>
       <input type="text" name="mail" id="mail" v-model="mail">
     </div>
     <div>
       <label for="password">Mot de passe : </label>
       <input type="password" name="password" id="password" v-model="password">
     </div>
     <div>
       <label for="password_confirm">Confirmer mot de passe : </label>
       <input type="password" name="password_confirm" id="password_confirm" v-model="password_confirm">
     </div>
      <div class="button">
        <button type="submit" >Inscription</button>
      </div>
      <div>
          <button type="submit"><router-link to="/Login"> CONNECTEZ VOUS</router-link></button>
      </div>
   </form>

                   
 

</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Inscription',
    data(){
        return {
           mail : "",
           password : "",
           password_confirm: "",
        }
    },
    methods: {
    async Inscription(){
      const data =  await axios.post('Inscription', {
           mail : this.mail,
           password : this.password,
           password_confirm: this.password_confirm
       });
     console.log(data);
    }
    }
}
</script>
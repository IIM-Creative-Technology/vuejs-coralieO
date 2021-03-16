<template>
<div id="inscription">
    <form action="" method="POST">
                    <h1>INSCRIPTION</h1><!--titre-->
                    <div>
                        <label for="name">Nom :</label><!--premier paramètre-->
                        <input type="text" id="name" name="user_name" placeholder="Loa">
                    </div>
                    <div>
                        <label for="first_name">Prénom :</label><!--premier paramètre-->
                        <input type="text" id="name" name="user_name" placeholder="Coco">
                    </div>
                    <div>
                        <label for="mail">e-mail :</label><!--premier paramètre-->
                        <input type="email" id="mail" name="user_mail"  placeholder="Loacoco@gmail.com">
                    </div>
                    <div>
                        <label for="password">Mot de passe :</label><!--premier paramètre-->
                        <input type="password" id="password" name="password" >
                    </div>
                   
                    <div class="button">
                        <button type="submit" ><router-link to="/admin"> INSCRIPTION </router-link></button>
                    </div>
    </form>

</div>
</template>
<script>
export default {
    name: 'inscription'
}
</script>
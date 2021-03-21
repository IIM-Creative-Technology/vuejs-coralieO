<template>
  <div class="NewPage">
      <h1>
        Créer une nouvelle page de blog
    </h1>
    <form action="" method="post">
        <section class="haut_formulaire">
        <section class="input">
            <label for="title">titre de la page</label>
                <input type="text" name="title" id="title">
            <label for="titleM">Meta title</label>
                <input type="text" name="titleM" id="titleM">
            <label for="description">Meta description</label>
                <input type="text" name="description" id="description">
        </section>
        <section class="ajout_img">
            <div><img src="" alt=""></div>
            <h2>Modifier une image</h2>
        </section>
        <section class="text">
            <label for="post">Corps du post</label>
            <textarea name="post" id="post" cols="30" rows="10"></textarea>
        </section>
        <button type="submit">Valider les modifications</button>
    </section>
    </form>
  </div>
</template>

<script>


export default {
  name: 'NewPage',
  components: {
    HelloWorld
  }
}
</script>

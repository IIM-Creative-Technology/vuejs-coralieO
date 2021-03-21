<template>
  <div class="NewPage" @New="addArticle"  >
      <h1>
        Créer une nouvelle page de blog
    </h1>
    <form >
        <section class="haut_formulaire">
        <section class="input">
            <label for="title">titre de la page</label>
                <input type="text" name="title" id="title" v-model="title">
            <label for="titleM">Meta title</label>
                <input type="text" name="titleM" id="titleM" v-model="titleM">
            <label for="description">Meta description</label>
                <input type="text" name="description" id="description" v-model="description">
        </section>
        <section class="ajout_img">
            <div><img :src="img_url" alt=""></div>
            <button type="file" @click="sendImg">Ajouter une image</button>
        </section>
        <section class="text">
            <label for="post">Corps du post</label>
            <textarea name="post" id="post" cols="30" rows="10" v-model="post"></textarea>
        </section>
        <button type="submit"  @click="submitNewPage">Créer la page</button>
    </section>
    </form>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex"
export default {
  name: 'NewPage',
  props: ['articles'],
 data () {
      return {
       article: {
            title: '',
            titleM: '',
            description: '',
            img_url: '',
            post: '',
          }
      }
    },
 methods: {
       
      submitNewPage() {
        if (this.article.title != '' ||  this.article.titleM != '' || this.article.description != '' || this.article.post != '') {
          this.$emit('New',this.article.title,this.article.titleM,this.article.description,this.article.post)
        }
        this.article.title = '',
        this.article.titleM = '',
        this.article.description = '',
        this.article.post = ''
      },
      ...mapActions(['addArticle']),
},
  computed: {
    ...mapState(['articles'])
  }
}
</script>

<template>
  <div class="AdminPage">
     <article>
            <div><img :src="img_url" alt=""></div>
            <p></p>
            <div>
                <button type="submit" @click="check">Editer</button>
                <button  @click="del">Supprimer</button>
            </div>
        </article>
  </div>
</template>

<script>

// import { mapActions, mapState } from "vuex"
export default {
  name: 'AdminPage',
  props: ['articles'],
  data(){
    this.articles
  },
  methods: {
      check(index) {
        this.$emit('check', index)
      },
      del(index) {
        this.$emit('remover', index)
      }
  },   
  components: {
   
  }
}
</script>

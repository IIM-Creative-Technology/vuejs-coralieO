<template>
  <div class="Blog" @New="addArticle">
      <h1>Articles</h1>
     <article v-for="description in articles" :key="description">
            <div><img :src="img_url" alt=""></div>
            <p>{{description}}</p>
        </article>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex"
export default {
  name: 'Blog',
  props: ['articles'],
  data(){
   
  },
  methods: {
       ...mapActions(['addTask'])
  },   
  computed: {
    ...mapState(['articles'])
  }
}
</script>
<style>

</style>
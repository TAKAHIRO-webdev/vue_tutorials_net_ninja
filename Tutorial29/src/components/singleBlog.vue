<template>
 <div id="single-blog">
  <h1>{{ blog.title }}</h1>
  <article>{{ blog.content }}</article>
  <p>Author: {{ blog.author }}</p>
  <ul>
    <li v-for="(category, key) in blog.categories" :key="key">{{ category }}</li>
  </ul>
 </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      blog: {

      }
    }
  },
  created() {
    this.$http.get('https://taka-vue-ninja-20220801-default-rtdb.firebaseio.com/posts/' + this.id + '.json').then(function(data){
      return data.json();
    }).then(function(data){
      this.blog = data;
    });
  },
}

</script>
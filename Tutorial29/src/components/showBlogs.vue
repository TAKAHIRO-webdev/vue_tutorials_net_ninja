<template>
  <div v-theme:column="wide" id="show-blogs">
   <h1>All Blog Articles</h1> 
   <input type="text" v-model="search" placeholder="search blogs"/>
   <div v-for="(blog, key) in filteredBlogs" :key="key" class="single-blog">
    <router-link v-bind:to="'/blog/' + blog.id"></router-link> <h2>{{ blog.title | to-uppercase }}</h2>
     <article>{{ blog.body | snippet }}</article>
   </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';


export default {
    data() {
        return {
           blog: {
            title: "",
            content: "",
            categories: [],
            author: ""
          },
          blogs: [],
          search: ''
        };
    },
    methods: {

    },
    created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        this.blog = data.body.slice(0,10);
      });
    },
    computed: {

    },
    mixins: [searchMixin]
};
</script>


<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>

<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import addBlog from "./components/addBlog.vue";
// import showBlogs from "./components/showBlogs.vue";
// import listBlogs from "./components/listBlogs.vue";
// import listBlogs from "./components/listBlogs.vue";
import myHeader from "./components/myHeader.vue";

export default {
  components: {
    // 'add-blog':addBlog,
    // 'show-blogs':showBlogs,
    // 'list-blogs':listBlogs
    'app-header': myHeader
  },
    data() {
        return {
        };
    },
    methods: {

    }
};
</script>

<style scoped>
</style>

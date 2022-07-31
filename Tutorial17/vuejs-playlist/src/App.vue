<template>
  <div>
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyNinjas from "./components/MyNinjas.vue";

export default {
    components: {
      'app-header': MyHeader, 
      'app-footer': MyFooter,
      'app-ninjas': MyNinjas
    },
    data() {
        return {
            title: "Ninja apps",
        };
    },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>

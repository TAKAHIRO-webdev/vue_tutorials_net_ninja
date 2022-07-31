<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
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
            ninjas: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],
          title: "Vue Ninjas"
        };
    },
    methods: {
      updateTitle: function(updatedTitle){
        this.title = updatedTitle; 
        console.log("updateTitle");
      }
    }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>

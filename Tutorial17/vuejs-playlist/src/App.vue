<template>
  <div>
    <h1>{{ title }}</h1>
    <NinjaUsers></NinjaUsers>
  </div>
</template>

<script>
import NinjaUsers from "./NinjaUsers.vue";

export default {
    components: {
      'NinjaUsers': NinjaUsers
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

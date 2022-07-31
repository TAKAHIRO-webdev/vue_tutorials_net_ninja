<template>
 <ul>
  <li v-for="(value, key) in NinjaUsers" :key="key">{{ value }}</li> 
 </ul>
</template>

<script>
export default {
  data() {
    return {
      NinjaUsers: ['Yoshi', 'Mario', 'Ryu']
    };
  }
};
</script>

<style></style>

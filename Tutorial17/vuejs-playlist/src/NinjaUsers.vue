<template>
<div>
   <h1>List of ninjas</h1>
   <ul>
    <li v-for="(value, key) in NinjaUsers" :key="key">{{ value }}</li> 
   </ul>
 </div>
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

<style scoped>
h1{
  color: green 
}

</style>

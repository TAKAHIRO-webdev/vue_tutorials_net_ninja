new Vue({
  el: '#vue-app',
  data: {
    age: 20,
    a: '',
    b: ''
  },
  methods: {
    // addToA: function(){
    //   console.log('addToA')
    //   return this.a + this.age
    // },
    // addToB: function(){
    //   console.log('addToB')
    //   return this.b + this.age
    // }
  },
  computed: {
    addToA: function(){
      console.log('addToA')
      return this.a + this.age
    },
    addToB: function(){
      console.log('addToB')
      return this.b + this.age
    }
  }
});
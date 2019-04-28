<template>
  <div class="hello">
    <h1 v-if="count === 1">Count is {{count}}</h1>
    <h1 v-else-if="count === 2">Count is 2</h1>
    <h1 v-else>{{ greeting }}</h1>
    <h2 v-show="count === 1">Count is {{count}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    greeting: String
  },
  data: function () {
    return {
      count: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

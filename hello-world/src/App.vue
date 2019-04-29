<template>
  <div id="root">
    <h1>
      <HelloWorld greeting="Hello World"/>
      <CatList cats/>
    </h1>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CatList from './components/CatList.vue'

export default {
  name: 'root',
  components: {
    HelloWorld,
    CatList
  },
  data: function () {
    return [
      cats
    ]
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

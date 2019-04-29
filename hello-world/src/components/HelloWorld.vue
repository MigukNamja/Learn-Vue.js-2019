<template>
  <div class="hello">
    {{ kittifyName }}
    <br>
    <input v-model="newCat" @keyup.enter="addKitty">
    <button @click="addKitty">
      + ADD
    </button>

    <ul>
      <li v-for="(cat, index) in cats" :key="index">
        {{ index }} : {{ cat.name | capitalize | kittify }}
      </li>
    </ul>
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
      count: 0,
      email: 'MigukNamja@gmail.com',
      cats: [
        { name: 'obi' },
        { name: 'dmitra' },
        { name: 'sam' },
        { name: 'boots' }
      ],
      newCat: ''
    }
  },
  methods: {
    addKitty: function () {
      this.cats.push({ name: this.newCat })
      this.newCat = ''
      return this.cats
    }
  },
  filters: {
    capitalize: function(value) {
      return value.toUpperCase()
    },
    kittify: function(value) {
      return value + 'y'
    }
  },
  computed: {
    kittifyName: function() {
      if (this.newCat.length > 1) {
        return this.newCat + 'y'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red {
  border: 2px solid red;
}
.green {
  border: 2px solid green;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: square;
  /* padding: 0; */
}
li {
  /* display: inline-block; */
  margin: 0px 10px;
}
a {
  color: #42b983;
}
</style>

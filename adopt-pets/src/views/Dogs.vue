<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs"></b-table>
  </div>
</template>

<script>
// The @ symbol is a shortcut to/for the 'src' directory
import dogs from '@/data/dogs'

export default {
  data () {
    return {
      dogs
    }
  }
}
</script>

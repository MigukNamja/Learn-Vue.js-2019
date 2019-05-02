<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table
      striped
      hover
      head-variant='dark'
      :items="cats"
    >
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
// The @ symbol is a shortcut to/for the 'src' directory
import { mapState } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>

<template>
  <div>
    <!-- We need to pass 'species' and 'pets' to the PetTable component.
    For species, we are passing "cats" as a string literal. When we don't pass species as a v-bind, the expression is not evaluated, which is what we want.
    When we use v-bind for pets, the expression is evaluated, so "cats" is the cats variable from our computed section -->
    <PetTable
      species="cats"
      :pets="cats"
    />
  </div>
</template>

<script>
// The @ symbol is a shortcut to/for the 'src' directory
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
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

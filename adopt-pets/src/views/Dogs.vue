<template>
  <div>
    <!-- We need to pass 'species' and 'pets' to the PetTable component.
    For species, we are passing "dogs" as a string literal. When we don't pass species as a v-bind, the expression is not evaluated, which is what we want.
    When we use v-bind for pets, the expression is evaluated, so "dogs" is the dogs variable from our computed section -->
    <PetTable
      species="dogs"
      :pets="dogs"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  components: {
    PetTable
  },
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>

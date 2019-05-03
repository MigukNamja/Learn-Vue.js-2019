<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend.</h1>
    {{ getAllCats.length }}
    <!-- {{ animalCount }} -->

    <button @click="togglePetForm" class="btn btn-primary">
      Add New Pet
    </button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      // Pet's name
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          type="text"
          v-model="form.name"
          required
          placeholder="Enter pet's name"
        ></b-form-input>
      </b-form-group>

      // Pet's species
      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          :options="['cats', 'dogs']"
          required
          v-model="form.species"
        ></b-form-select>
      </b-form-group>

      // Pet's age
      <b-form-group id="input-group-3" label="Pet's Age:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          v-model="form.age"
          required
          placeholder="Enter pet's age"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      showPetForm: false,
      form: {
        name: '',
        species: null,
        age: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'animalCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([ 'addPet' ]),
    togglePetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { name, species, age } = this.form
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      // reset the form after submitting
      this.form = {
        name: '',
        species: null,
        age: 0
      }
    }
  }
}
</script>

export default {
  animalCount: (state) => {
    return state.cats.length + state.dogs.length
  }
}

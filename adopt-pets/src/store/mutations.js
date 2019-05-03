// ACTIONS call MUTATIONS that update STATE
// actions --> mutations --> state
export default {
  appendPet: (state, { pet, species }) => {
    state[species].push(pet)
  }
}

// ACTIONS call MUTATIONS that update STATE
// actions --> mutations --> state

export default {
  // addPet: (context, pet) => {
  //   context.commit('appendPet', pet) // this will call a mutation
  // }
  addPet: ({ commit }, payload) => { // we only need context.commit, so we are pulling commit directly here
    commit('appendPet', payload) // this will call a mutation
  }
}

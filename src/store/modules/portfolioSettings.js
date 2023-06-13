const getDetfaultValues = () => {
  return {
    isEditMode: false
  }
}
const portfolioSettings = {
  namespaced: true,
  state: () => getDetfaultValues(),
  mutations: {
    setIsEditMode(state, new_state) {
      state.isEditMode = new_state
    }
  },
  getters: {
    getIsEditMode(state) {
      return state.isEditMode
    }
  },
  actions: {
    saveIsEditMode(context, payload) {
      context.commit('setIsEditMode', payload)
    }
  }
}

export default portfolioSettings

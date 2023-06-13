const getDetfaultValues = () => {
  return {
    isEditMode: false,
    documentId: '',
    input1: '',
    input2: '',
    input3: ''
  }
}
const ctaQuerry = {
  namespaced: true,
  state: () => getDetfaultValues(),
  mutations: {
    resetState(state, new_state) {
      state = getDetfaultValues()
    },
    setIsEditMode(state, new_state) {
      state.isEditMode = new_state
    },
    setDocumentId(state, new_state) {
      state.documentId = new_state
    },
    setInput1(state, new_state) {
      state.input1 = new_state
    },
    setInput2(state, new_state) {
      state.input2 = new_state
    },
    setInput3(state, new_state) {
      state.input3 = new_state
    }
  },
  getters: {
    getIsEditMode(state) {
      return state.isEditMode
    },
    getDocumentId(state) {
      return state.documentId
    },
    getInput1(state) {
      return state.input1
    },
    getInput2(state) {
      return state.input2
    },
    getInput3(state) {
      return state.input3
    }
  },
  actions: {
    saveAllData(context, payload) {
      context.commit('setInput1', payload.input1)
      context.commit('setInput2', payload.input2)
      context.commit('setInput3', payload.input3)
      context.commit('setDocumentId', payload.documentId)
    },
    updateEditMode(context, payload) {
      context.commit('setIsEditMode', payload)
    },
    resetAllData(context, payload) {
      context.commit('resetState')
    }
  }
}

export default ctaQuerry

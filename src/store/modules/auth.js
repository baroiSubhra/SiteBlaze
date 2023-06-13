const getDetfaultValues = () => {
  return {
    userName: '',
    userId: '',
    email: '',
    name: '',
    isVerified: false,
    isLoggedIn: false,
    sessionId: '',
    avatar: '',
    tids: [1, 2, 3]
  }
}

const auth = {
  namespaced: true,
  state: () => getDetfaultValues(),
  mutations: {
    setUserName(state, new_state) {
      state.userName = new_state
    },
    setEmail(state, new_state) {
      state.email = new_state
    },
    setAvatar(state, new_state) {
      state.avatar = new_state
    },
    setName(state, new_state) {
      state.name = new_state
    },
    setIsLoggedIn(state, new_state) {
      state.isLoggedIn = new_state
    },
    setIsVerified(state, new_state) {
      state.isVerified = new_state
    },
    setSessionId(state, new_state) {
      state.sessionId = new_state
    },
    setUserId(state, new_state) {
      state.userId = new_state
    }
  },
  getters: {
    getUserName(state) {
      return state.userName
    },
    getAvatar(state) {
      return state.avatar
    },
    getEmail(state) {
      return state.email
    },
    getName(state) {
      return state.name
    },
    getIsLoggedIn(state) {
      return state.isLoggedIn
    },
    getIsVerified(state) {
      return state.isVerified
    },
    getSessionId(state) {
      return state.sessionId
    },
    getUserId(state) {
      return state.userId
    },
    getTids(state) {
      return state.tids
    }
  },
  actions: {
    saveSingupData(context, payload) {
      if (payload.uid) {
        context.commit('setUserId', payload.uid)
      }
      if (payload.isVerified) {
        context.commit('setIsVerified', payload.isVerified)
      }
    },
    saveLoginData(context, payload) {
      if (payload.sessionId) {
        context.commit('setSessionId', payload.sessionId)
      }
      if (payload.uid) {
        context.commit('setUserId', payload.uid)
      }
    },
    saveUserName(context, payload) {
      context.commit('setUserName', payload)
    },
    saveAccountData(context, payload) {
      if (payload.uid) {
        context.commit('setUserId', payload.uid)
      }
      if (payload.email) {
        context.commit('setEmail', payload.email)
      }
      if (payload.name) {
        context.commit('setName', payload.name)
      }
    },
    saveUserId(context, payload) {
      context.commit('setUserId', payload)
    },
    saveAvatar(context, payload) {
      context.commit('setAvatar', payload)
    }
  }
}

export default auth

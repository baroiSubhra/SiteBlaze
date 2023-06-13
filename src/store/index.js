import { createStore } from 'vuex'
import auth from './modules/auth'
import addContent from './modules/addContent'
import portfolioSettings from './modules/portfolioSettings'
import ctaQuerry from './modules/ctaQuerry'
const store = createStore({
  modules: {
    auth,
    addContent,
    portfolioSettings,
    ctaQuerry
  }
})

export default store

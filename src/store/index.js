import Vue from 'vue'
import Vuex from 'vuex'
import drags from './modules/drags'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    drags
  }
})

export default store

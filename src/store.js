import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autenticado: false,
    usuario: {
      nome: ''
    }
  },
  getters: {
    getUsuario: (state) => state.usuario,
    isAutenticated: (state) => state.autenticado
  },
  mutations: {
    login (state, dadosUsuario) {
      state.usuario = dadosUsuario
      state.autenticado = dadosUsuario.nome !== ''
    },
    logout (state) {
      state.autenticado = false
      state.usuario = {
        nome: ''
      }
    }
  },
  actions: {

  },
  plugins: [
    createPersistedState({
      key: 'app-webproject',
      storage: window.localStorage
    })
  ]
})

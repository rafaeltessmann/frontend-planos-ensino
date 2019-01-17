import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Cadastro from './views/Cadastro.vue'
import Listagem from './views/Listagem.vue'
import Login from './views/Login.vue'
import Detalhes from './views/Detalhes.vue'
import CadastroPlano from './views/CadastroPlano.vue'
import Store from './store'

Vue.use(Router)

const rota = new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        },
        {
          path: '/cadastro',
          name: 'cadastro',
          component: Cadastro
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/listagem',
          name: 'listagem',
          component: Listagem
        },
        {
          path: '/detalhes/:id',
          name: 'detalhes',
          component: Detalhes
        },
        {
          path: '/cadastroplano',
          name: 'cadastroplano',
          component: CadastroPlano,
          meta: {
            auth: true
          }
        }
      ]
    }
  ]
})
rota.beforeEach((to, from, next) => {
  if (!to.meta.auth || Store.getters.isAutenticated) {
    next()
  } else {
    next({ path: '/login' })
  }
})
export default rota

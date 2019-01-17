<template>
<div>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header >
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="abreHome()"
          aria-label="Menu"
          icon="home"
          id="homeId"
        >
          <q-tooltip>
          Ir para a tela inicial
          </q-tooltip>
        </q-btn>
        <q-toolbar-title>
          Planos de Ensino
          <div slot="subtitle">IFSul Campus Camaquã 2018</div>
        </q-toolbar-title>
        <div class="align:right">
          <q-btn v-if="!estaLogado"
            flat
            dense
            aria-label="Menu"
            icon="person"
            label=" Entrar "
            id="entrarId"
          >
          </q-btn>
          <q-btn v-else
            flat
            dense
            aria-label="Menu"
            icon="person"
            :label="usuario.nome"
            id="nomeId"
          >
          </q-btn>
          <q-popover>
            <q-btn
              v-if="!estaLogado"
              flat
              dense
              aria-label="Menu"
              icon="how_to_reg"
              label="Login"
              id="loginId"
              @click="abreLogin()"
            />
            <q-btn v-else
                        flat
                        dense
                        aria-label="Menu"
                        icon="exit_to_app"
                        label="Sair"
                        id="sairId"
                        @click="fazerLogoff()"
                      >
            </q-btn>
            <br>
            <q-btn v-if="!estaLogado"
                        flat
                        dense
                        aria-label="Menu"
                        icon="person_add"
                        label="Cadastro"
                        id="cadastrarId"
                        @click="abreCadastro()"
                      >
            </q-btn>
          </q-popover>
        </div>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</div>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: '',
      userName: false
    }
  },
  computed: {
    usuario () {
      return this.$store.getters.getUsuario
    },
    estaLogado () {
      return this.$store.getters.isAutenticated
    }
  },
  methods: {
    openURL,
    abreLogin () {
      this.$router.push('/login')
    },
    abreHome () {
      this.$router.push('/')
      console.log('abriu home')
    },
    abreCadastro () {
      this.$router.push('/cadastro')
      console.log('abriu cadastro')
    },
    fazerLogoff () {
      this.$q.dialog({
        title: 'Atenção!',
        message: 'Logoff Realizado com Sucesso!'
      })
      this.userLogado = ''
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
 <!-- <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list no-border link inset-delimiter>
          <q-list-header>Usuário</q-list-header>
          <q-item to="/" exact>
            <q-item-side icon="home" />
            <q-item-main label="Login" />
          </q-item>
          <q-item to="/cadastro">
            <q-item-side icon="info_outline" />
            <q-item-main label="Cadastro" />
          </q-item>

          <q-item-separator />
          <q-list-header>Funcionalidades</q-list-header>
           <q-item to="/listagem">
            <q-item-side icon="school" />
            <q-item-main label="Listagem" />
          </q-item>
-->
          <!-- <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
            <q-item-side icon="chat" />
            <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg"></q-item-main>
          </q-item>
          <q-item @click.native="openURL('http://forum.quasar-framework.org')">
            <q-item-side icon="forum" />
            <q-item-main label="Forum" sublabel="forum.quasar-framework.org"></q-item-main>
          </q-item>
          <q-item @click.native="openURL('https://twitter.com/quasarframework')">
            <q-item-side icon="rss feed" />
            <q-item-main label="Twitter" sublabel="@quasarframework"></q-item-main>
          </q-item> -->
<!--
        </q-list>
      </q-list>
    </q-layout-drawer> -->

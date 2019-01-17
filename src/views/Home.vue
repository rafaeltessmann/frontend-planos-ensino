<template>
  <div class="c-container-login container row justify-center items-center">
  <q-page class="flex flex-center col-md-11">
    <div class="login-container padding-quadro caixa" >

    <div class="row justify-center items-center">
    </div>
    <div class="texto">
      <p>Muitas vezes percebemos que as aulas de alguns professores são mais atrativas que as outras, muitas vezes, devido a didática ou a metodologia utilizada. Tendo isto em vista, foi pensado em desenvolver um software que permita que os professores possam trocar informações sobre sua prática pedagógica e a metodologia aplicada para ministrar determinado conteúdo, os aspectos positivos e negativos de cada aula e como foi a resposta dos alunos em relação a forma apresentada.
Também feito entrevistas com professores das redes municipais, estaduais e federais, de diferentes cidades e que lecionam em diferentes níveis da educação, onde alguns relatos incentivaram mais o desenvolvimento,
Assim, esta troca de informações entre os professores, possibilitará com que outros docentes tenham acesso a diferentes metodologias para que possam tornar suas aulas mais atraentes para os alunos. Segundo Vani Moreira (2008), mais importante que as tecnologias, são os procedimentos didáticos mais modernos, pois o que faz a diferença é a capacidade de adequação ao processo educacional, que levam as pessoas ao desafio de aprender e ensinar.</p>
      <p></p>
    </div>
    </div>

 <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list no-border link inset-delimiter>
          <q-list-header  align="middle">
            <img src="../assets/logo4.png" height="40%" width="40%">
          </q-list-header>
          <q-list-header>Funcionalidades</q-list-header>
          <q-item-separator />
          <q-item to="/" exact>
            <q-item-side icon="home" />
            <q-item-main label="Home" />
          </q-item>
          <q-item to="/listagem">
            <q-item-side icon="school" />
            <q-item-main label="Ver Planos de Ensino" />
          </q-item>
          <q-item to="/cadastroplano" v-if="estaLogado">
            <q-item-side icon="note_add" />
            <q-item-main label="Inserir Novo Plano de Ensino" />
          </q-item>
          <q-item-separator />
        </q-list>
      </q-list>
    </q-layout-drawer>

  </q-page>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    usuario () {
      return this.$store.getters.getUsuario
    },
    estaLogado () {
      return this.$store.getters.isAutenticated
    }
  }
}
</script>

<style lang="scss" scoped>
  .caixa{
    padding: 3% 8% 1% 8%;
    font-size: 14pt;
  }
  .fundo{
    background-color: #027be3;
  }
  .titulo{
    font-size: 14pt;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 8%;
    margin-bottom: 8%;
    color: #027be3;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
  }
  .texto{
    font-family: 'Times New Roman', Times, serif;
    line-height: 45px;
    text-align: justify;
  }
</style>

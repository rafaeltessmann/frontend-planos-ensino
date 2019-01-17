<template>
<div class="c-container-login container row justify-center items-center">
  <q-page class="flex flex-center col-md-5">
    <div class="login-container padding-quadro shadow-3 " >

    <div>
      <h5 class="titulo">Fazer Login em Planos de Ensino</h5>
    </div>
    <div class="row justify-center items-center">
      <img
        alt="Quasar logo"
        src="../assets/login2.png"
        height="40%" width="40%"
        >
    </div>
    <div id="usuarioId">
      <q-input
        id="usuarioId"
        maxlength="30"
        float-label="E-mail de Usuário"
        class="col-12"
        v-model="email"
        autocomplete="off"
        >
      </q-input>
    </div>
    <div>
      <q-input class="input"
        id="senhaId"
        type="password"
        float-label="Senha"
        maxlength="8"
        v-model="senha"
        autocomplete="off"
        >
      </q-input>
    </div>
    <br>
      <q-btn
        color="primary"
        size="sm"
        class="full-width botao"
        label="Acessar"
        @click="$_chamaVerificacao()"
      />
      <br><br><br>
      <p>Não tem conta ainda?
        <q-btn
        color="positive"
        size="sm"
        label="Crie uma conta"
        @click="abreCadastro()"
      />
      </p>
    </div>
  </q-page>
  </div>
</template>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      email: '',
      senha: '',
      usuario: {},
      aux: '4'
    }
  },
  methods: {
    abreCadastro () {
      this.$router.push('/cadastro')
    },
    $_chamaVerificacao () {
      if (!this.email || !this.senha) {
        this.$q.dialog({
          title: 'atenção!',
          message: 'Preencha todos campos!'
        })
      } else {
        this.$axios
          // .get('/usuario/4/')
          .get('/usuario/logar/', { 'headers': { 'email': this.email, 'senha': this.senha } })
          .then(response => {
            this.usuario = response.data
            this.$store.commit('login', this.usuario)

            console.log('fez get')
            this.nome = this.usuario.nome
            this.formacao = this.usuario.formacao
            console.log(this.nome, this.formacao)
            this.$router.push('/listagem')
          })
          .catch(error => {
            console.log(error)
            if (error.response.data) {
              console.log('errou: ' + error.response.data)
              console.log('status code: ' + error.response.status)
              this.$q.dialog({
                title: 'Atenção!',
                message: 'Usuário e/ou senha inválido(s)!'
              })
            }
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .botao{
    font-size: 12pt !important;
    margin-bottom: 10%;
  }
  .padding-quadro{
    padding: 0% 8% 3% 8%;
    background-color: #ffffff;
  }
  .titulo{
    margin-bottom: 10%;
    font-family: 'Times New Roman', Times, serif;
    font-size: 17pt;
    color: #2F4F4F;
    font-weight: bold;
  }
  .fundo{
    background-color: #000000;
  }
  .input{
    margin-bottom: 10%;
  }
</style>

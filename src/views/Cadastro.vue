<template>
  <div class="c-container-cadastro container row justify-center items-center">
    <q-page class="flex flex-center col-md-8">
      <div class="login-container  padding-quadro shadow-3">
        <p class="titulo">Crie sua Conta para interagir com o sistema Planos de Ensino.</p>
        <div>
          <div class="col-md-20">
            <q-input id="nomeId" maxlength="30" float-label="Nome" v-model="nome" autocomplete="off"></q-input>
          </div>
          <q-input id="emailId" maxlength="30" float-label="Endereço de E-mail" v-model="email" autocomplete="off"></q-input>
          <q-input id="formacaoId" maxlength="30" float-label="Formação" v-model="formacao" autocomplete="off"></q-input>
          <q-input
            id="especialidadeId"
            maxlength="30"
            float-label="Especialidade"
            v-model="especialidade"
            autocomplete="off"
          ></q-input>
          <q-input id="senhaId" maxlength="12" float-label="Senha" type="password" v-model="senha" autocomplete="off"></q-input>
          <q-input
            id="confirmarSenhaId"
            maxlength="12"
            float-label="Confirmar Senha"
            type="password"
            v-model="confirma_senha"
            autocomplete="off"
          ></q-input>
          <!-- <p>A mensagem é: {{ nome }}</p> -->
          <br>
          <q-btn
            color="primary"
            size="sm"
            label="Criar Conta"
            style="font-size:15px"
            class="full-width botao"
            @click="$_cadastraUser()"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
export default {
  name: 'PageCadastro',
  data () {
    return {
      nome: '',
      email: '',
      formacao: '',
      especialidade: '',
      senha: '',
      confirma_senha: ''
    }
  },
  methods: {
    $_cadastraUser () {
      if (!this.nome || !this.email || !this.formacao ||
      !this.especialidade || !this.senha || !this.confirma_senha) {
        this.erro_email = this.email
        this.$q.dialog({
          title: 'Atenção!',
          message: 'Preencha todos campos!'
        })
      } else {
        if (this.senha !== this.confirma_senha) {
          this.$q.dialog({
            title: 'Atenção!',
            message: 'Senha não Confere!'
          })
        } else {
          this.$axios
            .post('/usuario/', {
              nome: this.nome,
              email: this.email,
              formacao: this.formacao,
              especialidade: this.especialidade,
              senha: this.senha
            })
            .then(response => {
              console.log(response)
              if (response.id) {
                this.$q.dialog({
                  title: 'Parabéns!',
                  message: 'Usuário cadastrado com sucesso.'
                })
              }
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .botao{
    font-size: 10pt !important;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .padding-quadro{
    padding: 3% 10% 1% 10%;
    background-color: #ffffff;
  }
  .titulo{
    margin-bottom: 3%;
    font-family: 'Times New Roman', Times, serif;
    font-size: 17pt;
    color: #2F4F4F;
    font-weight: bold;
  }
  .fundo{
    background-color: #DCDCDC;
  }
</style>

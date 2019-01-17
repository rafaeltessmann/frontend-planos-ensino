<template>
  <q-modal ref="modal" v-model="basicModal"
    :content-css="{
      minWidth: '45vw',
      minHeight: '15vw'
    }">
    <q-modal-layout
      class="mdLayout border"
      header-class="no-shadow"
    >
    <div slot="header">
      <q-toolbar>
        <div class="c-header-fk col-sm-9 col-xs-6">
          <div class="q-title">Adicionar Aula</div>
        </div>
        <div class="row justify-end col-sm-3 col-xs-6">
        <q-btn
            id="fecharAulaId"
            ref="ttCancelar"
            icon="cancel"
            flat
            round
            size="lg"
            @click="$refs.modal.hide()"
        >
            <q-tooltip
                anchor="bottom middle"
                self="top middle"
                :offset="[10, 10]"
                :delay="500"
            >
                Cancelar
            </q-tooltip>
        </q-btn>
      </div>
      </q-toolbar>
    <div class="">
    <div class=" generic-margin generic-padding caixa">
      <q-input
        id="tituloAulaId"
        maxlength="100"
        stack-label="Título da Aula"
        v-model="dados.titulo_aula"
        autocomplete="off"
      ></q-input>
    </div>
    <div class=" generic-margin generic-padding caixa">
      <q-input
        id="atividadesId"
        maxlength="800"
        stack-label="Atividades"
        align="right"
        v-model="dados.atividades"
        autocomplete="off"
        type="textarea"
      ></q-input>
    </div>
    <div class=" generic-margin generic-padding caixa">
      <q-input
        id="observacoesId"
        maxlength="800"
        stack-label="Observações"
        align="right"
        v-model="dados.observacoes"
        autocomplete="off"
        type="textarea"
      ></q-input>
    </div>
    <div class="generic-margin generic-padding">
      <q-btn
            v-if="this.plano"
            color="primary"
            size="md"
            label="Gravar"
            class="botao full-width"
            @click="$_insereAula()"
            icon="check_circle_outline"
      />
    </div>
    </div>
    </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
export default {

  data () {
    return {
      dados: {},
      plano: '',
      basicModal: false,
      types: [
        {
          label: 'Inserir Aula',
          show: () => { this.basicModal = true }
        }
      ]
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
    open (dados, plano) {
      this.dados = dados
      this.plano = plano
      if (this.plano) {
        console.log('adiciona')
      } else {
        console.log('visualiza')
      }
      console.log('abriu modal')
      console.log(this.dados)
      this.$refs.modal.show()
    },
    $_insereAula () {
      console.log('insere aula')
      console.log(this.dados.titulo_aula)
      console.log(this.dados.atividades)
      console.log(this.dados.observacoes)
      console.log(this.usuario.id)
      console.log(this.plano)
      if (!this.dados.titulo_aula || !this.dados.observacoes || !this.dados.atividades) {
        this.$q.dialog({
          title: 'Atenção!',
          message: 'Preencha todos campos!'
        })
      } else {
        this.$axios
          .post('/aula/', {
            titulo_aula: this.dados.titulo_aula,
            atividades: this.dados.atividades,
            observacoes: this.dados.observacoes,
            usuario: this.usuario.id,
            plano: this.plano
          })
          .then(response => {
            console.log(response)
            this.pega_aula = response.data
            this.aulas = this.pega_aula.id
            console.log(this.aulas)
          })
          .catch(error => {
            console.log(error)
          })
        this.basicModal = false
        console.log(this.titulo_aula)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .caixa{
    padding-bottom: 5%;
}
</style>

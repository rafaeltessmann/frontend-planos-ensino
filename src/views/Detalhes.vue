<template>
  <div class="c-container-detalhes row justify-center items-center">
  <q-page class="col-md-12">
    <div class="" >
    <div class="row justify-center items-center">
      <q-tabs ref="tabGeral"
      class="col-12 no-padding no-margin no-border justify-between"
        align="justify"
        inverted
      >
        <q-tab class="col-2"
          default
          name="tab-1"
          slot="title"
          label="Informações Gerais"
          icon="filter_1"/>
        <q-tab class="col-2"
          name="tab-2"
          icon="filter_2"
          slot="title"
          label="Informações Complementares"/>
        <q-tab class="col-2"
          name="tab-3"
          slot="title"
          label="Aulas"
          icon="school"/>
        <q-tab-pane name="tab-1">
          <div class="shadow-3 generic-margin generic-padding">
          <div class="justify-between vertical-button generic-margin generic-padding">
          <div class="col-5">
          <q-input
            id="tituloPlanoId"
            maxlength="50"
            float-label="Titulo do Plano de Ensino"
            v-model="titulo_plano"
            autocomplete="off"
            type="textarea"
            readonly
          ></q-input>
          </div>
          <div class="col-5">
          <q-input
            id="objetivoGeralId"
            maxlength="300"
            float-label="Objetivos Gerais"
            v-model="objetivos_gerais"
            autocomplete="off"
            type="textarea"
            readonly
          ></q-input>
          </div>
          <div class="col-5">
          <q-input
            id="objetivoEspecificoId"
            maxlength="800"
            float-label="Objetivos Específicos"
            v-model="objetivos_especificos"
            autocomplete="off"
            type="textarea"
            readonly
          ></q-input>
          </div>
          <div class="col-5">
          <q-input
            id="conteudoId"
            maxlength="800"
            float-label="Conteúdo"
            v-model="conteudos"
            autocomplete="off"
            type="textarea"
            readonly
          ></q-input>
          </div>
          <div class="col-5">
          <q-input
            id="metodologiaId"
            maxlength="800"
            float-label="Metodologia"
            v-model="metodologia"
            autocomplete="off"
            type="textarea"
            readonly
          ></q-input>
          </div>
          <div class="col-5">
          <q-input
            id="avaliacaoId"
            maxlength="800"
            float-label="Avaliação"
            v-model="avaliacao"
            autocomplete="off"
            type="textarea"
            readonly
          ></q-input>
          </div>
          <div class="col-5 generic-margin generic-padding caixa">
          <q-input
            id="relacaoDisciplinaId"
            maxlength="800"
            float-label="Relação Disciplina"
            v-model="disciplina"
            autocomplete="off"
            type="textarea"
            readonly
          ></q-input>
          </div>
          </div>
          </div>
        </q-tab-pane>
        <q-tab-pane name="tab-2">
          <div class="shadow-3 generic-margin generic-padding">
          <div class="row justify-between vertical-button generic-margin generic-padding">
            <div class="col-5">
              <q-input
                id="ch_totalId"
                maxlength="10"
                float-label="Carga Horaria Total"
                align="right"
                v-model="ch_total"
                autocomplete="off"
              ></q-input>
            </div>
            <div class="col-5">
              <q-input
                id="ch_semanalId"
                maxlength="10"
                float-label="Carga Horaria Semanal"
                v-model="ch_semanal"
                autocomplete="off"
                align="right"
              ></q-input>
            </div>
          </div>
          <div class="row justify-between vertical-button generic-margin generic-padding">
            <div class="col-5">
              <q-input
              id="turmaId"
              maxlength="10"
              float-label="Turma"
              v-model="turma"
              autocomplete="off"
              align="right"
            ></q-input>
            </div>
            <div class="col-5">
            <q-input
              id="anoLetivoId"
              maxlength="10"
              float-label="Ano Letivo"
              v-model="ano_letivo"
              autocomplete="off"
              align="right"
            ></q-input>
            </div>
            </div>
            <div class="row justify-between vertical-button generic-margin generic-padding">
            <div class="col-5">
            <q-input
              id="periodoId"
              maxlength="10"
              float-label="Período"
              v-model="periodo"
              autocomplete="off"
              align="right"
            ></q-input>
            </div>
            <div class="col-5">
            <q-input
              id="regimeId"
              maxlength="10"
              float-label="Regime"
              v-model="regime"
              autocomplete="off"
              align="right"
            ></q-input>
            </div>
            </div>
            <div class="row justify-between vertical-button generic-margin generic-padding">
            <div class="col-5 generic-margin generic-padding caixa">
            <q-select
              v-model="selectCurso"
              float-label="Selecione o Curso"
              radio
              :options="selectOptionsCurso"
            />
            </div>
            <div class="col-5 generic-margin generic-padding caixa">
            <q-select
              id="selectDisciplinaId"
              v-model="selectDisciplina"
              float-label="Selecione a Disciplina"
              radio
              :options="selectOptions"
            />
            </div>
            </div>
          </div>
        </q-tab-pane>
        <q-tab-pane name="tab-3">
          <div class=" generic-margin generic-padding">
            <div>
              <q-btn
                color="primary"
                size="md"
                class="botaoAdd"
                label="Visualizar Aula"
                @click="$_visualizaAula()"
                icon="pageview"
              />
              <q-btn
                color="primary"
                size="md"
                class="botaoAdd"
                label="Atualizar Lista"
                @click="$_atualizaGrid()"
                icon="refresh"
              />
            </div>
            <div>
              <q-table
                :title="titulo_plano"
                :data="tableAulas"
                :columns="columns"
                row-key="id"
                selection="single"
                :selected.sync="selected"
              >
              </q-table>
            </div>
          </div>
        </q-tab-pane>
      </q-tabs>
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
        <q-list no-border link inset-delimiter >
          <q-list-header  align="middle">
            <img src="../assets/logo4.png" height="40%" width="40%">
          </q-list-header>
          <q-list-header>Funcionalidades</q-list-header>
          <q-item-separator />
          <q-item to="/" exact>
            <q-item-side icon="home" />
            <q-item-main label="Home"/>
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
   <modal ref="modal" />

  </div>
</template>

<style>
</style>

<script>
import modal from '../components/modal'
export default {
  name: 'PageDetalhes',
  components: {
    modal
  },
  computed: {
    usuario () {
      return this.$store.getters.getUsuario
    },
    estaLogado () {
      return this.$store.getters.isAutenticated
    },
    habilitaDefault () {
      console.log(this.habilitaAulas)
      return this.habilitaAulas
    }
  },
  mounted () {
    return this.$_carregarTudo()
  },
  data () {
    return {
      dados: null,
      titulo_plano: '',
      objetivos_gerais: '',
      objetivos_especificos: '',
      conteudos: '',
      metodologia: '',
      avaliacao: '',
      aulas: '',
      comentario: '1',
      ch_total: '',
      ch_semanal: '',
      turma: '',
      ano_letivo: '',
      periodo: '',
      regime: '',
      curso: '',
      disciplina: '',
      titulo_aula: '',
      atividades: '',
      observacoes: '',
      pega_aula: [],
      pega_info: [],
      pega_plano: '',
      columns: [
        {
          name: 'Titulo',
          required: true,
          label: 'Titulo da Aula',
          align: 'left',
          field: 'titulo_aula',
          sortable: true,
          classes: 'my-class',
          style: 'width: 500px'
        },
        {
          name: 'observacoes',
          required: true,
          label: 'Observações',
          align: 'left',
          field: 'observacoes',
          sortable: true,
          classes: 'my-class',
          style: 'width: 500px'
        }
      ],
      tableData: [],
      aux: [],
      selected: [],
      habilitaAulas: false,
      leftDrawerOpen: this.$q.platform.is.desktop,
      selectOptions: [],
      selectOptionsCurso: [],
      selectDisciplina: [],
      aux_disciplina: [],
      selectCurso: [],
      tableAulas: []
    }
  },
  methods: {
    $_visualizaAula () {
      console.log('visualiza aula')
      console.log('---' + this.selected)
      this.$refs.modal.open(...this.selected)
    },
    $_carregarTudo () {
      this.$_carregarPlano()
      this.$_carregarAulas()
    },
    $_carregarPlano () {
      this.pega_plano = this.$route.params.id
      console.log('carrega plano')
      this.$axios
        .get('/plano-ensino/' + this.pega_plano + '/?expand=~all')
        .then(response => {
          this.aux = response.data
          console.log('fez get planos de ensino')
          this.tableData = this.aux
          this.titulo_plano = this.tableData.titulo
          this.objetivos_gerais = this.tableData.objetivos_gerais
          this.objetivos_especificos = this.tableData.objetivos_especificos
          this.conteudos = this.tableData.conteudos
          this.metodologia = this.tableData.metodologia
          this.avaliacao = this.tableData.avaliacao
          this.disciplina = this.tableData.relacao_disciplinas
        })
        .catch(
          error => console.log(error)
        )
    },
    $_carregarAulas () {
      this.$axios
        .get('/aula/?id_plano=' + this.pega_plano)
        .then(response => {
          this.aux = response.data
          console.log('fez get aula')
          this.tableAulas = this.aux
        })
        .catch(
          error => console.log(error)
        )
    },
    $_atualizaGrid () {
      this.$_carregarAulas()
    }
  }
}
</script>

<style lang="scss" scoped>
  .caixa{
    padding-bottom: 1%;
  }
  .fundo{
    background-color: #DCDCDC;
  }
  .padding-quadro{
    padding: 0% 12% 3% 12%;
    background-color: #ffffff;
  }
  .titulo{
    font-size: 14pt;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 8%;
    margin-bottom: 8%;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    color: #027be3;
  }
  .botao{
    font-size: 10pt !important;
    margin-top: 1%;
    margin-bottom: 5%;
    margin-left: 76%;
  }
  .botaoProximo{
    font-size: 10pt !important;
    margin-top: 1%;
    margin-bottom: 5%;
    margin-left: 87%;
  }
  .botaoAdd{
    margin-bottom: 0.5%;
    margin-right: 0.2%;
    font-size: 8pt !important;
  }
</style>

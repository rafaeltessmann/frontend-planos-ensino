<template>
  <q-page class="flex grid">
    <!--<img alt="Quasar logo" src="../assets/logo.png">-->
    <div class="container generic-margin generic-padding">
      <q-table
        :data="tableData"
        :columns="columns"
        row-key="id"
        selection="single"
        :selected.sync="selected"
      />
      <q-btn
        color="primary"
        size="md"
        class="generic-padding generic-margin"
        label="Visualizar Detalhes do Plano de Ensino"
        @click="$_chamaDetalhes()"
        icon="pageview"
      />
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
</template>

<script>
export default {
  name: 'PageListagem',
  computed: {
    usuario () {
      return this.$store.getters.getUsuario
    },
    estaLogado () {
      return this.$store.getters.isAutenticated
    }
  },
  mounted () {
    return this.$_carregar()
  },
  data () {
    return {
      selected: [],
      columns: [
        {
          name: 'titulo',
          required: true,
          label: 'Titulo',
          align: 'left',
          field: 'titulo',
          sortable: true,
          classes: 'my-class',
          style: 'width: 500px'
        },
        {
          name: 'curso',
          required: true,
          label: 'Curso',
          align: 'left',
          field: row => row.info.curso,
          sortable: true,
          classes: 'my-class',
          style: 'width: 500px'
        },
        {
          name: 'disciplina',
          required: true,
          label: 'Disciplina',
          align: 'left',
          field: row => row.info.disciplina,
          sortable: true,
          classes: 'my-class',
          style: 'width: 500px'
        }
      ],
      tableData: [],
      aux: [],
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    $_carregar () {
      this.$axios
        .get('/plano-ensino/?expand=~all')
        .then(response => {
          this.aux = response.data
          console.log('fez get planos de ensino')
          console.log(this.aux)
          this.tableData = this.aux
        })
        .catch(
          error => console.log(error)
        )
    },
    $_chamaDetalhes () {
      console.log(this.selected)
      this.$router.push(`/detalhes/${this.selected[0].id}/`)
    }
  }
}
</script>
<style lang="scss" scoped>
  .menu-backgroung{
    background-color: #696969;
  }
  .grid{
    margin-top: 0%;
    padding-top: 0%;
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
</style>

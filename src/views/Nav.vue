<template>
  <div>
    <b-card no-body>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs>
          <b-nav-item to="/lista/informe" exact exact-active-class="active">
            Informes de riesgo
          </b-nav-item>
          <b-nav-item to="/lista/historico" exact exact-active-class="active">
            Histórico
          </b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center">
        <router-view />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<template>
  <v-app>
    <div id="top" />
    <AppHeader />
    <v-main class="white">
      <!-- <AppBreadcrums /> -->
      <Nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("GET_USER");
    this.$store.dispatch("GET_PAGE");
  },
  mounted() {
    document.body.classList.remove("fixed");
  },
  watch: {
    $route() {
      document.getElementById("top").scrollIntoView();
    },
  },
};
</script>

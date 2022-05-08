<template>
  <div v-if="page">
    <v-container>
      <div
        class="pb-6 text-caption text-sm-body-2 d-flex align-center text-nowrap"
      >
        <nuxt-link to="/">Home</nuxt-link>
        <v-icon small>mdi-chevron-right</v-icon>
        <span class="text--secondary text-capitalize">
          {{ page }}
        </span>
      </div>
    </v-container>
    <div class="secondary">
      <v-container>
        <div
          class="py-2 text-center text-h6 text-sm-h5 info--text text-capitalize"
        >
          {{ page }}
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    page() {
      if (this.$route.name.includes("index")) return "";
      if (this.$route.name.includes("account")) return "";
      if (this.$route.name.includes("index")) return "";
      if (this.$route.params.slug) return "";
      let dir = this.$route.name.split("-").join(" ");
      switch (dir) {
        case "about":
          return "About Us";
        case "contact":
          return "Contact Us";
        case "faqs":
          return "Help & FAQ's";
        case "team":
          return "Our Team";
        default:
          return dir;
      }
    },
  },
};
</script>

<style></style>

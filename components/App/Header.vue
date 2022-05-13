<template>
  <div>
    <!-- Large Devices -->
    <v-card tile flat class="info">
      <v-container class="d-flex align-center">
        <AppMenu />
        <v-spacer />
        <nuxt-link to="/">
          <img src="/logo.png" alt="tchewa.com" />
        </nuxt-link>
        <v-spacer />
      </v-container>
      <v-container class="pt-0 hidden-sm-and-down">
        <v-row dense>
          <v-col v-for="(x, i) in nav" :key="i">

            <v-card
              tile
              flat
              height="45"
              dark
              v-if="x != 'submit-project'"
              :to="`/${x}`"
              :ripple="false"
              class="transparent text-caption tab px-3 d-flex align-center justify-center text-no-wrap text-uppercase"
              :class="{ active: x == page }"
            >
              {{ x || "home" }}
            </v-card>
            <v-card
              tile
              height="45"
              dark
              v-else
              color="orange darken-4"
              :to="`/${x}`"
              :ripple="false"
              class="transparent text-caption tab px-3 d-flex align-center justify-center text-no-wrap text-uppercase"
              :class="{ active: x == page }"
            >
              Submit your Project
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import Submit from "./Submit.vue";
export default {
    data() {
        return {};
    },
    computed: {
        page() {
            return this.$route.path.split("/")[1];
        },
    },
    components: { Submit }
};
</script>

<style lang="scss" scoped>
.tab {
  border: 2px solid transparent !important;
  letter-spacing: 1.5px !important;
}
.tab:hover,
.tab.active {
  border-color: #ffffff !important;
  color: #eaeaea;
}
</style>

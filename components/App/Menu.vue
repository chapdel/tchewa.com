<template>
  <div>
    <v-btn
      icon
      large
      color="white"
      :ripple="false"
      @click.stop="drawer = !drawer"
    >
      <v-icon large class="d-md-none"> mdi-menu </v-icon>
    </v-btn>
    <v-navigation-drawer width="300" v-model="drawer" app temporary>
      <v-sheet height="100%" class="info">
        <div>
          <v-card
            tile
            flat
            height="65"
            class="border-bottom info d-flex align-center px-4"
          >
            <v-spacer />
            <v-avatar size="60" tile @click="drawer = !drawer">
              <v-icon color="white" size="45"> mdi-close </v-icon>
            </v-avatar>
          </v-card>
          <v-divider class="grey mx-4" />
        </div>
        <nuxt-link
          v-for="(x, i) in nav"
          :key="i"
          :to="`/${x}`"
          class="text-decoration-none d-block px-4 text-h6 text-capitalize white--text"
        >
          <div class="py-3">
            {{ x || "home" }}
          </div>
          <v-divider class="grey" />
        </nuxt-link>
      </v-sheet>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),

  watch: {
    $route() {
      this.drawer = false;
    },
  },
};
</script>

<style></style>

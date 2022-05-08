<template>
  <v-app>
    <v-main>
      <div class="__body pa-4 pb-0">
        <v-card tile class="pa-6">
          <div class="text-center pa-4 border-bottom">
            <div class="d-flex justify-center">
              <Avatar
                :size="85"
                :img="$auth_user().avatar"
                style="z-index: 1"
              />
            </div>

            <div class="text-h6 mb-2">{{ $auth_user().name }}</div>
            <v-btn
              outlined
              tile
              class="text-none text-subtitle-1 px-12"
              @click="$store.dispatch('SIGNOUT')"
            >
              Logout
            </v-btn>
          </div>
          <div class="">
            <v-card
              tile
              flat
              v-for="(x, i) in links"
              :key="i"
              :to="x.path"
              class="border-bottom d-flex align-center py-3"
            >
              <div
                class="pr-3 text-subtitle-2"
                :class="x.path == $route.path ? 'warning--text' : 'info--text'"
              >
                {{ x.name | capz }}
              </div>
              <v-spacer />
              <v-icon
                size="20"
                :color="x.path == $route.path ? 'warning' : 'info'"
              >
                {{ x.icon }}
              </v-icon>
            </v-card>
          </div>
          <v-card
            tile
            flat
            dark
            height="60"
            class="info d-none align-center px-4"
          >
            <v-icon large> mdi-apps mr-3</v-icon>
            <h2>Extranet</h2>
            <v-spacer />
            <v-avatar color="#ffffff33">
              <v-icon> mdi-account-circle-outline </v-icon>
            </v-avatar>
          </v-card>
        </v-card>
        <v-card tile>
          <div class="pa-6">
            <Nuxt />
          </div>
        </v-card>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: "auth",
  created() {
    this.$store.dispatch("GET_USER");
    this.$store.dispatch("GET_PAGE");
  },
  mounted() {
    document.body.classList.add("fixed");
  },
  data() {
    return {
      links: [
        { icon: "mdi-home", name: "dashboard", path: "/extranet" },
        { icon: "mdi-calendar", name: "events", path: "/extranet/events" },
        { icon: "mdi-email", name: "messages", path: "/extranet/messages" },
        { icon: "mdi-image", name: "photos", path: "/extranet/photos" },
        { icon: "mdi-star-box", name: "reviews", path: "/extranet/reviews" },
        {
          icon: "mdi-storefront",
          name: "Business Profile",
          path: "/extranet/profile",
        },
        {
          icon: "mdi-account-circle",
          name: "Account details",
          path: "/extranet/account",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.__body {
  // min-height: calc(100vh - 60px);
  // padding-left: 280px;
  height: 100vh;
  display: grid;
  grid-template-columns: 280px auto;
  grid-gap: 20px;
}
.aside {
  position: fixed;
  z-index: 1;
  top: 60px;
  height: calc(100vh - 60px);
  left: 0;
  border-right: 1px solid #aaa;
  width: 280px;
}
</style>

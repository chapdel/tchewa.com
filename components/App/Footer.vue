<template>
  <footer style="z-index: 0">
    <v-card tile flat color="secondary">
      <v-divider />
      <v-container class="py-12">
        <v-row>
          <v-col class="col-12 col-md-6">
            <img src="/img/take-care.png" width="230" />
            <div class="text-uppercase text-subtitle-1 mt-6 font-weight-bold">
              Quick Links
            </div>
            <div class="mt-3">
              <v-row>
                <v-col v-for="(x, i) in footerlinks" :key="i" class="col-6">
                  <router-link
                    text
                    class="text-body-2 d-block text-uppercase"
                    :to="x.link"
                    >{{ x.name | caps }}
                  </router-link>
                </v-col>
              </v-row>
            </div>
            <div class="text-uppercase text-subtitle-1 mt-6 font-weight-bold">
              Follow Us
            </div>

            <div class="mt-3">
              <v-btn
                icon
                outlined
                large
                :ripple="false"
                v-for="x in socials"
                :key="x.name"
                :href="x.link"
                class="mr-3 _icon"
              >
                <v-icon size="28" color="#222">mdi-{{ x.name }}</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col class="col-12 col-md-6">
            <v-card tile flat color="#242424" class="pa-6 ps-sm-16 white--text">
              <div class="text-h3 mb-6">LET’S KEEP IN TOUCH</div>
              <div class="text-h6 mb-6">
                Now you know a bit about us, let us know a bit more about you.
                Sign up now to stay in touch.
              </div>
              <v-btn
                tile
                x-large
                color="white"
                height="65"
                :ripple="false"
                class="text-none text-subtitle-1 px-12 info--text text-uppercase text-decoration-underline"
                to="contact-us"
                >Contact Us</v-btn
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card tile flat color="#4a4a4a" class="py-3">
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-6">
            <img src="/logo-alt.png" width="85" />
          </v-col>
          <v-col class="col-12 col-sm-6 d-flex align-center">
            <v-spacer class="hidden-xs-only" />
            <div class="text-caption white--text">
              Copyright © {{ new Date().getFullYear() }} Tchewa Events and
              Tours. All rights reserved.
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      footerlinks: [
        { name: "About us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Our Team", link: "/team" },
        { name: "Gallery", link: "/gallery" },
        { name: "Reviews", link: "/reviews" },
        { name: "Tour", link: "/tours" },
        { name: "Events", link: "/events" },
        { name: "Help & FAQ's", link: "/faqs" },
        {name:'Contact Us',link:"/contact"},
        { name: "Terms of Service", link: "/terms-of-service" },
        { name: "Privacy Policy", link: "/privacy-policy" },
      ],

    };
  },
};
</script>
<style lang="scss" lang="scss" scoped>
._icon {
  background-color: transparent;
}
._icon:hover {
  background-color: #242424;
  i {
    color: #ffffff !important;
  }
}
</style>

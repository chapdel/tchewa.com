<template>
  <div>
    <v-container class="pa-sm-8">
      <section class="hidden-sm-and-down">
        <v-row no-gutters>
          <v-col class="col-8">
            <v-img :src="item.image" width="100%" class="mb-n15" />
          </v-col>
          <v-col class="col-4">
            <v-card tile flat height="100%" class="secondary pa-4">
              <div class="error--text text-subtitle-1 font-weight-black mb-2">
                Fri, Mar 06 2020 {{ item.details.starts.time }} -
                {{ item.details.ends.time }}
              </div>
              <h1>{{ item.title }}</h1>
              <div class="text-subtitle-1 font-weight-medium mt-3">
                {{ item.price.regular }}
                {{ item.price.currency }}
                <div class="text-body-2 font-weight-regular text--secondary">
                  ({{ item.price.exemption }})
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-divider />
        <div class="py-3">
          <v-row no-gutters>
            <v-col class="col-8"></v-col>
            <v-col class="col-4">
              <div class="px-4">
                <v-btn
                  block
                  depressed
                  large
                  :ripple="false"
                  to="/contact"
                  color="info"
                >
                  Contact Us
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-divider />
        <div class="py-6">
          <v-row no-gutters>
            <v-col class="col-8">
              <div v-html="item.desc" class="py-3" />
              <v-divider class="my-3" />
              <div v-html="item.video" />
            </v-col>
            <v-col class="col-4">
              <div class="px-4">
                <div class="d-flex align-start pa-3">
                  <v-icon> mdi-calendar-outline </v-icon>
                  <div class="pl-6">
                    <h4>Date and time</h4>
                    <div class="text-body-2 text--secondary">
                      Fri, Mar 06 2020
                    </div>
                    <div class="text-body-2 text--secondary">
                      {{ item.details.starts.time }} -
                      {{ item.details.ends.time }}
                    </div>
                  </div>
                </div>
                <div class="d-flex align-start pa-3">
                  <v-icon> mdi-map-marker-outline </v-icon>
                  <div class="pl-6">
                    <h4>Address</h4>
                    <div
                      class="text-caption text-sm-subtitle-2 font-weight-black"
                    >
                      {{ item.details.venue }}
                    </div>
                    <div class="text-body-2 text--secondary">
                      {{ item.location.street }}, {{ item.location.city }},
                    </div>
                    <div class="text-body-2 text--secondary">
                      {{ item.location.state }}, {{ item.location.country }}
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </section>
      <section class="d-md-none">
        <v-img :src="item.image" width="100%" />
        <div class="pa-4 text-h6 font-weight-bold">
          {{ item.title }}
        </div>
        <v-divider class="my-3" />
        <div
          class="text-subtitle-1 font-weight-medium text--secondary mb-3 text-center"
        >
          {{ item.price.regular }}
          {{ item.price.currency }}
          <div class="text-body-2 font-weight-regular">
            ({{ item.price.exemption }})
          </div>
        </div>
        <v-btn block depressed large :ripple="false" to="/contact" color="info">
          Contact Us
        </v-btn>
        <v-divider class="my-3" />
        <div class="d-flex align-start pa-3">
          <v-icon> mdi-calendar-outline </v-icon>
          <div class="pl-6">
            <h4>Date and time</h4>
            <div class="text-body-2 text--secondary">Fri, Mar 06 2020</div>
            <div class="text-body-2 text--secondary">
              {{ item.details.starts.time }} - {{ item.details.ends.time }}
            </div>
          </div>
        </div>
        <div class="d-flex align-start pa-3">
          <v-icon> mdi-map-marker-outline </v-icon>
          <div class="pl-6">
            <h4>Address</h4>
            <div class="text-caption text-sm-subtitle-2 font-weight-black">
              {{ item.details.venue }}
            </div>
            <div class="text-body-2 text--secondary">
              {{ item.location.street }}, {{ item.location.city }},
            </div>
            <div class="text-body-2 text--secondary">
              {{ item.location.state }}, {{ item.location.country }}
            </div>
          </div>
        </div>
        <v-divider class="my-3" />
        <div v-html="item.video" />
        <v-divider class="my-3" />
        <div v-html="item.desc" class="py-3" />
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      const { slug } = this.$route.params;
      return this.$store.state.events.find(
        (el) => el._id == slug || el.slug == slug
      );
    },
  },
};
</script>

<style></style>

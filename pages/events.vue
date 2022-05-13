<template>
  <div>
    <section>
      <v-container style="max-width: 1024px" class="pa-3 pa-sm-8">
        <!-- <div class="d-flex align-start mb-4">
          <v-card tile flat width="100%" class="pr-2 transparent">
            <v-text-field outlined class="mb-n6" placeholder="Search events" />
          </v-card>
          <v-btn
            outlined
            tile
            x-large
            height="55"
            :ripple="false"
            class="text-none text-subtitle-2 text-sm-subtitle-1"
          >
            Search
          </v-btn>
        </div> -->
        <div v-if="$store.state.events.length">
          <v-card
            tile
            hover
            class="pa-2 pa-sm-4 mb-2"
            v-for="(x, i) in $store.state.events"
            :key="i"
            :to="`/${x.slug}`"
            :ripple="false"
          >
            <v-row no-gutters>
              <v-col cols="8">
                <div class="pr-2 pr-sm-4">
                  <h3 class="text-body-1 text-sm-h6 font-weight-bold">
                    {{ x.title }}
                  </h3>
                  <h4
                    class="error--text my-1 text-subtitle-2 text-sm-subtitle-1 font-weight-medium"
                  >
                    {{$dayjs(x.details.starts.date).format('ddd, MMM D YYYY')}}, {{ x.details.starts.time }}
                  </h4>
                  <div
                    class="text-caption text-sm-subtitle-2 font-weight-medium"
                  >
                    {{ x.details.venue }}
                  </div>
                  <div class="text-caption text--secondary">
                    {{ x.location.street }}, {{ x.location.city }},
                    {{ x.location.state }},
                    {{ x.location.country }}
                  </div>
                  <div class="text-h6 font-weight-bold text--secondary mt-2">
                    {{ x.price.regular }} {{ x.price.currency }}
                  </div>
                </div>
              </v-col>
              <v-col cols="4">
                <v-img :src="x.image" width="100%" />
              </v-col>
            </v-row>
          </v-card>
        </div>
        <v-card v-else>
          <div class="text-h6 py-12 text--secondary text-center">
            No Events Yet
          </div>
        </v-card>
      </v-container>
    </section>
    <LiveFully img="/img/hero/DSC06029.jpg" />
  </div>
</template>

<script>
export default {};
</script>

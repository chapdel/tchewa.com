<template>
  <div>
    <section class="py-6">
      <v-container>
        <div class="text-h4 text-sm-h3 px-4 success--text text-center mb-3">
          OUR <span class="font-weight-bold">SERVICES</span>
        </div>
        <img src="/img/quotes.png" />
        <div class="text-h5 success--text text-center pa-3 mt-n16">
          In a business like ours, where the hospitality we provide is
          essential, we simply cannot succeed unless our clients love our
          services.
        </div>
        <div class="text-body-2 font-weight-bold text-center mt-2 mb-4">
          Tchewa Brell<br />Founder
        </div>
        <v-row>
          <v-col
            v-for="(x, i) in services"
            :key="i"
            class="col-12 col-sm-4 col-md-3"
          >
            <v-card
              class="pa-10 text-center"
              height="100%"
              tile
              flat
              style="box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2) !important"
            >
              <div class="d-flex justify-center">
                <v-card flat height="6" width="55" class="success" />
              </div>
              <div class="text-h5 mt-6">
                {{ x }}
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <LiveFully img="/img/hero/DSC05778.jpg" />
  </div>
</template>

<script>
export default {};
</script>

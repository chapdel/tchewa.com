<template>
  <div>
    <section>
      <v-container>
        <!-- Life at Marriott -->
        <section>
          <v-container>
            <v-responsive
              :aspect-ratio="16 / 9"
              :style="`background-image: url('/img/hero/DSC05778.jpg');`"
              class="img-cover d-flex align-end mb-12"
            >
              <v-card width="660" tile flat class="pa-16 pl-3">
                <div
                  class="text-h5 text-sm-h3 font-weight-regular mb-6 success--text"
                >
                  We,
                  <div class="font-weight-bold">BELIEVE IN</div>
                </div>
                <div class="text-body-1 py-3">
                  Bringing the world together through live experiences
                </div>
                <div class="text-h6">We call it THE GREAT EXPERIENCE.</div>
              </v-card>
            </v-responsive>
          </v-container>
        </section>
        <section class="py-6">
          <v-container class="px-lg-16 text-center">
            <div class="text-h4 text-sm-h3 px-4 success--text">
              PUTTING <span class="font-weight-bold">PEOPLE FIRST</span>
            </div>
            <div class="mt-2 mb-6 text-h6 font-weight-light">
              To most, hospitality means welcoming and serving people as if you
              were welcoming them into your home. To us, it means starting with
              that warm invitation to our associates. Along with pursuing
              excellence, acting with integrity, embracing change, and serving
              our world, WE believe inputting people first.
            </div>
          </v-container>
        </section>
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
      </v-container>
    </section>
    <!-- Gallery -->
    <section class="py-6 py-md-12 warning">
      <v-container>
        <v-row>
          <v-col>
            <v-row dense>
              <v-col v-for="x in images" :key="x" class="col-4">
                <img :src="`/img/hero/${x}.jpg`" width="100%" />
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-sm-6 pa-6 pa-sm-12">
            <div class="text-h5 text-sm-h3 font-weight-regular mb-6">
              BRIDGE
              <div class="font-weight-bold">CULTURES</div>
            </div>
            <p class="text-body-1 mb-6">
              Working is a big part of our lives, but this isn’t an ordinary
              job. We are exploring the world we live in and all its
              possibilities. This is not a vacation photo album; we’re living
              this life.
            </p>
            <v-btn
              x-large
              depressed
              tile
              color="white"
              height="65"
              class="px-12 info--text"
              to="/gallery"
              >See Our Gallery</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </section>
    <LiveFully img="/img/hero/DSC05591.jpg" />
  </div>
</template>

<script>
export default {};
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="call-to-action"
      :style="`background-image: url('/img/hero/${images[hero]}.jpg');`"
    >
      <div
        class="hero d-flex align-center justify-center px-2"
        style="background-image: linear-gradient(#0a094d, transparent)"
      >
        <div class="text-center">
          <img src="/img/dots.png" width="75" />
          <div
            class="text-h4 text-sm-h2 font-weight-black white--text mb-6 mt-3 px-3"
          >
            THE GREAT EXPERIENCE
          </div>
          <v-card
            tile
            flat
            to="/events"
            max-width="300"
            class="info pa-3 mx-auto white--text"
            :ripple="false"
          >
            BROWSE<br />
            UPCOMING EVENTS
          </v-card>
        </div>
      </div>
    </section>
    <!-- 
    <section
      class="call-to-action d-none"
      :style="`background-image: url('/img/hero${hero}.jpg');`"
    >
      <div class="hero d-flex align-center justify-center px-2">
        <div class="text-center">
          <img src="/img/dots.png" width="75" />
          <div class="text-h1 font-weight-black white--text mb-6 mt-3">
            LIVE FULLY
          </div>
          <v-card
            tile
            flat
            to="careers"
            max-width="300"
            class="info pa-3 mx-auto white--text"
            :ripple="false"
          >
            FIND JOBS AT<br />
            MARRIOT INTERNATIONAL
          </v-card>
        </div>
      </div>
    </section>
    <section class="call-to-action d-none">
      <div class="hero d-flex align-center px-2">
        <v-container>
          <div class="text-h6 text-sm-h4 font-weight-light white--text">
            Discover
          </div>
          <v-card
            tile
            flat
            max-width="600"
            class="transparent text-h4 text-sm-h2 my-6 white--text font-weight-medium"
          >
            The Mountain View Hotel & Resort
            <div class="text-subtitle-1 text-sm-h6 font-weight-regular mt-4">
              Delivering legendary Hotel service with world-class amenities, in
              the world’s most sought-after locations.
            </div>
          </v-card>
          <div class="mt-6 hidden-xs-only">
            <v-btn
              :ripple="false"
              to="/contact-us"
              x-large
              class="warning text-none text-subtitle-1 mr-3"
            >
              <v-icon left>mdi-email-outline</v-icon>
              Make an Inquiry
            </v-btn>
            <v-btn
              to="/careers"
              :ripple="false"
              x-large
              outlined
              color="white"
              class="text-none text-subtitle-1"
            >
              <v-icon left>mdi-briefcase</v-icon>
              Search Jobs
            </v-btn>
          </div>
          <div class="mt-6 d-sm-none">
            <v-btn
              :ripple="false"
              to="/contact-us"
              x-large
              class="warning text-none text-subtitle-1 mb-4"
              block
            >
              <v-icon left>mdi-email-outline</v-icon>
              Make an Inquiry
            </v-btn>
            <v-btn
              to="/careers"
              :ripple="false"
              x-large
              outlined
              color="white"
              class="text-none text-subtitle-1"
              block
            >
              <v-icon left>mdi-briefcase</v-icon>
              Search Jobs
            </v-btn>
          </div>
        </v-container>
      </div>
    </section>

     -->
    <!-- About -->
    <section class="py-6 py-md-12">
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-6 px-6">
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
          </v-col>
          <v-col class="col-12 col-sm-6">
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/s6Y62ikXbLw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Services -->
    <section class="py-6 success">
      <v-container class="px-lg-16">
        <div class="text-h4 text-sm-h3 text-center mb-6 px-4 white--text">
          OUR <span class="font-weight-bold">SERVICES</span>
          <div class="mt-2 text-h6 font-weight-light">
            Success is never final. We’re always evolving to be even more
            innovative and relevant. Our global accolades are a sign that we’re
            committed to creating an inclusive workforce that makes the world a
            better place.
          </div>
        </div>
        <v-row>
          <v-col
            v-for="(x, i) in services"
            :key="i"
            class="col-12 col-sm-4 col-md-3"
          >
            <v-card class="pa-10 text-center" height="100%" tile flat>
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
    <!-- Gallery -->
    <section class="py-6 py-md-12 warning">
      <v-container>
        <v-row>
          <v-col>
            <v-row dense>
              <v-col v-for="x in images" :key="x" class="col-4">
                <img :src="`/img/hero/${x}.jpg`" width="100%" />
              </v-col> </v-row
          ></v-col>
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
    <!-- Live Fully -->
    <LiveFully img="/img/hero/DSC05845.jpg" />
    <!-- Partners   -->
    <section class="py-6 py-md-12 success d-none">
      <v-container class="px-lg-16">
        <div class="text-h4 text-sm-h3 text-center mb-6 px-4 white--text">
          EXPLORE ENDLESS POSSIBILITIES
          <div class="mt-2 text-h6 font-weight-light">
            As the #1 leader in hospitality worldwide, Marriott International
            has 7,500+ hotel properties and 30 top hotel brands. We’re in 132
            countries and territories, and we’re still growing. Unmatched
            opportunities await you! The next step in your career could lead to
            your greatest adventure.
          </div>
        </div>
        <v-row dense>
          <v-col v-for="x in 30" :key="x" class="col-4 col-sm-3 col-md-2">
            <v-responsive
              class="white d-flex align-center justify-center px-4 py-2"
              :aspect-ratio="16 / 9"
            >
              <img :src="`/img/clients/${x}.png`" width="100%" />
            </v-responsive>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(() => {
      if (this.hero < 6) {
        this.hero++;
      } else {
        this.hero = 0;
      }
    }, 5000);
    document.getElementById("top").scrollIntoView();
  },
  data() {
    return {
      hero: 1,
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>

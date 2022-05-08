<template>
  <section class="img-cover" :style="`background-image: url('${img}');`">
    <v-row class="ma-0 pa-0">
      <v-col class="col-12 col-sm-6 pa-0"></v-col>
      <v-col class="col-12 col-sm-6 pa-0">
        <v-responsive :aspect-ratio="3 / 1" />
        <v-card tile flat class="pa-12">
          <img src="/img/dots.png" width="75" />
          <div class="text-h4 text-sm-h3 mb-8">
            The Great
            <span class="font-weight-bold">Experience</span>
          </div>
          <v-btn
            x-large
            depressed
            tile
            color="info"
            class="px-12"
            height="65"
            to="/contact"
            >Contact Us Today</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  props: ["img"],
};
</script>

<style></style>

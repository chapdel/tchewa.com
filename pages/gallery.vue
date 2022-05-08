<template>
  <section>
    <v-container class="py-12">
      <h2 class="mb-4 text-center">
        Discover beautifull views and outdoor activities in our world.
      </h2>
      <v-row class="hidden-xs-only">
        <v-col class="col-4">
          <div v-for="(x, i) in gallery" :key="i">
            <v-img
              v-if="i % 3 == 0"
              :src="`/img/gallery/${x}.jpg`"
              class="mb-6"
            />
          </div>
        </v-col>
        <v-col class="col-4">
          <div v-for="(x, i) in gallery" :key="i">
            <v-img
              v-if="i % 3 == 1"
              :src="`/img/gallery/${x}.jpg`"
              class="mb-6"
            />
          </div>
        </v-col>
        <v-col class="col-4">
          <div v-for="(x, i) in gallery" :key="i">
            <v-img
              v-if="i % 3 == 2"
              :src="`/img/gallery/${x}.jpg`"
              class="mb-6"
            />
          </div>
        </v-col>
      </v-row>
      <v-row dense class="d-sm-none">
        <v-col class="col-6">
          <div v-for="(x, i) in gallery" :key="i">
            <v-img
              v-if="i % 2 == 0"
              :src="`/img/gallery/${x}.jpg`"
              class="rounded-lg bordered mb-4"
            />
          </div>
        </v-col>
        <v-col class="col-6">
          <div v-for="(x, i) in gallery" :key="i">
            <v-img
              v-if="i % 2 == 1"
              :src="`/img/gallery/${x}.jpg`"
              class="rounded-lg bordered mb-4"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <LiveFully img="/img/hero/DSC05600.jpg" />
  </section>
</template>

<script>
export default {};
</script>

<style></style>

<template>
  <div>
    <v-btn :ripple="false" icon class="bg-alt" @click="sheet = !sheet">
      <v-icon size="22" color="primary">fa-circle-plus</v-icon>
    </v-btn>
    <v-bottom-sheet
      v-model="sheet"
      overlay-color="#000000"
      overlay-opacity="0.75"
    >
      <v-sheet class="rounded-t-md">
        <div class="place-center pa-2">
          <v-card height="4" width="45" class="rounded-xl accent" />
        </div>
        <div class="px-4 text-h6">Create</div>
        <div class="pb-2">
          <v-card
            flat
            tile
            v-for="(val, key) in $posts"
            :key="key"
            :to="`/create/${key}`"
            class="d-flex align-center pl-4 transparent"
          >
            <v-avatar size="40" class="mr-4 variant">
              <v-icon color="grey" size="18">
                {{ key | icon }}
              </v-icon>
            </v-avatar>
            <div class="pr-3 text-subtitle-2 py-4 w100">
              {{ $t(val.create) | capitalize }}
            </div>
          </v-card>
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  props: {
    icon: Boolean,
  },
  data() {
    return {
      sheet: false,
    };
  },
};
</script>

<style></style>

<template>
  <div @click="liked = !liked">
    <v-btn
      small
      text
      v-if="sm"
      :color="liked ? 'info' : 'primary'"
      class="text-caption font-weight-medium px-2"
    >
      <v-icon size="16">
        mdi-thumb-up{{ liked ? "" : "-outline" }} mr-1 flipY
      </v-icon>
      {{ likes }}
    </v-btn>
    <v-card
      v-else
      :ripple="false"
      tile
      flat
      class="place-center pa-3 transparent"
    >
      <div class="text-center">
        <v-icon :color="liked ? 'info' : 'primary'">
          mdi-thumb-up{{ liked ? "" : "-outline" }} flipY
        </v-icon>
        <div class="text-nowrap text--disabled text-11">
          <span class="_bold" :class="liked ? 'info--text' : 'primary--text'">
            {{ likes }}
          </span>
          <span :class="liked ? 'info--text' : 'primary--text'"> likes </span>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    type: String,
    sm: Boolean,
  },
  data() {
    return {
      liked: false,
      likes: this.item.activities.likes,
    };
  },
  watch: {
    liked(newValue, oldValue) {
      if (newValue) return this.likes++;
      return this.likes--;
    },
  },
};
</script>

<style></style>

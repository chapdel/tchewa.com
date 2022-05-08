<template>
  <section>
    <div v-if="input">
      <div class="text-subtitle-1">Select star rating below</div>
      <div class="d-flex align-center ml-n1">
        <span
          class="pointer"
          v-for="x in 5"
          :key="'stars-' + x"
          @click="save(x)"
        >
          <v-icon :size="input_size" :color="value >= x ? 'info' : neutral">
            mdi-star-box
          </v-icon>
        </span>
      </div>
      <div class="text-subtitle-2 _bold">
        {{ review }}
      </div>
    </div>
    <v-card
      v-else
      tile
      flat
      color="transparent"
      :height="parseInt(rating_size)"
      :width="parseInt(rating_size) * 5"
      class="rating-read"
    >
      <span class="_content">
        <v-icon
          :size="rating_size"
          :color="neutral"
          v-for="x in 5"
          :key="`read-${x}`"
        >
          mdi-star-box
        </v-icon>
        <span
          class="active"
          :style="`width:${Math.floor((parseFloat(rating) / 5) * 100)}%;`"
        >
          <v-icon
            :size="rating_size"
            v-for="x in 5"
            :key="`read-stars-${x}`"
            :color="color || 'info'"
          >
            mdi-star-box
          </v-icon>
        </span>
      </span>
    </v-card>
  </section>
</template>

<script>
export default {
  props: {
    size: undefined,
    input: Boolean,
    value: undefined,
    color: undefined,
  },
  data() {
    return {
      selected: "",
      rating: this.value || 0,
      rating_size: this.size || 20,
      input_size: this.size || 40,
    };
  },
  computed: {
    review() {
      let val = this.value;
      if (val == 1) return "Very poor";
      if (val == 2) return "Poor";
      if (val == 3) return "Good";
      if (val == 4) return "Very Good";
      if (val == 5) return "Excellent";
      return "";
    },
  },
  methods: {
    save(x) {
      this.$emit("input", x);
    },
  },
};
</script>

<style lang="scss" scoped>
.rating-read {
  position: relative;
  margin-top: -2px;
  margin-left: -2px;
  ._content {
    position: absolute;
    display: flex;
    top: 0px;
    left: 0;
    span {
      position: absolute;
      display: flex;
      white-space: nowrap;
      overflow: hidden;
      top: 0px;
      left: 0;
    }
  }
}
</style>

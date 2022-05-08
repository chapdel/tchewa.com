<template>
  <div class="d-flex">
    <v-avatar
      :size="size"
      class="grey img-cover"
      :class="{ 'rounded-lg': tile }"
      :style="`background-image:url('/img/${store ? 'store' : 'avatar'}.png')`"
    >
      <v-avatar
        :size="size"
        class="img-cover"
        :class="{ 'rounded-lg': tile }"
        :style="`background-image:url('${URL}');`"
      >
        <v-avatar
          v-if="text && !URL"
          :size="size"
          :color="text | abbr | color"
          class="white--text text-uppercase _bold img-cover"
          :class="{ 'rounded-lg': tile }"
          :style="`font-size:${(size * 3) / 5}px;`"
        >
          <span v-if="text"> {{ text | abbr }} </span>
        </v-avatar>
      </v-avatar>
    </v-avatar>
  </div>
</template>

<script>
// v-else-if="text"

export default {
  props: {
    size: {
      default: 48,
      type: Number,
    },
    img: String,
    text: String,
    avatar: String,
    tile: Boolean,
    store: Boolean,
  },
  computed: {
    URL() {
      const url = this.img || this.avatar || "";
      if (!url) return "";
      if (url.includes("http://") || url.includes("https://")) return url;
      return `${this.api}/uploads/200x200/${url}`;
    },
  },
};
</script>

<style></style>

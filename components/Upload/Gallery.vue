<template>
  <section>
    <input
      type="file"
      ref="file"
      @change="upload($event)"
      :accept="imageTypes"
      class="d-none"
      multiple
    />
    <v-card
      tile
      flat
      :ripple="false"
      class="pa-3"
      :class="{ 'rounded-lg': rounded }"
    >
      <div class="px-1 pb-2 text-body-2 _bold info--text">
        {{ $t(label) | capitalize }}
      </div>
      <v-row dense class="">
        <v-col cols="4" v-for="(x, i) in gallery" :key="i">
          <UploadPreview
            v-model="gallery[i]"
            :index="i"
            @delete="gallery.splice($event, 1)"
            :pid="pid"
          />
        </v-col>
        <v-col cols="4" v-if="gallery.length < 9">
          <UploadPreview input @click="$refs.file.click()" />
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>
<script>
export default {
  props: {
    pid: String,
    value: Array,    rounded: Boolean,
    border: Boolean,
    label: String,
  },
  model: {
    event: "change",
    prop: "value",
  },
  data() {
    return {
      gallery: this.value,
    };
  },
  watch: {
    gallery(newValue, oldValue) {
      this.$emit("change", newValue);
    },
  },
  methods: {
    upload(ev) {
      const files = ev.target.files;
      if (!files.length) return;
      for (const file of files) {
        if (this.gallery.length < 9) this.gallery.push(file);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

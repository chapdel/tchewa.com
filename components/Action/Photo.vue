<template>
  <sm-modal label="add-photo" transparent>
    <template slot="activator">
      <action-btn
        :type="type"
        icon="photo"
        text="add-photo"
        block
        regular
        :info="info"
      >
        <slot />
      </action-btn>
    </template>
    <template slot="content">
      <div
        class="px-1 d-grid"
        style="grid-template-columns: 1fr 1fr 1fr; grid-gap: 4px"
      >
        <upload-photo
          v-for="(x, i) in photos"
          :key="i"
          :index="i"
          :item="item"
          :value="x"
          @delete="photos.splice($event, 1)"
        />
        <v-responsive :aspect-ratio="1">
          <v-card
            tile
            flat
            class="h100 variant place-center"
            @click="$refs.file.click()"
          >
            <div class="text-center">
              <v-icon size="48"> fa-light fa-circle-camera </v-icon>
              <div class="text-caption mt-2 text--secondary">Select photos</div>
            </div>
          </v-card>
        </v-responsive>
      </div>
      <input
        type="file"
        ref="file"
        @change="upload($event)"
        :accept="imageTypes"
        class="d-none"
        multiple
      />
    </template>
  </sm-modal>
</template>

<script>
export default {
  props: {
    item: Object,
    type: String,
    info: Boolean,
  },
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    upload(ev) {
      const files = ev.target.files;
      if (!files.length) return;
      for (const file of files) {
        this.photos.push(file);
      }
    },
  },
};
</script>

<style></style>

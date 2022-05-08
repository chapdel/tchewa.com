<template>
  <div>
    <section>
      <sm-company
        v-model="post.company"
        class="mb-3"
        rounded
        label="posted-by"
        v-if="!edit"
      />
      <UploadGallery
        label="photos-gallery"
        v-model="post.media.gallery"
        rounded
        class="mb-3"
        :ratio="4 / 3"
        :pid="post._id"
        v-if="edit"
      />
      <sm-select
        rounded
        category
        class="mb-3"
        type="real-estate"
        v-model="post.cat"
        label="property-type"
      />
      <sm-input v-model="post.title" label="title" rounded class="mb-3" />

      <v-card flat class="rounded-lg bg-alt mb-3 overflow-hidden">
        <sm-input
          v-model="post.price.regular"
          type="number"
          label="price"
          :prefix="$symbol(post.price.currency)"
          :border="post.cat[0] == 'to-let'"
        />
        <sm-select
          prefix="schedule"
          v-model="post.price.schedule"
          rounded
          :items="$posts['real-estate'].schedule"
          v-if="post.cat[0] == 'to-let'"
        />
      </v-card>

      <div v-if="post.cat[0] == 'for-sale'">
        <sm-input
          v-model="post.details.area"
          label="area (square metre)"
          type="number"
          class="mb-3"
          rounded
        />
      </div>

      <div v-if="post.cat[0] == 'to-let'">
        <sm-select
          v-model="post.details.condition"
          rounded
          class="mb-3"
          label="condition"
          :items="$posts['real-estate'].condition"
        />
        <sm-select
          v-model="post.details.amenities"
          rounded
          class="mb-3"
          label="amenities"
          multiple
          :items="$posts['real-estate'].amenities"
        />
        <sm-input
          v-model="post.details.rooms"
          label="number-of-rooms"
          class="mb-3"
          type="number"
          rounded
          v-if="post.cat[1] != 'plot-land'"
        />
      </div>
      <div v-if="post.cat[0] == 'lodging'">
        <sm-select
          v-model="post.details.amenities"
          rounded
          class="mb-3"
          label="amenities"
          multiple
          :items="$posts['real-estate'].lodging_amenities"
        />
        <sm-select
          v-model="post.details.amenities"
          rounded
          class="mb-3"
          label="room_facilities"
          multiple
          :items="$posts['real-estate'].room_facilities"
        />
        <sm-select
          v-model="post.details.rating"
          rounded
          class="mb-3"
          label="ratings"
          :items="$posts['real-estate'].rating"
        />
        <sm-input
          v-model="post.desc"
          textarea
          label="description"
          class="mb-3"
          rounded
        />
      </div>
      <sm-input
        v-model="post.details.website"
        rounded
        class="mb-3"
        label="website"
        hint="begin with https:// or http://"
      />
      <sm-location v-model="post.location" label="location" class="mb-3" />
      <v-btn
        block
        large
        depressed
        height="48"
        :ripple="false"
        :loading="loading"
        class="text-none text-subtitle-1 rounded-lg info"
        @click="$update()"
        v-if="edit"
      >
        update
      </v-btn>
      <v-btn
        block
        large
        depressed
        height="48"
        :ripple="false"
        :loading="loading"
        class="text-none text-subtitle-1 rounded-lg info"
        @click="$create()"
        v-else
      >
        Continue
      </v-btn>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    edit: Boolean,
  },
  model: {
    prop: "item",
    event: "change",
  },
  watch: {
    $slug(newValue) {
      this.$set_slug(newValue);
    },
  },
  computed: {},
  data() {
    return {
      cat: [],
      loading: false,
      post: this.item,
    };
  },
};
</script>

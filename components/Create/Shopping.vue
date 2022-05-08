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
      <sm-input v-model="post.title" label="title" rounded class="mb-3" />
      <sm-select
        rounded
        category
        class="mb-3"
        type="shopping"
        v-model="post.cat"
        label="category"
      />
      <sm-select
        label="vehicle-type"
        v-model="post.details.vehicle"
        class="mb-3"
        rounded
        multiple
        :items="$posts.shopping.vehicles"
        v-if="post.cat.length && post.cat[0].includes('vehicle')"
      />
      <div v-if="post.cat.length && !post.cat[0].includes('food')">
        <sm-select
          label="condition"
          v-model="post.details.condition"
          class="mb-3"
          rounded
          :items="$posts.shopping['condition']"
        />
        <sm-input
          v-model="post.details.brand"
          rounded
          class="mb-3"
          label="brand-name"
        />
        <sm-input
          v-model="post.details.model"
          rounded
          class="mb-3"
          label="series"
        />
      </div>
      <v-card flat class="rounded-lg bg-alt mb-3 overflow-hidden">
        <sm-input
          v-model="post.price.regular"
          type="number"
          label="price"
          :prefix="`${$t('regular')} (${$symbol(post.price.currency)})`"
          border
        />
        <sm-input
          v-model="post.price.discount"
          type="number"
          :prefix="`${$t('discount')} (%)`"
        />
      </v-card>
      <sm-select
        label="delivery"
        v-model="post.details.delivery"
        class="mb-3"
        rounded
        multiple
        :items="$posts.shopping['delivery']"
      />
      <div v-if="post.cat.length && post.cat[0].includes('fashion')">
        <sm-select
          label="gender"
          v-model="post.details.gender"
          class="mb-3"
          rounded
          multiple
          :items="$posts.shopping['gender']"
        />
        <sm-select
          label="color"
          v-model="post.details.color"
          class="mb-3"
          rounded
          color
        />
        <sm-tags
          v-model="post.details.size"
          class="mb-3"
          action="add-a-size"
          label="sizes"
          rounded
        />
      </div>
      <sm-input
        v-model="post.desc"
        textarea
        label="description"
        class="mb-3"
        rounded
      />
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
      loading: false,
      post: this.item,
    };
  },
};
</script>

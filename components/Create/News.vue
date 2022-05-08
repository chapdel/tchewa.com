<template>
  <section>
    <sm-company
      v-model="post.company"
      v-if="!edit"
      class="mb-3"
      rounded
      label="posted-by"
    />
    <UploadCover
      v-if="edit"
      :pid="post._id"
      label="main-photo"
      rounded
      class="mb-3"
      v-model="post.media.cover"
    />
    <sm-input v-model="post.title" label="title" rounded class="mb-3" />
    <sm-select
      rounded
      category
      class="mb-3"
      type="news"
      v-model="post.cat"
      label="category"
    />
    <sm-select
      label="language"
      v-model="post.details.language"
      class="mb-3"
      rounded
      :items="$store.state.settings.langs.map((el) => el + '-lang')"
    />
    <sm-input
      v-model="post.details.website"
      rounded
      class="mb-3"
      label="website"
      hint="begin with https:// or http://"
    />
    <sm-location v-model="post.location" label="location" class="mb-3" city />
    <sm-input
      v-model="post.desc"
      textarea
      label="article"
      class="mb-3"
      rounded
    />
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
  data() {
    return {
      loading: false,
      post: this.item,
    };
  },
  methods: {},
};
</script>

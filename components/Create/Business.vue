<template>
  <div>
    <Error v-model="error" />
    <UploadAvatar
      label="logo"
      v-model="post.media.avatar"
      store
      tile
      rounded
      class="mb-3"
      v-if="edit"
      :pid="post._id"
    />
    <UploadCover
      label="cover-photo"
      v-model="post.media.cover"
      rounded
      class="mb-3"
      v-if="edit"
      :pid="post._id"
    />
    <sm-input v-model="post.title" label="business-name" rounded class="mb-3" />
    <sm-sector v-model="post.cat" class="mb-3" />
    <sm-input
      v-model="post.desc"
      textarea
      maxlength="160"
      label="tagline"
      class="mb-3"
      placeholder="about your company"
      rounded
    />
    <sm-phone v-model="post.contact.phone" class="mb-3" hint="" />
    <sm-input v-model="post.contact.email" label="email" class="mb-3" rounded />
    <sm-input
      v-model="post.contact.website"
      rounded
      class="mb-3"
      label="website"
      hint="begin with https:// or http://"
    />
    <sm-select
      v-model="post.details.currency"
      label="currency"
      rounded
      class="mb-3"
      currency
    />
    <sm-select
      v-model="post.details.payments"
      rounded
      class="mb-3"
      label="payment-methods"
      multiple
      :items="posts['payments']"
    />
    <sm-select
      v-model="post.details.languages"
      label="we-speak"
      rounded
      class="mb-3"
      language
    />
    <sm-select
      v-model="post.details.size"
      label="size"
      rounded
      class="mb-3"
      :items="size"
    />
    <sm-select
      v-model="post.details.ownership"
      label="ownership"
      rounded
      class="mb-3"
      :items="ownership"
    />
    <sm-select
      v-model="post.details.amenities"
      rounded
      class="mb-3"
      label="amenities"
      multiple
      :items="posts['amenities']"
      v-if="post.cat.map((el) => el.cat).includes('accommodation')"
    />
    <sm-tags
      v-model="post.details.services"
      class="mb-3"
      action="add-a-service"
      label="services"
      rounded
    />
    <sm-location v-model="post.location" label="location" class="mb-3" />
    <sm-geo-location v-model="post.location.geo" />
    <v-card flat class="rounded-lg mb-3 overflow-hidden bg-alt">
      <div class="info--text text-caption _medium pl-4 pt-1">
        {{ $t("opening-hours") | capitalize }}
      </div>
      <sm-hour
        v-model="post.details.hours[day]"
        :day="day"
        v-for="(x, day, i) in post.details.hours"
        :key="i"
      />
    </v-card>
    <sm-social v-model="post.details.social" class="mb-3" />
    <div class="mb-3 d-flex align-center px-1" v-if="success">
      <v-icon small left color="success"> fa-circle-check </v-icon>
      <div class="text-body-2">Page updated!</div>
    </div>
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
  created() {
    if (this.edit) this.post = this.item;
  },
  data() {
    return {
      loading: false,
      error: 0,
      success: false,
      post: this.item,
      amenities: [
        "AC",
        "heating",
        "douche",
        "fence",
        "WiFi",
        "security",
        "gardens",
        "swimming-pool",
        "kitchen",
        "courtyard",
        "parking-garage",
        "gym",
        "tile",
        "marble",
        "laundry",
        "furnished",
        "balcony",
      ],
      size: [
        "small-business",
        "medium-business",
        "large-business",
        "cooperation",
      ],
      ownership: [
        "public-company",
        "self-employed",
        "nonprofit",
        "sole-proprietorship",
        "private-company",
        "partnership",
        "goverment-agency",
        "parastatal",
      ],
    };
  },
  watch: {
    $slug(newValue) {
      this.$set_slug(newValue);
    },
  },
  computed: {
    posts() {
      return this.$posts["business"];
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped></style>

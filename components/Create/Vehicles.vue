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
        label="transaction-type"
        v-model="post.details.transaction"
        rounded
        class="mb-3"
        :items="$posts['vehicles'].transaction"
      />
      <sm-input v-model="post.title" label="title" rounded class="mb-3" />
      <sm-select
        rounded
        category
        class="mb-3"
        type="vehicles"
        v-model="post.cat"
        label="vehicle-type"
      />
      <sm-input
        v-model="post.details.brand"
        rounded
        class="mb-3"
        label="Make"
      />
      <sm-input
        v-model="post.details.model"
        rounded
        class="mb-3"
        label="model"
      />

      <v-card flat class="rounded-lg bg-alt mb-3 overflow-hidden">
        <sm-input
          v-model="post.price.regular"
          type="number"
          label="price"
          :prefix="$symbol(post.price.currency)"
          :border="post.details.transaction == 'to-rent'"
        />
        <sm-select
          prefix="schedule"
          v-model="post.price.schedule"
          rounded
          :items="$posts['vehicles'].schedule"
          v-if="post.details.transaction == 'to-rent'"
        />
      </v-card>
      <sm-select
        v-model="post.details.condition"
        rounded
        class="mb-3"
        label="condition"
        :items="$posts['vehicles'].condition"
      />
      <div
        v-if="
          post.cat.length &&
          ['cars', 'motorcycles', 'trucks', 'caravan'].includes(post.cat[0])
        "
      >
        <sm-select
          v-model="post.details.transmission"
          rounded
          class="mb-3"
          label="transmission"
          :items="$posts['vehicles'].transmission"
        />
        <sm-select
          v-model="post.details.amenities"
          rounded
          class="mb-3"
          label="amenities"
          multiple
          :items="$posts['vehicles'].amenities"
        />
        <sm-select
          v-model="post.details.fuel"
          rounded
          class="mb-3"
          label="fuel-type"
          :items="$posts['vehicles'].fuel"
        />
        <v-row dense>
          <v-col class="col-6">
            <sm-input
              v-model="post.details.year"
              label="year-of-manufacture"
              class="mb-1"
              type="number"
              rounded
            />
          </v-col>
          <v-col class="col-6">
            <sm-input
              v-model="post.details.mileage"
              label="mileage (km)"
              type="number"
              class="mb-1"
              rounded
            />
          </v-col>
          <v-col class="col-6" v-if="post.cat.includes('cars')">
            <sm-input
              v-model="post.details.doors"
              label="door-count"
              class="mb-3"
              type="number"
              rounded
            />
          </v-col>
          <v-col class="col-6" v-if="post.cat.includes('cars')">
            <sm-input
              v-model="post.details.seats"
              label="seat-count"
              class="mb-3"
              type="number"
              rounded
            />
          </v-col>
        </v-row>
      </div>

      <sm-select
        label="color"
        v-model="post.details.color"
        class="mb-3"
        rounded
        color
      />

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
  computed: {
    type() {
      return this.$route.params.type;
    },
  },
  data() {
    return {
      loading: false,
      post: this.item,
    };
  },
};
</script>

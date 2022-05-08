<template>
  <div>
    <section>
      <sm-company
        v-model="post.company"
        class="mb-3"
        rounded
        label="organised-by"
        v-if="!edit"
      />
      <UploadCover
        v-if="edit"
        :pid="post._id"
        label="event-photo"
        rounded
        class="mb-3"
        v-model="post.media.cover"
      />
      <sm-input v-model="post.title" label="event-name" rounded class="mb-3" />
      <sm-select
        label="event-type"
        v-model="post.details.attendance"
        class="mb-3"
        rounded
        :items="$post['attendance']"
      />
      <sm-select
        rounded
        category
        class="mb-3"
        type="events"
        v-model="post.cat"
        label="category"
      />
      <sm-registration
        v-model="post.details.registration"
        rounded
        class="mb-3"
        :currency="$symbol(post.price.currency)"
      />
      <v-card flat class="rounded-lg mb-3 overflow-hidden bg-alt">
        <div class="info--text text-caption _medium pl-4 pt-1">
          {{ $t("start-date-time") | capitalize }}
        </div>
        <sm-input
          v-model="post.details.starts.date"
          type="date"
          prefix="date"
          border
        />
        <sm-input
          v-model="post.details.starts.time"
          type="time"
          prefix="time"
        />
      </v-card>
      <v-card flat class="rounded-lg mb-3 overflow-hidden bg-alt">
        <div class="info--text text-caption _medium pl-4 pt-1">
          {{ $t("end-date-time") | capitalize }}
        </div>
        <sm-input
          v-model="post.details.ends.date"
          type="date"
          prefix="date"
          border
        />
        <sm-input v-model="post.details.ends.time" type="time" prefix="time" />
      </v-card>
      <sm-input
        v-model="post.details.website"
        rounded
        class="mb-3"
        label="registration-link"
        hint="begin with https:// or http://"
      />
      <sm-schedule v-model="post.details.schedule" class="mb-3" rounded />
      <sm-input
        v-model="post.desc"
        textarea
        label="about-event"
        class="mb-3"
        rounded
      />
      <sm-input
        v-model="post.details.venue"
        label="venue"
        rounded
        class="mb-n3"
        v-if="post.details.attendance == 'in-person'"
      />
      <sm-location   v-if="post.details.attendance == 'in-person'" v-model="post.location" label="address" class="mb-3" />
      <sm-guests v-model="post.details.guests" class="mb-3" rounded />
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
    $post() {
      return this.$posts["events"];
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

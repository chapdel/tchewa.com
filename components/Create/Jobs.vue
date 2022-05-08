<template>
  <div>
    <sm-company
      v-if="!edit"
      v-model="post.company"
      class="mb-3"
      rounded
      label="posted-by"
    />
    <sm-input v-model="post.title" label="job-title" rounded class="mb-3" />
    <sm-select
      rounded
      category
      class="mb-3"
      type="jobs"
      v-model="post.cat"
      label="job-type"
    />
    <v-card flat class="rounded-lg mb-3 overflow-hidden bg-alt">
      <sm-input
        v-model="post.price.regular"
        type="number"
        label="salary-details"
        :prefix="$symbol(post.price.currency)"
        placeholder="average-salary"
        border
      />
      <sm-select
        v-model="post.price.schedule"
        prefix="schedule"
        :items="$post['salary']"
      />
    </v-card>
    <sm-select
      label="format"
      v-model="post.details.format"
      class="mb-3"
      rounded
      multiple
      :items="$post['format']"
    />
    <sm-select
      label="experience-level"
      v-model="post.details.experience"
      class="mb-3"
      rounded
      :items="$post['experience']"
      multiple
    />
    <v-card flat class="rounded-lg mb-3 overflow-hidden bg-alt">
      <div class="info--text text-caption _medium pl-4 pt-1">
        {{ $t("employment-duration") | capitalize }}
      </div>
      <v-row dense class="pa-4 pt-2">
        <v-col>
          <sm-input
            v-model="post.details.duration.period"
            type="number"
            placeholder="period"
            rounded
            :background-color="$bg"
          />
        </v-col>
        <v-col>
          <sm-select
            v-model="post.details.duration.format"
            :items="$post['duration']"
            rounded
            :background-color="$bg"
          />
        </v-col>
      </v-row>
    </v-card>
    <v-card flat class="rounded-lg mb-3 overflow-hidden bg-alt">
      <div class="info--text text-caption _medium pl-4 pt-1">
        {{ $t("important-dates") | capitalize }}
      </div>
      <sm-input
        v-model="post.details.starts"
        type="date"
        prefix="start-date"
        border
      />
      <sm-input
        v-model="post.details.deadline"
        type="date"
        prefix="apply-date"
      />
    </v-card>
    <sm-select
      label="working-language"
      v-model="post.details.languages"
      class="mb-3"
      rounded
      language
    />
    <sm-input
      v-model="post.details.website"
      rounded
      class="mb-3"
      label="job-website"
      hint="begin with https:// or http://"
    />
    <sm-location v-model="post.location" label="work-location" class="mb-3" />
    <sm-tags
      v-model="post.details.qualifications"
      class="mb-3"
      action="add-a-qualification"
      label="qualifications"
      rounded
    />
    <sm-tags
      v-model="post.details.responsibilities"
      class="mb-3"
      action="add-a-responsibility"
      label="responsibilities"
      rounded
    />
    <sm-input
      v-model="post.desc"
      textarea
      label="about-the-job"
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
      return this.$posts["jobs"];
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

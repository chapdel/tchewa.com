<template>
  <div>
    <action-login v-if="!($is_auth || loggedIn)" @login="loggedIn = true">
      <action-btn
        :type="type"
        icon="review"
        text="write-a-review"
        block
        regular
        :info="info"
      >
        <slot />
      </action-btn>
    </action-login>
    <sm-modal v-else label="write-a-review" transparent close-text="cancel">
      <template slot="activator">
        <action-btn
          :type="type"
          icon="review"
          text="write-a-review"
          block
          regular
          :info="info"
        >
          <slot />
        </action-btn>
      </template>
      <template slot="content">
        <form @submit.prevent="submit" class="pa-4">
          <h2 class="_black text-h5 mb-3 text-nowrap">
            {{ review.title }}
          </h2>
          <v-card flat class="rounded-lg neutral pa-3 mb-3">
            <action-ratings input v-model="review.details.rating" :size="45" />
          </v-card>
          <v-card flat class="rounded-lg neutral pa-3">
            <div class="text--secondary mb-n8" v-if="!review.desc">
              Share your experience
            </div>
            <div class="w100 overflow-hidden">
              <v-textarea
                solo
                flat
                dense
                auto-grow
                v-model="review.desc"
                background-color="transparent"
                class="mb-n6 ml-n3 tounded-0"
              />
            </div>
          </v-card>
          <div class="pa-1 pb-4 text-11 text--secondary">
            Review needs to be atleast 85 characters.
          </div>
          <v-btn
            large
            block
            :ripple="false"
            :loading="loading"
            type="submit"
            :disabled="!(review.desc.length > 85 && review.details.rating)"
            class="text-none text-subtitle-1 info rounded-lg"
          >
            Post review
          </v-btn>
        </form>
      </template>
    </sm-modal>
    <v-snackbar v-model="snackbar" top :color="variant" :elevation="0">
      <span :class="`${text_color}--text _medium`">
        {{ text }}
      </span>
    </v-snackbar>
  </div>
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
      loggedIn: false,
      snackbar: false,
      text: "",
      text_color: "",
      primary: "",
      review: {
        author: this.$author(),
        company: {
          id: this.item._id,
          name: this.item.title,
          avatar: this.item.media.avatar,
        },
        type: "review",
        title: this.item.title,
        desc: "",
        details: {
          rating: null,
        },
        activities: {
          likes: 0,
          dislikes: 0,
        },
        reply: {
          body: "",
          date: "",
          uid: "",
        },
      },
      loading: false,
    };
  },
  watch: {
    snackbar(newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          this.snackbar = false;
          this.text = "";
          this.text_color = "primary";
        }, 6000);
      }
    },
  },
  methods: {
    async submit() {
      const token = this.$cookies.get("access_token");
      if (!token) return (this.error = 403);
      try {
        this.loading = true;
        const { data } = await this.$axios.post(
          "/activities/review",
          this.review,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (data) {
          this.text = "Review summitted!";
          this.snackbar = true;
          this.review.desc = "";
          this.review.details.rating = null;
          this.loading = false;
        }
      } catch (error) {
        this.text = "An error occurred. Please try again!";
        this.text_color = "error";
        this.snackbar = true;
        this.loading = false;
        console.log(error);
      }
    },
  },
};
</script>

<style></style>

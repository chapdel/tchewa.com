<template>
  <div>
    <sm-modal closeText="cancel" v-model="menu" transparent>
      <template slot="activator">
        <action-btn :type="type" icon="message" text="message" block regular>
          <slot />
        </action-btn>
      </template>
      <template slot="action">
        <div class="pt-1 pr-3 d-flex">
          <v-btn
            fab
            small
            depressed
            :disabled="disabled"
            color="info"
            :loading="loading"
            @click="submit"
          >
            <v-icon> fa-{{ success ? "check" : "arrow-up" }} </v-icon>
          </v-btn>
        </div>
      </template>
      <template slot="content">
        <v-progress-linear
          color="info"
          rounded
          :active="loading"
          :indeterminate="loading"
        />
        <h1 class="mt-3 px-4 _black">{{ title }}</h1>
        <v-card
          flat
          :color="alternate"
          class="rounded-xl py-1 px-4 overflow-hidden text-14 mb-3"
        >
          <div class="d-flex align-center border-bottom">
            <div
              style="min-width: 65px; height: 48px"
              class="text--secondary d-flex align-center pr-2"
            >
              To
            </div>
            <div class="text-body-1 text-nowrap">
              {{ message.details.recipients[0].name }}
            </div>
          </div>
          <sm-sheet label="Select sender's account" closeable>
            <template slot="activator">
              <div class="d-flex align-center border-bottom">
                <div
                  style="min-width: 65px; height: 48px"
                  class="text--secondary d-flex align-center pr-2"
                >
                  From
                </div>
                <div class="text-body-1 text-nowrap">
                  {{ message.author.name }}
                </div>
                <v-spacer />
                <div style="height: 48px" class="place-center pr-1">
                  <v-icon small> fa-angle-down </v-icon>
                </div>
              </div>
            </template>
            <template>
              <div class="py-1">
                <div
                  v-for="profile in $profiles()"
                  :key="profile.id"
                  class="py-2 px-4 d-flex align-center"
                  @click="message.author = profile"
                >
                  <Avatar :text="profile.name" :img="profile.avatar" />
                  <div class="px-3 text-nowrap">
                    <div class="text-subtitle-1">
                      {{ $t(profile.name) | capitalize }}
                    </div>
                    <div class="text--secondary mt-n2 text-caption">
                      {{ $t(profile.type) | capitalize }}
                    </div>
                  </div>
                  <v-spacer />
                  <v-icon
                    small
                    v-if="profile.id == message.author.id"
                    color="info"
                  >
                    fa-circle-check
                  </v-icon>
                </div>
              </div>
            </template>
          </sm-sheet>
          <div class="d-flex align-center border-bottom" @click.stop>
            <div
              style="min-width: 65px; height: 48px"
              class="text--secondary d-flex align-center pr-2"
            >
              Subject
            </div>
            <div class="w100 overflow-hidden">
              <v-text-field
                solo
                flat
                dense
                v-model="message.title"
                background-color="transparent"
                class="mb-n6 ml-n3 tounded-0"
              />
            </div>
          </div>
          <div class="pb-3">
            <div class="text--secondary mb-n8 pt-3" v-if="!message.desc">
              Compose message
            </div>
            <div class="w100 overflow-hidden">
              <v-textarea
                solo
                flat
                dense
                auto-grow
                v-model="message.desc"
                background-color="transparent"
                class="mb-n6 ml-n3 tounded-0"
              />
            </div>
          </div>
        </v-card>
      </template>
    </sm-modal>
    <v-snackbar v-model="success" :color="variant" :elevation="0">
      <span class="primary--text _medium"> {{ text }} </span>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    btn: String,
    type: String,
  },
  data() {
    return {
      menu: false,
      loading: false,
      success: false,
      sheet: false,
      title: "Direct message",
      text: "",
      user: {},
      message: {
        author: this.sender(),
        type: "message", //
        group: "inbox",
        title: this.subject(),
        desc: "",
        details: {
          recipients: [this.receiver()],
          pid: this.item._id,
          read: [],
          starred: [],
          spam: [],
          trash: [],
          delete: [],
        },
      },
    };
  },
  computed: {
    disabled() {
      return !(
        this.message.title &&
        this.message.desc &&
        this.message.author.id &&
        this.message.details.recipients.length
      );
    },
  },
  methods: {
    sender() {
      return {
        type: "personal-account",
        ...this.$author(),
      };
    },
    receiver() {
      const { _id, type, company, media, title } = this.item;
      if (!["people", "business"].includes(type)) return company;
      return {
        id: _id,
        name: title,
        avatar: media.avatar,
      };
    },
    subject() {
      const { type, title } = this.item;
      if (!["people", "business"].includes(type)) return title;
      return "";
    },
    async submit() {
      const token = this.$cookies.get("access_token");
      if (!token) return (this.error = 403);
      try {
        this.loading = true;
        const { data } = await this.$axios.post("/messages", this.message, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data) {
          this.text = "Message successfully sent!";
          this.success = true;
          this.loading = false;
          this.clear();
          setTimeout(() => {
            this.success = false;
          }, 6000);
        }
      } catch (error) {
        this.text = "An error occurred. Please try again!";
        this.success = true;
        this.loading = false;
        this.clear();
        setTimeout(() => {
          this.success = false;
        }, 6000);
        console.log(error);
      }
    },
    clear() {
      this.message.desc = "";
    },
  },
};
</script>

<style></style>

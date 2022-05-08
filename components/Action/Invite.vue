<template>
  <v-dialog fullscreen v-model="dialog" transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <action-btn type="large" icon="invite" text="invite" block regular />
      </div>
    </template>
    <div
      style="background: rgba(0, 0, 0, 0.65)"
      @click="dialog = false"
      class="pt-8 h100"
    >
      <v-card
        tile
        flat
        :ripple="false"
        @click.stop
        class="rounded-t-xl h100 flex-col _sm overflow-hidden"
      >
        <div
          style="height: 105px; min-height: 105px"
          class="sticky-top"
          :class="border ? 'border-bottom alternate' : ''"
        >
          <div class="d-flex align-center">
            <div
              @click="dialog = false"
              class="info--text text-subtitle-1 text-nowrap _medium py-3 px-4"
              style="width: 85px"
            >
              Cancel
            </div>
            <v-spacer />
            <h3 class="text-h6 text-nowrap">
              {{ $t("Invite someone") | capitalize }}
            </h3>
            <v-spacer />
            <div class="pa-4" style="width: 85px" />
          </div>
          <div class="px-4">
            <v-text-field
              solo
              flat
              dense
              type="search"
              v-model="text"
              prepend-inner-icon="fa-light fa-search text-20 mr-2"
              :background-color="neutral"
              class="rounded-lg mb-n6"
              placeholder="Search by name or email"
              @input="$search_users()"
            />
          </div>
        </div>
        <div class="scrollY">
          <ObserverTop v-model="border" />
          <section class="px-1 pb-4">
            <v-card
              flat
              :color="variant"
              class="rounded-xl py-1 px-4 overflow-hidden"
            >
              <div v-if="text">
                <Loader v-if="loading" />
                <div v-else-if="items.length">
                  <div v-for="x in items" :key="x.id">
                    <div class="d-flex align-center py-2">
                      <v-avatar size="45" class="bordered">
                        <v-img :src="`${x.image}`" />
                      </v-avatar>
                      <div class="text-nowrap px-3">
                        <div class="text-nowrap mb-n1">
                          {{ x.lastName }} {{ x.firstName }}
                        </div>
                        <div class="text-caption text--secondary text-nowrap">
                          {{ x.email }}
                        </div>
                      </div>
                      <v-spacer />
                      <v-btn
                        @click="set_user(x)"
                        depressed
                        text
                        :ripple="false"
                        class="text-none text-subtitle-2 rounded-lg"
                        :class="
                          user_ids().includes(x.id) ? 'info-lt' : 'secondary'
                        "
                        :color="user_ids().includes(x.id) ? 'info' : 'primary'"
                      >
                        {{
                          $t(user_ids().includes(x.id) ? "invited" : "invite")
                            | capitalize
                        }}
                      </v-btn>
                    </div>
                  </div>
                  <ObserverBottom
                    loader
                    v-if="page < last && meta.total > limit"
                    v-model="intersect"
                  />
                </div>
                <div v-else class="text-h6 pa-4 text-center">
                  No Results Found
                </div>
              </div>
              <div v-else class="text--disabled text-body-1 text-center py-8">
                Please enter something
              </div>
            </v-card>
          </section>
        </div>
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: {
    item: Object,
    type: String,
  },
  data() {
    return {
      attending: false,
      users: [],
      dialog: false,
      loading: false,
      border: false,
      text: "",
      items: [],
      meta: "",
      limit: 12,
      page: 0,
      intersect: false,
    };
  },
  watch: {
    intersect() {
      if (this.intersect) {
        this.$watch_users();
      }
    },
    dialog(newVal) {
      this.$watch_modals(newVal);
    },
  },
  computed: {},
  methods: {
    user_ids() {
      return this.users.map((el) => el.id);
    },
    set_user(val) {
      this.users.push({
        id: val.id,
        name: `${val.lastName} ${val.firstName}`,
        avatar: val.image,
      });
    },
  },
};
</script>

<style></style>

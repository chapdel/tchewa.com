<template>
  <section>
    <input
      type="file"
      ref="file"
      @change="upload($event)"
      :accept="imageTypes"
      class="d-none"
    />
    <v-card
      tile
      flat
      :ripple="false"
      @click="dialog = !dialog"
      class="bg-alt d-flex align-center pa-2 pr-3"
      :class="{ 'rounded-lg': rounded }"
    >
      <div class="px-4 text-body-2">
        {{ $t(label) | capitalize }}
      </div>
      <v-spacer />
      <Avatar
        :store="store"
        :img="image"
        :size="42"
        class="mr-1"
        :tile="tile"
      />
      <v-icon x-small color="grey"> fa-light fa-chevron-right </v-icon>
    </v-card>

    <v-dialog
      v-model="dialog"
      width="500"
      overlay-color="#000000"
      overlay-opacity="0.85"
    >
      <v-card class="rounded-md pa-2">
        <div class="pa-2">
          <v-btn icon :ripple="false" @click="dialog = false">
            <v-icon> {{ "close" | icon }} </v-icon>
          </v-btn>
        </div>
        <div class="px-4">
          <h3 class="text-h5 mb-1">
            {{ $t(label) | capitalize }}
          </h3>
          <div class="text-body-2 text--secondary">
            Your {{ $t(label) }} helps people to recognise you or your business.
          </div>
        </div>
        <v-divider class="ma-4" />
        <div class="pa-4 pa-sm-6 d-flex">
          <v-spacer />
          <v-avatar v-if="loading" size="105" :color="$bg">
            <v-progress-circular
              indeterminate
              color="accent"
              :size="45"
              :width="8"
            />
          </v-avatar>
          <Avatar v-else :store="store" :img="image" :tile="tile" :size="105" />
          <v-spacer />
        </div>
        <div class="pa-4 pa-sm-6">
          <v-row dense>
            <v-col>
              <v-btn
                outlined
                text
                block
                class="text-none text-subtitle-2"
                :ripple="false"
                @click="$refs.file.click()"
              >
                <v-icon left small> fa-light fa-pencil </v-icon>
                Change
              </v-btn>
            </v-col>
            <v-col>
              <v-btn
                color="error"
                outlined
                text
                block
                :ripple="false"
                @click="DEL()"
                :disabled="!image"
                class="text-none text-subtitle-2"
              >
                <v-icon left small> fa-light {{ "delete" | icon }} </v-icon>
                Remove
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  props: {
    value: String,
    pid: String,
    rounded: Boolean,
    tile: Boolean,
    border: Boolean,
    store: Boolean,
    label: String,
  },
  data() {
    return {
      loading: false,
      image: this.value,
      file: "",
      dialog: false,
    };
  },
  model: {
    prop: "value",
    event: "change",
  },
  watch: {
    image(newValue, oldValue) {
      this.$emit("change", newValue);
    },
    value(newValue, oldValue) {
      this.image = newValue;
    },
  },
  methods: {
    async upload(ev) {
      const token = this.$cookies.get("access_token");
      if (!token) return;
      try {
        this.loading = true;
        let file = ev.target.files[0];
        if (!file) return (this.loading = false);
        if (this.image) {
          await this.$axios.delete("/uploads/avatar/" + this.image, {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.image = "";
        }
        const fd = new FormData();
        fd.append("image", file);
        fd.append("type", "avatar");
        fd.append("pid", this.pid);
        const { data } = await this.$axios.post("/uploads/avatar/", fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data) {
          this.loading = false;
          this.image = data;
        }
      } catch (error) {
        this.loading = false;
      }
    },
    async DEL() {
      if (!this.image) return;
      const token = this.$cookies.get("access_token");
      if (!token) return;
      try {
        this.loading = true;
        await this.$axios.delete("/uploads/avatar/" + this.image, {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.loading = false;
        this.image = "";
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>

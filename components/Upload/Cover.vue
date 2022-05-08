<template>
  <div>
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
      class="pa-3 pointer bg-alt"
      :class="{ 'rounded-lg': rounded }"
    >
      <div class="px-1 pb-1 text-body-2 _bold info--text">
        {{ $t(label) | capitalize }}
      </div>
      <v-responsive :aspect-ratio="ratio || 2 / 1" class="rounded-lg bordered">
        <div v-if="loading" class="place-center h100">
          <v-progress-circular
            indeterminate
            :size="95"
            :width="16"
            color="accent"
          />
        </div>
        <div
          v-else-if="image"
          class="h100 img-cover text-right pointer pa-1"
          :style="`background-image: url('${api}/uploads/${image}');`"
        >
          <v-btn icon depressed small color="#00000065" @click.stop="DEL()">
            <v-icon color="white" size="24">mdi-close-circle</v-icon>
          </v-btn>
        </div>
        <div class="h100 place-center pointer" v-else>
          <v-icon color="accent" size="55"> fa-light fa-camera </v-icon>
        </div>
      </v-responsive>
    </v-card>

    <v-dialog
      v-model="dialog"
      width="320"
      overlay-color="#000000"
      overlay-opacity="0.95"
    >
      <v-card class="rounded-md overflow-hidden">
        <v-btn
          text
          block
          tile
          height="48"
          :ripple="false"
          class="text-none text-body-2"
          @click="$refs.file.click()"
        >
          Change
        </v-btn>
        <v-btn
          :disabled="!image"
          text
          block
          tile
          height="48"
          :ripple="false"
          class="text-none border-top text-body-2"
          @click="DEL()"
        >
          Remove
        </v-btn>
        <v-btn
          text
          block
          tile
          height="48"
          :ripple="false"
          color="error"
          class="text-none border-top text-subtitle-2"
          @click="dialog = false"
        >
          Cancel
        </v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props: {
    pid: String,
    value: String,
    ratio: Number,
    rounded: Boolean,
    label: String,
  },
  data() {
    return {
      image: this.value,
      loading: false,
      dialog: false,
    };
  },
  model: {
    prop: "value",
    event: "change",
  },
  watch: {
    value(newValue, oldValue) {
      this.image = newValue;
    },
    image(newValue, oldValue) {
      this.$emit("change", newValue);
    },
  },
  methods: {
    async upload(ev) {
      const token = this.$cookies.get("access_token");
      if (!token) return;

      try {
        this.loading = true;
        this.dialog = false;
        let file = ev.target.files[0];
        if (!file) return (this.loading = false);
        if (this.image) {
          await this.$axios.delete("/uploads/cover/" + this.image, {
            headers: { Authorization: `Bearer ${token}` },
          });
        }

        const fd = new FormData();
        fd.append("image", file);
        fd.append("type", "cover");
        fd.append("pid", this.pid);
        const { data } = await this.$axios.post("/uploads/cover/", fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data) {
          this.loading = false;
          this.$emit("change", data);
        }
      } catch (error) {
        console.log({ message: error.message });
      }
    },
    async DEL() {
      const token = this.$cookies.get("access_token");
      if (!token || !this.image) return;
      try {
        this.loading = true;
        await this.$axios.delete("/uploads/cover/" + this.image, {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.loading = false;
        this.$emit("change", "");
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
};
</script>

<style></style>

<style></style>

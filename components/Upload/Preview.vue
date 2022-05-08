<template>
  <v-responsive :aspect-ratio="1" class="rounded-lg overflow-hidden bordered">
    <div
      v-if="input"
      @click="$emit('click')"
      class="rounded-lg h100 place-center pointer"
    >
      <div class="text-center">
        <v-avatar tile size="40">
          <v-icon color="primary" size="32"> mdi-image-plus </v-icon>
        </v-avatar>
        <div class="text-11 text--secondary mt-1">Add Photo</div>
      </div>
    </div>
    <div v-else-if="loading" class="place-center h100">
      <v-progress-circular
        indeterminate
        :size="76"
        :width="12"
        color="secondary"
      />
    </div>

    <div
      v-else
      class="img-cover h100 pa-1 text-right"
      :style="`background-image: url('${api}/uploads/480x480/${image}');`"
    >
      <v-btn icon small class="secondary" @click="DEL()">
        <v-icon size="22" color="white"> mdi-close-circle </v-icon>
      </v-btn>
    </div>
  </v-responsive>
</template>

<script>
export default {
  props: {
    value: undefined,
    index: Number,
    pid: String,
    input: Boolean,
  },
  model: {
    prop: "value",
    event: "change",
  },
  watch: {
    value(newValue, oldValue) {
      this.image = newValue;
    },
    image() {
      this.$emit("change", this.image);
    },
  },
  data() {
    return {
      image: "",
      loading: false,
    };
  },
  methods: {
    async upload(file) {
      if (!file) return;
      if (typeof file === "string") return (this.image = file);
      const token = this.$cookies.get("access_token");
      if (!token) return;

      try {
        this.loading = true;
        const fd = new FormData();
        fd.append("image", file);
        fd.append("type", "gallery");
        fd.append("pid", this.pid);
        const { data } = await this.$axios.post("/uploads/gallery/", fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data) {
          this.loading = false;
          this.image = data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async DEL() {
      const token = this.$cookies.get("access_token");
      if (!token || !this.image) return;
      this.loading = true;
      try {
        await this.$axios.delete("/uploads/gallery/" + this.image, {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.loading = false;
        this.$emit("delete", this.index);
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },

  mounted() {
    this.upload(this.value);
  },
};
</script>

<style></style>

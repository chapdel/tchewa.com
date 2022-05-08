<template>
  <v-responsive :aspect-ratio="1" class="variant">
    <div v-if="loading" class="place-center h100">
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
    index: Number,
    item: Object,
    value: undefined,
  },
  data() {
    return {
      image: "",
      loading: true,
      post: {
        group: "photos",
        type: "photos",
        title: this.item.title,
        company: { id: this.item._id },
        author: this.$author(),
        activities: { likes: 0, dislikes: 0 },
      },
    };
  },
  methods: {
    async upload(file) {
      if (!file) {
        alert("Select a valid file!");
        this.loading = false;
        return;
      }
      const token = this.$cookies.get("access_token");
      if (!token) {
        alert("Unauthorized");
        this.loading = false;
        return;
      }

      try {
        const fd = new FormData();
        fd.append("image", file);
        fd.append("pid", this.item._id);
        fd.append("post", JSON.stringify(this.post));
        const { data } = await this.$axios.post("/uploads/photos/", fd, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data) {
          this.loading = false;
          this.image = data;
        }
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async DEL() {
      const token = this.$cookies.get("access_token");
      if (!token || !this.image) return;
      this.loading = true;
      try {
        await this.$axios.delete("/uploads/photos/" + this.image, {
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

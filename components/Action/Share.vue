<template>
  <div @click="Share()">
    <action-btn
      :type="type"
      icon="share"
      text="share"
      block
      regular
      :info="info"
    >
      <slot />
    </action-btn>
  </div>
</template>

<script>
import { Share } from "@capacitor/share";
export default {
  props: {
    item: Object,
    type: String,
    info: Boolean,
  },
  methods: {
    async Share() {
      await Share.share({
        title: this.item.title || this.item.slug,
        text: this.item.title || this.item.slug,
        // text: this.item.desc.slice(0, 160),
        url:
          this.item.type == "photo"
            ? `${this.api}/uploads/${this.item._id}`
            : `https://snap-citi.web.app/${this.item.slug}`,
        dialogTitle: "Share with friends",
      });
    },
  },
};
</script>

<style></style>

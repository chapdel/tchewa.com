<template>
  <div @click="saved = !saved">
    <action-btn
      :type="type"
      icon="save"
      :text="saved ? 'saved' : 'save'"
      block
      :info="!saved && type=='icon'"
      :error="saved"
      :regular="!saved"
      :solid="saved"
    >
      <slot />
    </action-btn>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    type: String,
  },
  data() {
    return {
      saved: false,
    };
  },
};
</script>

<style></style>

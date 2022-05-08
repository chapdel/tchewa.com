<template>
  <div @click="attending = !attending">
    <action-btn
      type="large"
      :icon="attending ? 'attending' : 'attend'"
      :text="attending ? 'attending' : 'attend'"
      block
      :info="attending"
      :regular="!attending"
      :solid="attending"
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
      attending: false,
    };
  },
};
</script>

<style></style>

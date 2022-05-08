<template>
  <a :href="`tel:${phone.code}${phone.tel}`" class="text-none">
    <action-btn
      :type="type"
      icon="call"
      text="call"
      block
      regular
      :disabled="!phone.tel"
    >
      <slot />
    </action-btn>
  </a>
</template>

<script>
export default {
  props: {
    phone: Object,
    type: String,
  },
};
</script>

<style></style>

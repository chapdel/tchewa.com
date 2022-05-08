<template>
  <div>
    <v-btn icon large color="white" :ripple="false" to="/cart">
      <v-badge :content="content" color="error" overlap>
        <v-icon large> mdi-cart-outline </v-icon>
      </v-badge>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    content() {
      return "0";
    },
  },
};
</script>

<style></style>

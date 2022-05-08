<template>
  <sm-modal label="sign-in" nofixed close-text="cancel" v-model="dialog" transparent>
    <template slot="activator">
      <slot />
    </template>
    <template slot="content">
      <Login @login="login" />
    </template>
  </sm-modal>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    login() {
      this.dialog = false;
      this.$emit("login");
    },
  },
};
</script>

<style></style>

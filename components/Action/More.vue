<template>
  <sm-sheet :label="item.title" v-model="dialog" noheader bottom>
    <template slot="activator">
      <action-btn
        :type="type"
        icon="more"
        text="more"
        block
        regular
        :info="info"
      >
        <slot />
      </action-btn>
    </template>
    <template>
      <action-share :item="item" type="x-large" />
      <v-divider />
      <action-save :item="item" type="x-large" />
      <v-divider />
      <action-report :item="item" type="x-large" />
    </template>
  </sm-sheet>
</template>

<script>
export default {
  props: {
    item: Object,
    type: String,
    info: Boolean,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>

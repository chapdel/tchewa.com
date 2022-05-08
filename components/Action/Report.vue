<template>
  <sm-modal label="report-a-problem" v-model="dialog">
    <template slot="activator">
      <action-btn
        :type="type"
        icon="spam"
        text="report-ad"
        block
        regular
        :info="info"
      >
        <slot />
      </action-btn>
    </template>
    <template slot="content">
      <div class="pa-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa esse
        corrupti quo enim, saepe harum id dolores necessitatibus deserunt
        repellendus totam non deleniti velit fuga nisi at temporibus? Beatae,
        esse.
      </div>
    </template>
  </sm-modal>
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
      dialog: false
    }
  },
};
</script>

<style></style>

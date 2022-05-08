<template>
  <div>
    <v-card
      flat
      :ripple="false"
      v-if="type == 'card'"
      class="rounded-lg pa-2 pb-1 text-center secondary"
    >
      <v-icon :color="disabled ? 'accent' : error ? 'error' : 'info'" size="24">
        fa-{{ font_weight }} {{ icon | icon }}
      </v-icon>
      <div
        class="text-10 text-nowrap"
        :class="
          disabled ? 'accent--text' : error ? 'error--text' : 'info--text'
        "
      >
        {{ $caps($t(text)) }}
      </div>
    </v-card>
    <div v-else-if="type == 'large'">
      <v-btn
        large
        :block="block"
        class="text-none rounded-lg text-subtitle-1"
        disabled
        v-if="disabled"
      >
        <v-icon size="22"> fa-{{ font_weight }} {{ icon | icon }} mr-2 </v-icon>
        {{ $caps($t(text)) }}
      </v-btn>
      <v-btn
        v-else
        large
        depressed
        :block="block"
        :class="info ? 'info' : error ? 'error' : 'primary text-inverse'"
        class="text-none rounded-lg text-subtitle-1"
        :ripple="false"
      >
        <v-icon size="22"> fa-{{ font_weight }} {{ icon | icon }} mr-2 </v-icon>
        {{ $caps($t(text)) }}
      </v-btn>
    </div>
    <v-btn v-else-if="type == 'icon'" icon :ripple="false" :disabled="disabled">
      <v-icon size="22" :color="info ? 'info' : error ? 'error' : 'primary'">
        fa-{{ font_weight }} {{ icon | icon }}
      </v-icon>
    </v-btn>
    <v-card
      height="38"
      width="54"
      flat
      :ripple="false"
      class="rounded-lg place-center secondary primary--text"
      v-else-if="type == 'small'"
    >
      <v-icon
        small
        :color="
          disabled ? 'accent' : error ? 'error' : info ? 'info' : 'primary'
        "
      >
        fa-{{ font_weight }} {{ icon | icon }}
      </v-icon>
    </v-card>
    <v-card
      height="54"
      flat
      tile
      :ripple="false"
      class="d-flex align-center transparent text-subtitle-1 text-nowrap px-1"
      v-else-if="type == 'x-large'"
    >
      <v-avatar size="54" />
      <v-spacer />
      <div class="text-nowrap">
        {{ $caps($t(text)) }}
      </div>
      <v-spacer />
      <v-avatar size="54">
        <v-icon
          size="20"
          :color="
            disabled ? 'accent' : error ? 'error' : info ? 'info' : 'primary'
          "
        >
          fa-{{ font_weight }} {{ icon | icon }}
        </v-icon>
      </v-avatar>
    </v-card>
    <div
      v-else-if="type == 'text'"
      class="text-caption _bold info--text py-2 d-flex align-center"
    >
      <v-icon small left color="info">
        {{ icon | icon }}
      </v-icon>
      {{ $caps($t(text)) }}
    </div>
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
    icon: String,
    disabled: Boolean,
    light: Boolean,
    regular: Boolean,
    block: Boolean,
    info: Boolean,
    error: Boolean,
  },
  computed: {
    font_weight() {
      return this.light ? "light" : this.regular ? "regular" : "solid";
    },
  },
};
</script>

<style></style>

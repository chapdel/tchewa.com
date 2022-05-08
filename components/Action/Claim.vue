<template>
  <div>
    <action-login v-if="!($is_auth || loggedIn)" @login="loggedIn = true">
      <slot />
    </action-login>
    <sm-modal
      v-else
      label="verify-you-business"
      close-text="cancel"
      v-model="dialog"
    >
      <template slot="activator">
        <slot />
      </template>
      <template slot="content">
        <div class="pa-6">
          <h2 class="_black text-h5 mb-3">
            Choose a way to complete your claim
          </h2>
          <div class="mb-3 text-body-1">
            You ({{ $auth_user().id }}) are about to claim
            <span class="_bold">{{ item.title }}</span>
          </div>
          <div class="text--secondary text-body-2 mb-6">
            By continuing, you agree to SnapCiti's
            <nuxt-link
              class="text-none info--text _medium"
              to="/policies/terms"
            >
              Terms & Conditions
            </nuxt-link>
            and ackknowledge our
            <nuxt-link
              class="text-none info--text _medium"
              to="/policies/privacy"
            >
              Privacy Policy
            </nuxt-link>
          </div>
          <div
            @click="method = 'text'"
            class="bordered pa-4 rounded shadow mb-2 d-flex"
          >
            <div class="pt-1 pr-3">
              <v-icon v-if="method == 'text'" color="info">
                fa-circle-dot
              </v-icon>
              <v-icon v-else color="accent">fa-light fa-circle </v-icon>
            </div>
            <div class="w100">
              <h5 class="_bold text-subtitle-1">Receive a text message</h5>
              <div class="text-caption text--secondary">
                We will text you at
                <span class="_bold primary--text">
                  {{ item.contact.phone.code }}
                  {{ $tel(item.contact.phone.tel) }}
                </span>
                and send you a 4 digit code.
              </div>
              <v-btn
                text
                block
                :ripple="false"
                v-if="method == 'text'"
                class="text-none info mt-3 rounded-lg text-subtitle-2"
              >
                Send
              </v-btn>
            </div>
          </div>
          <div
            @click="method = 'call'"
            class="bordered pa-4 rounded shadow mb-2 d-flex"
          >
            <div class="pt-1 pr-3">
              <v-icon v-if="method == 'call'" color="info">
                fa-circle-dot
              </v-icon>
              <v-icon v-else color="accent">fa-light fa-circle </v-icon>
            </div>
            <div class="w100">
              <h5 class="_bold text-subtitle-1">Answer a call</h5>
              <div class="text-caption text--secondary">
                We will call you at
                <span class="_bold primary--text">
                  {{ item.contact.phone.code }}
                  {{ $tel(item.contact.phone.tel) }}
                </span>
                and ask you to type a code.
              </div>
              <v-btn
                text
                block
                :ripple="false"
                v-if="method == 'call'"
                class="text-none info mt-3 rounded-lg text-subtitle-2"
              >
                Call
              </v-btn>
            </div>
          </div>
          <sm-modal close-text="cancel" nofixed transparent>
            <template slot="activator">
              <v-btn
                block
                text
                color="info"
                :ripple="false"
                class="text-none text-subtitle-2"
              >
                Request to change phone number
              </v-btn>
            </template>
            <template slot="content">
              <div class="pa-6">
                <h2 class="_black text-h5 mb-3">
                  Update business phone number
                </h2>
                <div class="mb-6 text-body-1">
                  Please update the phone number for
                  <span class="_bold">{{ item.title }}.</span> The phone number
                  change will be verified by SnapCiti's team.
                </div>
                <sm-phone
                  v-model="phone"
                  label="business phone number"
                  :color="neutral"
                />
                <v-btn
                  text
                  block
                  large
                  :ripple="false"
                  class="text-none info mt-8 rounded-lg text-subtitle-1"
                >
                  Save changes
                </v-btn>
              </div>
            </template>
          </sm-modal>
        </div>
      </template>
    </sm-modal>
  </div>
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
      loggedIn: false,
      method: "",
      phone: { ...this.item.contact.phone },
    };
  },
};
</script>

<style></style>

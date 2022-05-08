<template>
  <div>
    <section>
      <v-container class="pa-sm-12">
        <v-card max-width="1024" class="mx-auto rounded-xl overflow-hidden">
          <v-row no-gutters>
            <v-col class="col-12 col-md-6">
              <div class="pa-3 pa-sm-6 pa-md-12">
                <h2>Let's connect</h2>
                <div class="my-6 d-flex">
                  <v-avatar size="55" color="secondary rounded-lg">
                    <v-icon color="primary" size="42"> mdi-email </v-icon>
                  </v-avatar>
                  <div class="pl-6">
                    <div class="subtitle-2">Email</div>
                    <h4 class="text-h6 font-weight-bold">info@tchewa.com</h4>
                  </div>
                </div>
                <v-divider />
                <div class="my-6 d-flex">
                  <v-avatar size="55" color="secondary rounded-lg">
                    <v-icon color="primary" size="42"> mdi-phone </v-icon>
                  </v-avatar>
                  <div class="pl-6">
                    <div class="subtitle-2">Phone number</div>
                    <h4 class="text-h6 font-weight-bold">+237 6 72 04 31 60</h4>
                  </div>
                </div>
                <v-divider />
                <div class="my-6">
                  <div class="text-uppercase text-subtitle-1 font-weight-bold">
                    Follow Us
                  </div>
                  <div class="mt-3">
                    <v-btn
                      icon
                      outlined
                      large
                      :ripple="false"
                      v-for="x in socials"
                      :key="x.name"
                      :href="x.link"
                      class="mr-3 _icon"
                    >
                      <v-icon size="28" color="#222">mdi-{{ x.name }}</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col class="secondary col-12 col-md-6">
              <div class="pa-3 pa-sm-6 pa-md-12">
                <h2 class="mb-4">Send us a mesage</h2>
                <form @submit.prevent>
                  <v-row dense>
                    <v-col class="col-12">
                      <label>Full name <span class="red--text">*</span></label>
                      <v-text-field
                        dense
                        outlined
                        background-color="white"
                        full-width
                        class="mb-n6 rounded-0"
                      />
                    </v-col>
                    <v-col class="col-12 col-sm-6">
                      <label>Email <span class="red--text">*</span></label>
                      <v-text-field
                        type="email"
                        dense
                        outlined
                        background-color="white"
                        full-width
                        class="mb-n6 rounded-0"
                      />
                    </v-col>
                    <v-col class="col-12 col-sm-6">
                      <label
                        >Phone number <span class="red--text">*</span></label
                      >
                      <v-text-field
                        type="tel"
                        dense
                        outlined
                        background-color="white"
                        full-width
                        class="mb-n6 rounded-0"
                      />
                    </v-col>

                    <v-col class="col-12">
                      <label>Subject</label>
                      <v-text-field
                        type="tel"
                        dense
                        outlined
                        background-color="white"
                        full-width
                        class="mb-n6 rounded-0"
                      />
                    </v-col>
                    <v-col class="col-12">
                      <label> Message <span class="red--text">*</span> </label>
                      <v-textarea
                        dense
                        outlined
                        background-color="white"
                        full-width
                        class="mb-n6 rounded-0"
                        auto-grow
                        rows="3"
                      />
                    </v-col>
                  </v-row>
                  <label class="my-4 d-block">
                    <span class="red--text"> * </span>
                    Fields required
                  </label>
                  <v-btn
                    large
                    depressed
                    color="info"
                    type="submit"
                    class="text-none text-h6 px-8"
                  >
                    Contact us now
                  </v-btn>
                </form>
              </div>
            </v-col>
          </v-row>
          <div class="contact d-none">
            <div class="pa-6 pa-sm-12">
              <div class="primary--text text-h5 text-sm-h4 mb-3 mb-sm-6">
                Make an inquiry
              </div>
              <form @submit.prevent="submit">
                <v-row>
                  <v-col class="col-12 col-sm-6">
                    <v-text-field
                      outlined
                      placeholder="Last name*"
                      v-model="lname"
                      required
                      class="mb-n6"
                    />
                  </v-col>
                  <v-col class="col-12 col-sm-6">
                    <v-text-field
                      outlined
                      placeholder="First name"
                      v-model="fname"
                      class="mb-n6"
                    />
                  </v-col>
                  <v-col class="col-12 col-sm-6">
                    <v-text-field
                      outlined
                      placeholder="Email*"
                      v-model="email"
                      type="email"
                      required
                      class="mb-n6"
                    />
                  </v-col>
                  <v-col class="col-12 col-sm-6">
                    <v-text-field
                      outlined
                      placeholder="Phone*"
                      v-model="phone"
                      type="tel"
                      required
                      class="mb-n6"
                    />
                  </v-col>
                  <v-col class="col-12 col-sm-6">
                    <v-text-field
                      outlined
                      placeholder="Location*"
                      v-model="location"
                      required
                      class="mb-n6"
                    />
                  </v-col>
                  <v-col class="col-12">
                    <v-textarea
                      auto-grow
                      outlined
                      placeholder="Details of inquiry"
                      v-model="message"
                      class="mt-n6"
                    />
                  </v-col>
                  <v-col class="col-12">
                    <div class="text-right">
                      <v-btn
                        type="submit"
                        width="230"
                        tile
                        depressed
                        height="65"
                        x-large
                        class="text-none info text-subtitle-1"
                        :loading="loading"
                      >
                        Submit
                      </v-btn>
                      <v-alert
                        v-if="success"
                        class="mt-6 text-left"
                        outlined
                        type="green"
                        text
                      >
                        Thanks for contacting us! We will be in touch with you
                        shortly.
                      </v-alert>
                      <v-alert
                        v-if="error"
                        class="mt-6 text-left"
                        outlined
                        type="error"
                        text
                      >
                        Message not sent. Please try again later.
                      </v-alert>
                    </div>
                  </v-col>
                </v-row>
              </form>
            </div>
          </div>
        </v-card>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  font-size: 14px !important;
}
</style>

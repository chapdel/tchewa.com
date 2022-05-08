<template>
  <div class="pa-6 _xs">
    <!-- Error -->
    <Error v-model="error" />
    <!-- Signin -->
    <form @submit.prevent="signin" v-if="page == 'signin'">
      <h2 class="_black text-h4">{{ "welcome-back" }}!</h2>
      <div class="text-body-1 mb-4 text--secondary">
        Continue with your email and password.
      </div>
      <text-field
        solo
        required
        type="email"
        placeholder="email"
        v-model="auth.email"
      />
      <text-field
        solo
        required
        type="password"
        placeholder="password"
        v-model="auth.password"
      />
      <v-btn
        block
        large
        depressed
        :ripple="false"
        type="submit"
        height="48"
        :loading="loading"
        :disabled="!(isEmail && isPassword)"
        class="text-none info text-subtitle-1 rounded-lg d-flex align-center px-2"
      >
        Sign in
      </v-btn>
      <div
        @click="page = 'forgot'"
        class="text-none text-subtitle-2 info--text text-center pa-3 mt-3"
      >
        {{ "forgot-password" | capitalize }}
      </div>
    </form>
    <!-- Signup -->
    <form @submit.prevent="signup" v-else-if="page == 'signup'">
      <h2 class="_black text-h4">{{ "lets-get-started" }}!</h2>
      <div class="text-body-1 text--secondary mb-4">
        Continue with your email and password.
      </div>
      <text-field
        solo
        required
        placeholder="full-name"
        key="post-title"
        v-model="post.title"
      />
      <text-field
        solo
        required
        type="email"
        placeholder="email"
        v-model="auth.email"
      />
      <text-field
        solo
        required
        type="password"
        placeholder="password"
        v-model="auth.password"
      />
      <div class="pb-3 text-caption text--disabled">
        By continuing, you agree to our
        <nuxt-link to="/policies/rems" class="text-none info--text _bold">
          Terms of Service
        </nuxt-link>
        and acknowledge that you have read our
        <nuxt-link to="/policies/privacy" class="text-none info--text _bold">
          Privacy Policy
        </nuxt-link>
        to learn how we collo, use, and share your data.
      </div>
      <div class="d-flex align-start pb-4">
        <v-switch
          inset
          v-model="post.details.notification"
          color="info"
          class="mt-2"
        />
        <div class="pl-3 text-caption">
          I would like to receive emails from SnapCiti about offers, surveys and
          information on products and services. (you can cancel at any time in
          the account settings).
        </div>
      </div>
      <v-btn
        depressed
        block
        large
        :ripple="false"
        type="submit"
        height="48"
        :loading="loading"
        :disabled="!(isEmail && isPassword && post.title)"
        class="text-none info text-subtitle-1 rounded-lg d-flex align-center px-2"
      >
        Create account
      </v-btn>
    </form>
    <!-- Forgot -->
    <form @submit.prevent="forgot" v-else-if="page == 'forgot'">
      <h2 class="_black text-h4">{{ "forgot-password" }}?</h2>
      <div class="text-body-2 mb-4 text--secondary">
        Please enter the email address associated with your account. We will
        send you a <span class="_bold">One Time Password</span> on your email
        address.
      </div>
      <text-field
        solo
        required
        type="email"
        placeholder="email"
        v-model="auth.email"
      />
      <v-btn
        depressed
        block
        large
        :ripple="false"
        type="submit"
        height="48"
        :loading="loading"
        :disabled="!isEmail"
        class="text-none info text-subtitle-1 rounded-lg d-flex align-center px-2"
      >
        Send
      </v-btn>
      <div
        @click="page = ''"
        class="text-none text-subtitle-2 info--text text-center pa-3 mt-3"
      >
        {{ "go-to-login" | capitalize }}
      </div>
    </form>
    <!-- Verify -->
    <form @submit.prevent="verify" v-else-if="page == 'verify'">
      <h2 class="_black text-h4">{{ "verify-your-email-address" }}!</h2>
      <div class="text-body-2 mb-4 text--secondary">
        We have sent a 4 digit verfification code to your email
        <span class="_bold primary--text">{{ auth.email }}</span
        >.
      </div>
      <v-otp-input
        v-model="pin"
        type="number"
        length="4"
        :disabled="loading"
        @finish="verify"
      />
      <v-btn
        depressed
        block
        large
        :ripple="false"
        type="submit"
        height="48"
        :loading="loading"
        class="text-none info text-subtitle-1 rounded-lg d-flex align-center px-2 mt-3"
        :disabled="!pin"
      >
        Verify
      </v-btn>
      <div
        @click="page = 'forgot'"
        class="text-none text-subtitle-2 info--text text-center pa-3 mt-3"
      >
        {{ "request-new-code" | capitalize }}
      </div>
    </form>
    <!-- Reset -->
    <form @submit.prevent="reset" v-else-if="page == 'reset'">
      <h2 class="_black text-h4">{{ "reset-password" }}!</h2>
      <div class="text-body-1 mb-4 text--secondary">
        Enter a new password for your
        <span class="_bold primary--text">{{ auth.email }}</span>
      </div>
      <div class="text-12 px-2">Password*</div>
      <text-field
        solo
        required
        type="password"
        placeholder="password"
        v-model="auth.password"
      />
      <div class="text-12 px-2">Confirm password*</div>
      <text-field
        solo
        required
        type="password"
        placeholder="re-type password"
        v-model="confirm"
      />
      <v-btn
        depressed
        block
        large
        height="48"
        :ripple="false"
        type="submit"
        :loading="loading"
        :disabled="!isConfirm"
        class="text-none info text-subtitle-1 rounded-lg d-flex align-center px-2"
      >
        Reset Password
      </v-btn>
    </form>
    <!-- Login -->
    <form @submit.prevent="login" v-else>
      <h2 class="_black text-h4">{{ "welcome" }}!</h2>
      <div class="text-body-1 text--secondary mb-6">
        To get started, you can use your email to sign in or create a new
        account.
      </div>
      <text-field
        solo
        required
        type="email"
        placeholder="email"
        v-model="auth.email"
      />
      <v-btn
        depressed
        block
        large
        :ripple="false"
        type="submit"
        height="48"
        :loading="loading"
        :disabled="!isEmail"
        class="text-none info text-subtitle-1 rounded-lg d-flex align-center px-2"
      >
        <div class="d-flex align-center w100">
          <v-avatar size="20" />
          <v-spacer />
          Continue
          <v-spacer />
          <v-icon size="20" color="white"> fa-arrow-right </v-icon>
        </div>
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  middleware: "guest",
  layout: "login",
  data() {
    return {
      loading: false,
      error: 0,
      redirect: this.$route.query.redirect || "",
      confirm: "",
      auth: {
        email: "",
        password: "",
      },
      pin: "",
      post: {
        slug: "",
        title: "",
        desc: "",
        type: "people",
        company: {
          id: "",
          name: "",
          avatar: "",
        },
        media: {
          avatar: "",
          cover: "",
        },
        contact: {
          email: "",
          phone: { iso: "", code: "", tel: "" },
          website: "",
          emails: [""],
        },
        details: {
          languages: [],
          position: "",
          gender: "",
          dob: "",
          notification: true,
          about: "",
        },
        location: {
          street: "",
          suite: "",
          city: "",
          state: "",
          zip: "",
          country: "",
          lat: "",
          lng: "",
          geo: { lat: "", lng: "" },
        },
        activities: {
          saved: 0,
          following: 0,
          photos: 0,
          reviews: 0,
          attending: 0,
        },
      },
      page: "",
    };
  },
  computed: {
    email() {
      return this.auth.email;
    },
    title() {
      return this.post.title;
    },
    isEmail() {
      return (
        this.auth.email &&
        this.auth.email.includes("@") &&
        this.auth.email.includes(".")
      );
    },
    isPassword() {
      return this.auth.password && this.auth.password.length >= 8;
    },
    isConfirm() {
      return this.isPassword && this.auth.password == this.confirm;
    },
  },
  watch: {
    email(newValue, oldValue) {
      this.post.contact.email = newValue;
      this.post.contact.emails[0] = newValue;
    },
    title(newValue, oldValue) {
      this.$set_slug(newValue);
    },
  },
  methods: {
    async login() {
      try {
        this.loading = true;
        const { data } = await this.$axios.get(
          "/users/verify/" + this.auth.email
        );
        if (data) this.page = "signin";
        else this.page = "signup";
      } catch (error) {
        this.error = error.response.status;
      }
      this.loading = false;
    },
    async signin() {
      this.loading = true;
      try {
        const { data } = await this.$axios.post("/users/login", {
          ...this.auth,
          device: this.$device_data,
        });
        if (data) {
          this.loading = false;
          this.$cookies.set("access_token", data.token, {
            maxAge: 365 * 24 * 60 * 60,
          });
          this.$store.commit("settings/SET_PAGES", data.pages);
          this.$store.commit("settings/SET_USER", data.profile);
          if (this.redirect) this.$router.push(this.redirect || "/");
          this.$emit("login");
        }
      } catch (error) {
        this.error = error.response.status;
        this.loading = false;
      }
    },
    async signup() {
      this.loading = true;
      try {
        const { data } = await this.$axios.post("/users/register", {
          ...this.auth,
          device: this.$device_data,
          post: this.post,
        });
        if (data) {
          this.loading = false;
          this.$cookies.set("access_token", data.token, {
            maxAge: 365 * 24 * 60 * 60,
          });
          this.$store.commit("settings/SET_USER", data.profile);
          if (this.redirect) this.$router.push(this.redirect || "/");
          this.$emit("login");
        }
      } catch (error) {
        this.error = error.response.status;
        this.loading = false;
      }
    },
    async forgot() {
      this.loading = true;
      try {
        const { data } = await this.$axios.post("/users/password/forgot", {
          ...this.auth,
          device: this.$device_data,
        });
        if (data) {
          this.page = "verify";
        }
      } catch (error) {
        this.error = error.response.status;
        this.loading = false;
      }
    },
    async verify() {
      this.loading = true;
      setTimeout(() => {
        this.pin = "";
        this.loading = false;
        this.page = "reset";
      }, 2000);
    },
    async reset() {
      this.loading = true;
      setTimeout(() => {
        this.pin = "";
        this.loading = false;
        this.page = "";
      }, 2000);
    },
  },
};
</script>

<style>
.inner-content {
  min-height: calc(100vh - 150px);
}
</style>

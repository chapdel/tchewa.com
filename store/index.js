// import axios from "axios";

export const state = () => ({
  events: [
    {
      _id: "58c039938060197ca0b52d4d",
      slug: "bringing-afro-latin-flavor-to-cosmopolitan-abu-dhabi-1234567890986543",
      title: "Bringing Afro-Latin flavor to cosmopolitan Abu Dhab",
      desc: `
      <h3 class="mb-3">Why Afro- Latin?</h3>
      <p>Latin America and Africa share a load of similarities and diversity, in culture, arts, music, food, dance, etc. They are both referred to as the continent of colors. Bringing these two unique cultures together is going to be history in the making. Its impact will leave footprints in the hearts of the city dwellers. Truly Something that Abu Dhabi has never experienced before.</p>
      <p>Music, Fashion, Live performances, Dance, Food, Arts, Cosmetics</p>
      <p>Grab your tickets online on Virgin Megastore</p>
      <p><strong>Entry:</strong> 75Dhs ( To be available soon). Free entry for children 12 years and below.</p>
      `,
      author: "58c039018060197ca0b52d4c",
      image: "/img/hero/DSC05588.jpg",
      video: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/s6Y62ikXbLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>`,
      cat: ["festival"],
      price: {
        regular: "75",
        currency: "AED",
        exemption: "Free entry for children 12 years and below",
      },
      details: {
        venue: "Radisson Blu Hotel & Resort",
        starts: { date: "2020-03-06", time: "15:00" },
        ends: { date: "2020-03-06", time: "21:00" },
        attendance: "in-person",
        website: "",
      },
      location: {
        street: "Corniche Rd",
        suite: "",
        city: "Al Bateen",
        state: "Abu Dhabi",
        country: "United Arab Emirates",
        zip: "",
        geo: { lat: 24.466667, lng: 54.366669 },
      },
      createdAt: "2017-03-08T17:04:19.860Z",
    },
  ],
  tours: [],
});

export const mutations = {
  SET_USER(state, data) {
    if (data.id) {
      this.$cookies.set("auth_user", JSON.stringify(data), {
        maxAge: 365 * 24 * 60 * 60,
      });
    }
  },
  SET_PAGE(state, data) {
    if (data.id) {
      this.$cookies.set("page", JSON.stringify(data), {
        maxAge: 365 * 24 * 60 * 60,
      });
    }
  },
};

export const actions = {
  async UPDATE({ commit }, user) {
    const token = this.$cookies.get("access_token");
    if (token) {
      try {
        let { data } = await this.$axios.patch("/users", user, {
          headers: { Authorization: `Bearer ${token}` },
        });
        commit("SET_USER", data);
        return true;
      } catch (error) {
        throw error;
      }
    }
  },
  async SIGNOUT() {
    try {
      this.$cookies.remove("access_token");
      this.$cookies.remove("auth_user");
      this.$cookies.remove("page");
      location.href = "/";
    } catch (error) {
      throw error;
    }
  },

  async GET_PAGE({ commit }) {
    try {
      const { data } = await this.$axios.get("/posts/tchewa.com");
      if (data) commit("SET_PAGE", data);
    } catch (error) {
      console.error(error);
    }
  },
  async GET_USER({ commit }) {
    try {
      const token = this.$cookies.get("access_token");
      if (!token) return;
      const { data } = await this.$axios("/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data) commit("SET_USER", data);
    } catch (error) {
      console.log(error);
    }
  },
};

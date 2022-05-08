import Vue from "vue";
import "@/assets/styles.scss";
Vue.mixin({
  data() {
    return {
      nav: [
        "",
        "about",
        "team",
        "events",
        "tours",
        "services",
        "gallery",
        "reviews",
        "contact",
      ],
      gallery: [
        "DSC05566",
        "DSC05571",
        "DSC05576",
        "DSC05585",
        "DSC05588",
        "DSC05589",
        "DSC05591",
        "DSC05594",
        "DSC05599",
        "DSC05600",
        "DSC05612",
        "DSC05616",
        "DSC05623",
        "DSC05627",
        "DSC05634",
        "DSC05644",
        "DSC05655",
        "DSC05661",
        "DSC05668",
        "DSC05731",
        "DSC05745",
        "DSC05768",
        "DSC05769",
        "DSC05778",
        "DSC05799",
        "DSC05801",
        "DSC05838",
        "DSC05845",
        "DSC05872",
        "DSC05876",
        "DSC06019",
        "DSC06029",
        "DSC06083",
        "DSC06088",
        "DSC06101",
        "DSC06114",
        "DSC06141",
        "DSC06211",
        "DSC06228",
      ],
      socials: [
        { name: "facebook", link: "#" },
        { name: "twitter", link: "#" },
        { name: "linkedin", link: "#" },
        { name: "instagram", link: "#" },
        { name: "youtube", link: "#" },
      ],
      services: [
        "Guided tours and sight seeing",
        "Exhibition, convention and amusement",
        "Holidays and Vacation planning",
        "Taxi and Airpot shuttle",
        "Accommodation co-ordination and bookings",
        "Conferences and Corporate Events",
        "Charity and Award Events",
        "Transportation, Valet & Parking Management",
      ],
      images: [
        "DSC05588",
        "DSC05591",
        "DSC05600",
        "DSC05616",
        "DSC05668",
        "DSC06228",
        "DSC05778",
        "DSC05845",
        "DSC06029",
      ],
    };
  },
  computed: {
    $posts() {
      return posts;
    },
    $is_auth() {
      if (this.$cookies.get("access_token")) return true;
      return false;
    },
  },
  filters: {
    capz: function (text) {
      if (text) {
        if (!text) return;
        if (typeof text != "string") return text;
        const string = text.split("-").join(" ");
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    },
    time: function (value) {
      if (value) {
        const date = new Date(value);
        return `${date.getHours()}:${date.getMinutes()}`;
      } else return value;
    },
    date: function (value) {
      if (value)
        return new Date(value).toLocaleString(["en-GB"], {
          month: "long",
          day: "2-digit",
          year: "numeric",
        });
      else return value;
    },
    shortdate: function (value) {
      if (value)
        return new Date(value).toLocaleString(["en-GB"], {
          month: "short",
          day: "2-digit",
        });
    },
    year: function (value) {
      if (value) return new Date(value).getFullYear();
    },
    day: function (value) {
      if (value)
        switch (new Date(value).getDay()) {
          case 0:
            return "Sunday";
            break;
          case 1:
            return "Monday";
            break;
          case 2:
            return "Tuesday";
            break;
          case 3:
            return "Wednesday";
            break;
          case 4:
            return "Thursday";
            break;
          case 5:
            return "Friday";
            break;
          case 6:
            return "Saturday";
        }
      else return value;
    },
    shortday: function (value) {
      if (value)
        switch (new Date(value).getDay()) {
          case 0:
            return "SUN";
            break;
          case 1:
            return "MON";
            break;
          case 2:
            return "TUE";
            break;
          case 3:
            return "WED";
            break;
          case 4:
            return "THU";
            break;
          case 5:
            return "FRI";
            break;
          case 6:
            return "SAT";
        }
      else return value;
    },
    sort: function (value, key) {
      if (value.length) {
        return value.sort((a, b) => {
          var nameA = a[key].toUpperCase();
          var nameB = b[key].toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
  methods: {
    $sort(a, b) {
      var nameA = a.value.toUpperCase();
      var nameB = b.value.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    },
    $removeEmptyFields(obj) {
      return Object.fromEntries(
        Object.entries(obj).filter(([k, v]) => v.toString() || v.length)
      );
    },
    $formatSlug(str, stamp) {
      const timestamp = stamp ? `-${Date.now()}` : "";
      if (str)
        return (
          str
            .toString()
            .trim()
            .toLowerCase()
            .replace(/[^\w\s]/gi, "")
            .replace(/\s\s+/g, " ")
            .replace(/\s/gi, "-") + timestamp
        );
    },
    $num(num, dec) {
      if (!num?.toString()) num = "0";
      num.toString();
      // if (typeof num != "number") return "00.00";
      const formatted = Number(num).toLocaleString("en", {
        minimumFractionDigits: dec || 0,
        maximumFractionDigits: dec || 2,
      });
      return formatted;
    },
    $arrayToString(arr) {
      if (typeof arr == "string") return this.$caps(this.$t(arr));
      if (typeof arr !== "object") return arr;
      if (!arr[0]) return "";
      return arr.map((el) => this.$caps(this.$t(el))).join(", ");
    },
    $stringToArray(str) {
      if (typeof str !== "string") return str;
      return str.split(",").map((el) => el.trim());
    },
    $address(location) {
      return [location.city, this.$t(location.country)]
        .filter((el) => el)
        .map((el) => this.$caps(el.trim()))
        .join(", ");
    },
    $fullAddress(location) {
      return [
        location.street,
        location.suite,
        location.city,
        `${location.state} ${location.zip}`,
        this.$t(location.country),
      ]
        .filter((el) => el)
        .map((el) => this.$caps(el.trim()))
        .join(", ");
    },
    $auth_user() {
      if (!this.$cookies.get("access_token")) return "";
      return this.$cookies.get("auth_user");
    },
    async $get_update(id) {
      try {
        const token = this.$cookies.get("access_token");
        if (!token || !id) return (this.error = 403);
        const { data } = await this.$axios("/posts/update/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data) {
          this.post = data;
          this.loading = false;
        }
      } catch (error) {
        this.loading = false;
        this.error = error.response.status;
      }
    },
    async $create() {
      if (!this.post.title) return (this.error = 4015);
      if (!this.post.cat.length) return (this.error = 4016);
      const token = this.$cookies.get("access_token");
      if (!token) return (this.error = 403);
      try {
        this.loading = true;
        const { data } = await this.$axios.post(
          "/posts",
          { ...this.post, author: this.$author() },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (data) {
          this.loading = false;
          this.$router.push("/edit/" + data);
        }
      } catch (error) {
        this.loading = false;
        this.error = error.response.status;
      }
    },
    async $update() {
      if (!this.post.title) return (this.error = 4015);
      if (!this.post.cat.length) return (this.error = 4015);
      const token = this.$cookies.get("access_token");
      if (!token) return (this.error = 403);
      try {
        const {
          _id,
          slug,
          type,
          group,
          author,
          company,
          media,
          rating,
          reply,
          admins,
          claimed,
          activities,
          ...rest
        } = this.post;
        this.loading = true;
        await this.$axios.patch("/posts/" + _id, rest, {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.loading = false;
        this.success = true;
      } catch (error) {
        this.loading = false;
        this.error = error.response.status;
      }
    },
  },
});

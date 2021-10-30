<template>
  <div class="top-bar">
    <p>Logged in ?</p>
    <span v-if="loggedIn">Yes</span>
    <span v-else>No</span>
    <button
      v-show="loggedIn"
      @click="signOut"
      class="
        bg-red-500
        hover:bg-red-700
        text-white
        font-bold
        py-2
        px-4
        border border-blue-red
        rounded
      "
    >
      Sign Out
    </button>
  </div>
</template>
<script>
export default {
  created() {
    this.$fire.auth.onAuthStateChanged(() => {
      const user = this.$fire.auth.currentUser;
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async signOut() {
      try {
        const data = this.$fire.auth.signOut();
        console.log(data);
        this.$nuxt.$options.router.push({ name: "Login" });
      } catch (error) {}
    },
  },
};
</script>
<style scoped>
.top-bar {
  text-align: center;
}
</style>
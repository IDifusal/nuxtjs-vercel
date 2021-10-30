<template>
  <div class="div">
    <Logout />
    <Navigation />
    <h1 class="text-center">Your Profile</h1>
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
};
</script>
<template>
  <div>
    <Logout />
    <Navigation />
    <div class="form-containe pt-5">
      <div v-if="error" class="error">{{ error.message }}</div>
      <div class="w-full max-w-xs mx-auto">
        <form
          @submit.prevent="pressed"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              E-mail
            </label>
            <input
              class="
                shadow
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="
                shadow
                appearance-none
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                mb-3
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              v-model="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none focus:shadow-outline
              "
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;Tailwind. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async pressed() {
      try {
        const user = this.$fire.auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        this.$nuxt.$options.router.push({ name: "Secret" });
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
};
</script>
<style scoped>
.error {
  color: red;
  font-size: 18px;
}
</style>
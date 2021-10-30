export default {
  css: ["@/static/styles.css"],
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global App headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "IDifusal Nuxt App",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "This is an awesome description of my Nuxt app",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "@nuxtjs/firebase",

      {
        config: {
          apiKey: "AIzaSyBV9QEc627ZyfPhSkCSTel1j23dZ0L1OiY",
          authDomain: "vue-authentication-2bb34.firebaseapp.com",
          projectId: "vue-authentication-2bb34",
          storageBucket: "vue-authentication-2bb34.appspot.com",
          messagingSenderId: "1023624976227",
          appId: "1:1023624976227:web:723c982dc71509b527e556",
          measurementId: "G-XBW57K1P9X",
        },
        auth: {
          persistence: "local", // default
          initialize: {
            onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
            onAuthStateChangedAction: "onAuthStateChangedAction",
            subscribeManually: false,
          },
          ssr: false, // default
          emulatorPort: 9099,
          emulatorHost: "http://localhost",
        },
        services: {
          auth: true, // Just as example. Can be any other service.
        },
      },
      "@nuxtjs/axios",
    ],
  ],
};

export default defineNuxtConfig({
  compatibilityDate: "2025-01-03",
  devtools: { enabled: false },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",
          body: true,
        },
      ],
    },
  },
});
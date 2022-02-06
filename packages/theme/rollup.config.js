import { rollupTypescript, rollupVue } from "../../scripts/rollup";

export default [
  ...rollupTypescript("node/index", {
    external: [
      "@mr-hope/vuepress-shared",
      "@mr-hope/vuepress-plugin-components",
      "bcryptjs",
      "@vuepress/utils",
      "vuepress-plugin-blog2",
      "vuepress-plugin-comment2",
      "vuepress-plugin-copy-code2",
      "vuepress-plugin-feed2",
      "vuepress-plugin-md-enhance",
      "vuepress-plugin-photo-swipe",
      "vuepress-plugin-pwa2",
      "vuepress-plugin-reading-time2",
      "vuepress-plugin-sass-palette",
      "vuepress-plugin-seo2",
      "vuepress-plugin-sitemap2",
    ],
  }),

  ...rollupVue("client/components/navbar/Navbar.ts", {
    copy: [["client/components/navbar/styles", "client/components/navbar"]],
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-external-link-icon/lib/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "@vueuse/core",
      "bcryptjs",
      "vue",
      "vue-router",
      "vuepress-plugin-blog2/lib/client",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),

  ...rollupVue("client/components/sidebar/Sidebar.ts", {
    copy: [["client/components/sidebar/styles", "client/components/sidebar"]],
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-external-link-icon/lib/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "@vueuse/core",
      "bcryptjs",
      "vue",
      "vue-router",
      "vuepress-plugin-blog2/lib/client",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),

  ...rollupVue("client/components/CommonWrapper.ts", {
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-external-link-icon/lib/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "@vueuse/core",
      "bcryptjs",
      "lodash.throttle",
      "vue",
      "vue-router",
      "vuepress-plugin-blog2/lib/client",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),

  ...rollupVue("client/layouts/Blog.ts", {
    copy: [["client/assets", "client"]],
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-external-link-icon/lib/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "@vueuse/core",
      "bcryptjs",
      "vue",
      "vue-router",
      "vuepress-plugin-blog2/lib/client",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),

  ...rollupVue("client/layouts/Layout.ts", {
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-external-link-icon/lib/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "@vueuse/core",
      "bcryptjs",
      "vue",
      "vue-router",
      "vuepress-plugin-blog2/lib/client",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),

  ...rollupVue("client/layouts/404.ts", {
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-external-link-icon/lib/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "@vueuse/core",
      "vue",
      "vue-router",
      "vuepress-plugin-blog2/lib/client",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),

  ...rollupTypescript("client/layouts/Slide", {
    external: ["vuepress-plugin-md-enhance/lib/client/SlidePage", "vue"],
  }),

  ...rollupTypescript("client/appEnhance", {
    copy: [["client/styles", "client"]],
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-external-link-icon/lib/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "@vueuse/core",
      "bcryptjs",
      "vue",
      "vue-router",
      "vuepress-plugin-blog2/lib/client",
      /\.scss$/,
    ],
    dtsExternal: [/\.scss$/],
  }),

  ...rollupTypescript("client/appSetup", {
    external: [
      "@mr-hope/vuepress-shared/lib/client",
      "@vuepress/client",
      "@vuepress/plugin-external-link-icon/lib/client",
      "@vuepress/plugin-theme-data/lib/client",
      "@vuepress/shared",
      "@vueuse/core",
      "vue",
      "vue-router",
      "vuepress-plugin-blog2/lib/client",
    ],
  }),
];

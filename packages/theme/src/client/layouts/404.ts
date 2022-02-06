import { defineComponent, h } from "vue";
import { useLink } from "vue-router";
import { useRouteLocale } from "@vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper";
import { Page404Icon } from "@theme-hope/components/icons";

import { useThemeLocaleData } from "@theme-hope/composables";

import type { VNode } from "vue";

import "../styles/404.scss";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "404",

  setup() {
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();

    const getMsg = (): string => {
      const messages = themeLocale.value.routeLocales["404msg"];

      return messages[Math.floor(Math.random() * messages.length)];
    };

    const { navigate } = useLink({
      to: themeLocale.value.home ?? routeLocale.value,
    });

    return (): VNode =>
      h(
        CommonWrapper,
        { sidebar: false },

        () =>
          h("main", { class: "page not-found" }, [
            h(Page404Icon),
            h("blockquote", getMsg()),
            h(
              "button",
              {
                class: "action-button",
                onClick: () => {
                  window.history.go(-1);
                },
              },
              themeLocale.value.routeLocales.back
            ),
            h(
              "button",
              { class: "action-button", onClick: () => navigate() },
              themeLocale.value.routeLocales.home
            ),
          ])
      );
  },
});

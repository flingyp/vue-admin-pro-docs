import DefaultTheme from "vitepress/theme";
import { App } from "vue";

import "../style/custom.css";

import GlobalButton from "../../components/GlobalButton/index.vue";

interface Option {
  app: App;
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }: Option) {
    app.component("GlobalButton", GlobalButton);
  },
};

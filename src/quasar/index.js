import installQuasar from "quasar/src/install-quasar.js";

export { useQuasar } from "quasar/src/composables.js";
import Dark from "quasar/src/plugins/Dark";
import Notify from "quasar/src/plugins/Notify";

import iconSet from "quasar/icon-set/eva-icons";
import lang from "quasar/lang/zh-CN";
import "@quasar/extras/eva-icons/eva-icons.css";

export const Quasar = {
  install(app, opts, ssrContext) {
    installQuasar(
      app,
      {
        plugins: {
          Dark,
          Notify,
        },
        lang,
        iconSet,
        ...opts,
      },
      ssrContext
    );
  },
};

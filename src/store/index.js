import { createStore } from "vuex";
import videoPlugin from "./plugins/videoplugin";
import apiPlugin from "./plugins/apiplugin";

export default createStore({
  plugins: [videoPlugin, apiPlugin],
});

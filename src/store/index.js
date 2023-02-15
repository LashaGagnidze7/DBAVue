import { createStore } from "vuex";
import mainPlugin from "./plugins"

export default createStore({
  plugins: [mainPlugin]
});

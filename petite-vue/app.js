import { createApp } from "https://cdn.jsdelivr.net/npm/petite-vue@0.4.1/+esm"

import { store } from "./store.js"
import { Avatar } from "./components/Avatar/index.js"

createApp({
  Avatar,
  store,
}).mount()

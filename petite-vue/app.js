import { createApp } from "https://cdn.skypack.dev/petite-vue@0.4.1"

import { store } from "./store.js"
import { Avatar } from "./components/Avatar/index.js"

createApp({
  Avatar,
  store,
}).mount()

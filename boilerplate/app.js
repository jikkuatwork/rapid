import Alpine from "https://cdn.skypack.dev/alpinejs@3.10.2"

Alpine.store("app", {
  message: "Hola!",
  handleClick() {
    this.message = "Rapid Ready!"
  },
})

Alpine.start()

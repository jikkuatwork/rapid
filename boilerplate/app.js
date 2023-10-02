document.addEventListener("alpine:init", () => {
  Alpine.store("app", {
    greeting: "Hey there!",
    handleGreetingClick() {
      console.log("Clicked: ", this.greeting)
    },
  })

  window.$S = Alpine.store("app")
})

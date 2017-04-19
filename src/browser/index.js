console.log(`Frontful playground`)

window.frontful.environment.coldreload.serializer = () => {
  const state = {
    Hello: "state"
  }
  console.log("State stored", state)
  return state
}

window.frontful.environment.coldreload.deserializer = (state) => {
  console.log("State restored", state)
}

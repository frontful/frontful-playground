console.log(`Frontful playground`)

window.frontful.enviroment.coldreload.serializer = () => {
  return {
    value: 0,
  }
}

window.frontful.enviroment.coldreload.deserializer = () => {
}

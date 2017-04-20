import '../styles/css.css'
import '../styles/css.module.css'
import '../styles/scss.scss'
import '../styles/scss.module.scss'
import '../styles/sass.sass'
import '../styles/sass.module.sass'

console.log(`Frontful playground`)

window.frontful.environment.coldreload.serializer = () => {
  const state = {
    hello: 'state'
  }
  console.log('Saving state', state)
  return state
}

window.frontful.environment.coldreload.deserializer = (state) => {
  console.log('Restoring state', state)
}

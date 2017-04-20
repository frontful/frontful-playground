import logo from '../../assets/logo.png'

import css from '../styles/css.module.css'
import scss from '../styles/scss.module.scss'
import sass from '../styles/sass.module.sass'

const requestListener = (req, res) => {
  if(global.frontful.environment.coldreload.state) {
    console.log('Restoring state', global.frontful.environment.coldreload.state)
  }

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Frontful playground</title>
        <link rel="stylesheet" href="${global.frontful.environment.assets.css.main}">
      </head>
      <body>
        <h3>
          Frontful playground
        </h3>

        <div class="css">
          CSS styling
        </div>
        <div class="${css.css}">
          CSS Module styling
        </div>

        <div class="scss">
          SCSS styling
        </div>
        <div class="${scss.scss}">
          SCSS Module styling
        </div>

        <div class="sass">
          SASS styling
        </div>
        <div class="${sass.sass}">
          SASS Module styling
        </div>

        <div>
          <img src="${logo}"/>
        </div>

        <script src="${global.frontful.environment.assets.js.vendor}"></script>
        <script src="${global.frontful.environment.assets.js.main}"></script>
      </body>
    </html>
  `)
}

// Server index must export request listener
// Request listener can also be an Express app
export default requestListener

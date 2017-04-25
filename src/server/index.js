import frontfulAsset from '../../assets/frontful.png'

const requestListener = (req, res) => {
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Frontful playground</title>
        <link rel="stylesheet" href="${global.frontful.environment.assets.css.main}">
      </head>
      <body>
        <div class="container">
          <div class="content">
            <img src="${frontfulAsset}"/>
          </div>
        </div>
        <script src="${global.frontful.environment.assets.js.vendor}"></script>
        <script src="${global.frontful.environment.assets.js.main}"></script>
      </body>
    </html>
  `)
}

export default requestListener

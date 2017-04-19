import logo from '../../assets/logo.png'

const requestListener = (req, res) => {
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Frontful playground</title>
      </head>
      <body>
        <h3>
          Frontful playground
        </h3>
        <div>
          <img src="${logo}"/>
        </div>
        <script src="${'/assets/vendor.js'}"></script>
        <script src="${'/assets/main.js'}"></script>
      </body>
    </html>
  `)
}

// Server index must export request listener
// Request listener can also be an Express app
export default requestListener

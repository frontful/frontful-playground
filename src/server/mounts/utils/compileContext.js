import React from 'react'
import ReactDOMServer from 'react-dom/server'
import browserConfig from 'frontful-config/browser'
import initialize from '../../../common/initialize'
import {Style, style} from 'frontful-style'

function compileContext(element, options) {
  const {models, resolver} = initialize(element, options)

  if (global.frontful.environment.coldreload.state) {
    models.deserialize(global.frontful.environment.coldreload.state)
  }

  return resolver.execute().then((Application) => {
    const styleManagerSession = style.manager.getSession(options.req.headers['user-agent'])
    const view = ReactDOMServer.renderToString(
      <Style.Session session={styleManagerSession}>
        <Application />
      </Style.Session>
    )

    return {
      config: browserConfig.getScript(),
      style: styleManagerSession.renderToString(),
      view: view,
    }
  })
}

export default compileContext

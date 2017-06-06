import '../views/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Views from '../views'
import {Models} from 'frontful-model'
import {Resolver} from 'frontful-resolver'
import {StyleManager} from 'frontful-style/react'

const models = new Models({
  config: {
    'frontful-router': {
      mapping: {},
    }
  }
})

const resolver = new Resolver(<Views />, {
  models: models,
})

window.frontful.environment.coldreload.serializer = () => {
  return models.serialize()
}

window.frontful.environment.coldreload.deserializer = (state) => {
  models.deserialize(state)
}

resolver.execute().then((Views) => {
  ReactDOM.render(
    <StyleManager>
      <Views />
    </StyleManager>,
    document.getElementById('app')
  )
})

import '../views/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Views from '../views'
import {Models} from 'frontful-model'
import {StyleManager} from 'frontful-style/react'
import {autorun} from 'mobx'

import {Project} from '../models/Project'

const models = new Models()

window.frontful.environment.coldreload.serializer = () => {
  return models.serialize()
}

window.frontful.environment.coldreload.deserializer = (state) => {
  models.deserialize(state)
}

const project = models.global(Project, {
  filter: 'todo',
  name: 'Zoo',
  items: [],
})

autorun(() => {
  console.log('[autorun] project:', JSON.stringify(project.serialize(), null, 2))
})

project.items.push({
  text: 'Capybara',
  compleated: true,
  tags: {
    todo: null,
  },
})

project.items.push({
  text: 'Kangaroo',
  compleated: false,
  tags: {
    todo: null,
  },
})

ReactDOM.render(
  <StyleManager>
    <Views path={window.location.pathname} />
  </StyleManager>,
  document.getElementById('app')
)

import '../views/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Views from '../views'
import {StyleManager} from 'frontful-style/react'
import {autorun} from 'mobx'

import {Project} from '../models/Project'

const project = new Project({
  filter: 'todo',
  name: 'Zoo',
  items: [
    {
      text: 'Capybara',
      compleated: true,
      tags: {
        todo: null,
      },
    },
    {
      text: 'Kangaroo',
      compleated: false,
      tags: {
        todo: null,
      },
    },
  ],
})

autorun(() => {
  console.log('[autorun] project:', JSON.stringify(project.serialize(), null, 2))
})

ReactDOM.render(
  <StyleManager>
    <Views path={window.location.pathname} />
  </StyleManager>,
  document.getElementById('app')
)

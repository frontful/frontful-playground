import '../views/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Views from '../views'
import {StyleManager} from 'frontful-style/react'
import {Project} from '../models/Project'

import {autorun} from 'mobx'

const data = {
  filter: 'todo',
  name: 'frontful',
  items: [
    {
      text: 'Alien: Covenant',
      compleated: true,
      tags: {
        todo: null,
      },
    },
    {
      text: 'Fix my life',
      compleated: false,
      tags: {
        todo: null,
      },
    },
  ],
}

const project = new Project(data)

autorun(() => {
  console.log('[autorun] project:', JSON.stringify(project.serialize(), null, 2))
})

project.add('work')

ReactDOM.render(
  <StyleManager>
    <Views path={window.location.pathname} />
  </StyleManager>,
  document.getElementById('app')
)

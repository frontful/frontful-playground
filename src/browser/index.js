import '../views/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Views from '../views'
import {StyleManager} from 'frontful-style/react'
import {Todo} from '../models/Todo'

const input = {
  filter: 'todo',
  items: [
    {
      text: 'Alien: Covenant',
      compleated: true,
      tags: {
        todo: null,
      }
    },
    {
      text: 'Fix my life',
      compleated: false,
      tags: {
        todo: null,
      }
    }
  ]
}

let todo, json, jsonAfter
todo = new Todo(input)
json = todo.serialize()
todo = new Todo(json)
jsonAfter = todo.serialize()
console.log('Serialized:', json)
console.log('Reserialized:', jsonAfter)
console.log('Match:', JSON.stringify(json) === JSON.stringify(jsonAfter))
console.log(JSON.stringify(jsonAfter, null, 2))

ReactDOM.render(
  <StyleManager>
    <Views path={window.location.pathname} />
  </StyleManager>,
  document.getElementById('app')
)

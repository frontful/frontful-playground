import '../views/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import Views from '../views'

ReactDOM.render(
  <Views path={window.location.pathname} />,
  document.getElementById('app')
)

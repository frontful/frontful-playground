import React from 'react'
import {Router} from 'frontful-router'
import {resolver} from 'frontful-resolver'

import Input from './pages/input'
import Output from './pages/output'

@resolver.bind((resolve) => {
  resolve(() => ({
    Application: (
      <Router>
        <Input selector="/" />
        <Input selector="/input" />
        <Output selector="/output" />
      </Router>
    ),
  }))
})
export default class Index extends React.PureComponent {
  render() {
    return (
      <this.props.Application />
    )
  }
}

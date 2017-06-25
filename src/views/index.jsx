import React from 'react'
import {Router} from 'frontful-router'
import {resolver} from 'frontful-resolver'

import Input from './pages/input'
import Output from './pages/output'

@resolver((resolve) => {
  resolve(() => ({
    View: (
      <Router>
        <Input pattern="/" />
        <Input pattern="/input" />
        <Output pattern="/output" />
      </Router>
    ),
  }))
})
export default class Index extends React.PureComponent {
  render() {
    const {View} = this.props
    return <View />
  }
}

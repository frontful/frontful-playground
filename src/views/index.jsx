import React from 'react'
import Main from './layouts/main/Main'
import Png from './pages/png/Png'
import Svg from './pages/svg/Svg'
import Notfound from './pages/notfound/Notfound'

const routes = {
  '/': <Png />,
  '/png': <Png />,
  '/svg': <Svg />,
}

export default class Views extends React.PureComponent {
  constructor(...args) {
    super(...args)
    this.state = {
      path: this.props.path
    }
  }

  componentDidMount() {
    window.onpopstate = window.onpushstate = () => {
      this.setState({
        path: window.location.pathname
      })
    }
  }

  render() {
    return (
      <Main>
        {routes[this.state.path] || <Notfound />}
      </Main>
    )
  }
}

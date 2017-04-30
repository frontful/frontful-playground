import React from 'react'
import Main from './layouts/main/Main'
import Root from './pages/root/Root'
import Experiments from './pages/experiments/Experiments'
import Notfound from './pages/notfound/Notfound'

const routes = {
  '/': <Root />,
  '/experiments': <Experiments />,
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

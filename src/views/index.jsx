import React from 'react'
import Main from './layouts/main/Main'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Notfound from './pages/notfound/Notfound'

const routes = {
  '/' : <Home />,
  '/about': <About />,
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

import React from 'react'

export default class Link extends React.PureComponent {
  onClick = (event) => {
    event.stopPropagation()
    event.preventDefault()

    window.history.pushState({}, '', this.props.href)
    
    if (window.onpushstate) {
      window.onpushstate()
    }
  }
  render() {
    return (
      <a {...this.props} onClick={this.onClick}/>
    )
  }
}

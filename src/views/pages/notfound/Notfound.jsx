import React from 'react'
import style from 'frontful-style/react'

@style(({css}) => {
  css('.container', {
    fontSize: '300px',
    margin: '25px',
    textAlign: 'center',
  })
})
export default class Notfound extends React.PureComponent {
  render() {
    const {style} = this.props
    return (
      <div className={style.css('container')}>
        {'404'}
      </div>
    )
  }
}

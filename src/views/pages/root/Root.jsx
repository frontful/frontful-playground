import React from 'react'
import imageFrontful from '../../../../assets/img/frontful.png'
import style from 'frontful-style/react'

@style(({css}) => {
  css('.container', {
    margin: '35px',
    textAlign: 'center',
  })
})
export default class Root extends React.PureComponent {
  render() {
    const {style} = this.props
    return (
      <div className={style.css('container')}>
        <img src={imageFrontful} alt="frontful" />
      </div>
    )
  }
}

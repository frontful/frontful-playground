import React from 'react'
import imageFrontful from '../../../../assets/img/frontful.png'
import style from 'frontful-style/react'

@style(({css}) => {
  css('.container', {
    alignSelf: 'center',
    height: '30%',
    textAlign: 'center',
    width: '200px',
  })

  css('.container > img', {
    height: '100%',
    width: '100%',
  })
})
export default class Png extends React.PureComponent {
  render() {
    const {style} = this.props
    return (
      <div className={style.css('container')}>
        <img src={imageFrontful} alt="frontful" />
      </div>
    )
  }
}

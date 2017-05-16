import IconFrontful from '../../../../assets/icons/frontful.jsx.svg'
import React from 'react'
import style from 'frontful-style/react'

@style(({css}) => {
  css('.container', {
    alignSelf: 'center',
    height: '30%',
    width: '200px',
  })

  css('.icon', {
    fill: '#2d88c4',
    height: '100%',
    width: '100%',
  })
})
export default class Svg extends React.PureComponent {
  render() {
    const {style} = this.props
    return (
      <div className={style.css('container')}>
        <IconFrontful className={style.css('icon')} />
      </div>
    )
  }
}

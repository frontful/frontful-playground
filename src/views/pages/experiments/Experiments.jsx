import IconWebpack from '../../../../assets/icons/webpack.jsx.svg'
import React from 'react'
import style from 'frontful-style/react'

@style(({css}) => {
  css('.container', {
    margin: '20px',
    textAlign: 'center',
  })

  css('.icon', {
    display: 'block',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '230px',
  })
})
export default class Experiments extends React.PureComponent {
  render() {
    const {style} = this.props
    return (
      <div className={style.css('container')}>
        <IconWebpack className={style.css('icon')} />
      </div>
    )
  }
}

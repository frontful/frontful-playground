import React from 'react'
import imageFrontful from '../../../../assets/img/frontful.png'
import style from './About.module.scss'

export default class About extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        <img src={imageFrontful} alt="frontful" />
      </div>
    )
  }
}

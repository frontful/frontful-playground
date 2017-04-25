import React from 'react'
import style from './Home.module.scss'
import IconBabel from '../../../../assets/icons/babel.jsx.svg'
import IconWebpack from '../../../../assets/icons/webpack.jsx.svg'

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        <IconBabel className={style.icon}/>
        <IconWebpack className={style.icon}/>
      </div>
    )
  }
}

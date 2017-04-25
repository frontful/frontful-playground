import React from 'react'
import style from './Notfound.module.scss'

export default class Notfound extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        {'404'}
      </div>
    )
  }
}

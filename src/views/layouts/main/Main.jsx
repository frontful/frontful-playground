import React from 'react'
import style from './Main.module.scss'
import browserConfig from 'frontful-config/browser'
import Link from '../../common/components/link'

export default class Main extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <div className={style.content}>
          {this.props.children}
        </div>
        <div className={style.footer}>
          {browserConfig.footnote}
        </div>
      </div>
    )
  }
}

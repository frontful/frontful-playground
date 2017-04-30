import React from 'react'
import Link from '../../common/components/link'
import style from 'frontful-style/react'
import backgroundImage from '../../../../assets/img/background.png'

@style(({css}) => {
  css('.container', {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    justifyContent: 'space-between',
    minHeight: '100%',
  })

  css('.header, .footer', {
    backgroundColor: 'white',
    lineHeight: '70px',
    textAlign: 'center',
  })

  css('.header > a', {
    color: '#277cbc',
    margin: '0 10px',
    textDecoration: 'none',
  })

  css('.header > a:hover', {
    color: '#d24328',
  })

  css('.content', {
    backgroundImage: `url(${backgroundImage})`,
    flexGrow: '1',
  })
})
export default class Main extends React.PureComponent {
  render() {
    const {style} = this.props
    return (
      <div className={style.css('container')}>
        <div className={style.css('header')}>
          <Link href="/">Root</Link>
          <Link href="/experiments">Experiments</Link>
        </div>
        <div className={style.css('content')}>
          {this.props.children}
        </div>
        <div className={style.css('footer')}>
          <span>
            &nbsp;
          </span>
        </div>
      </div>
    )
  }
}

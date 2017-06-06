import React from 'react'
import style from 'frontful-style/react'
import {Project} from '../models/Project'
import {resolver} from 'frontful-resolver'

@resolver.config(({models}) => ({
  project: models.global(Project)
}))
@resolver.bind((resolve) => {
  resolve(({project}) => ({
    name: project.name,
  }))
})
@style((css) => {
  css('.name', {
    textAlign: 'center',
  })
})
export default class Views extends React.PureComponent {
  render() {
    const {style, name} = this.props
    return (
      <div className={style.css('name')}>
        {name}
      </div>
    )
  }
}

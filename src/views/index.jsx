import React from 'react'
import style from 'frontful-style/react'
import {Project} from '../models/Project'
import {resolver} from 'frontful-resolver'
import {autobind} from 'core-decorators'
import browserConfig from 'frontful-config/browser'

@resolver.config(({models}) => ({
  project: models.global(Project, {
    name: browserConfig.defaultProjectName,
  })
}))
@resolver.bind((resolve) => {
  resolve(({project}) => ({
    name: project.name,
    setName(name) {
      project.name = name
    }
  }))
})
@style(({css}) => {
  css('.name', {
    textAlign: 'center',
  })
})
export default class Views extends React.PureComponent {
  @autobind
  setName(event) {
    this.props.setName(event.target.value)
  }

  render() {
    const {style, name} = this.props
    return (
      <div className={style.css('name')}>
        <div>
          {name}
        </div>
        <input
          value={name || ''}
          onChange={this.setName}
        />
      </div>
    )
  }
}

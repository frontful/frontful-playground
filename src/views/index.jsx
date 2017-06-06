import React from 'react'
import {style} from 'frontful-style'
import {Project} from '../models/Project'
import {resolver} from 'frontful-resolver'

@resolver.config(({models}) => ({
  project: models.global(Project)
}))
@resolver.bind((resolve) => {
  resolve(({project}) => ({
    name: project.name,
    changeName(event) {
      project.name = event.target.value
    }
  }))
})
@style(({css}) => {
  css('.name', {
    textAlign: 'center',
    fontSize: '30px',
  })
})
export default class Views extends React.PureComponent {
  render() {
    const {style, name, changeName} = this.props
    return (
      <div className={style.css('name')}>
        <div>
          {name}
        </div>
        <div>
          <input value={name} onChange={changeName} />
        </div>
      </div>
    )
  }
}

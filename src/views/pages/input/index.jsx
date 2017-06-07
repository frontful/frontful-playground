import React from 'react'
import {Link} from 'frontful-router'
import {Project} from '../../../models/Project'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver.config(({models}) => ({
  project: models.global('input_project', Project)
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
export default class Input extends React.PureComponent {
  render() {
    const {style, name, changeName} = this.props
    return (
      <div className={style.css('name')}>
        <div>
          {`Input`}
          <Link href="/output">
            {`Output`}
          </Link>
        </div>
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

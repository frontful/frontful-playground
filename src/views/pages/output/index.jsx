import React from 'react'
import {Link} from 'frontful-router'
import {Project} from '../../../models/Project'
import {resolver} from 'frontful-resolver'
import {style} from 'frontful-style'

@resolver.define(({models}) => ({
  project: models.global(Project)
}))
@resolver((resolve) => {
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
export default class Output extends React.PureComponent {
  render() {
    const {style, name, changeName} = this.props
    return (
      <div className={style.css('name')}>
        <div>
          <Link href="/input">
            {`Input`}
          </Link>
          {`Output`}
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

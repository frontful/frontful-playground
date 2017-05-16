import React from 'react'
import style from 'frontful-style/react'
import {Todo} from '../models/Todo'

const resolver = () => {}

@resolver.config(({models}) => ({
  todo: models.global(Todo)
}))
@resolver.bind((resolve) => {
  resolve(({todo}) => ({
    filter: todo.filter,
  }))
})
@style((css) => {
  css('.filter', {
    textAlign: 'center',
  })
})
export default class Blueprint extends React.PureComponent {
  render() {
    const {style, filter} = this.props
    return (
      <div className={style.css('filter')}>
        {filter}
      </div>
    )
  }
}

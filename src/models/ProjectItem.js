import {TodoItem} from './TodoItem'
import {model} from 'frontful-model'
import {Project} from './Project'

@model.config(({models}) => ({
  project: models.global(Project),
}))
@model.format({
  taskId: 0,
})
export class ProjectItem extends TodoItem {
  constructor(...args) {
    super(...args)
    this.taskId = this.taskId || Math.round(Math.random() * 1000000)
  }

  remove() {
    this.project.removeItem(this)
  }
}

import {TodoItem} from './TodoItem'
import {model} from 'frontful-model'
import {Project} from './Project'

class A extends TodoItem {
}

class B extends A {
}

@model.config(({models, log}) => ({
  project: models.global(Project),
  log: log,
}))
@model.format({
  taskId: null,
})
export class ProjectItem extends B {
  constructor(...args) {
    super(...args)
    this.taskId = this.taskId || Math.round(Math.random() * 1000000)
    this.log(`[constructor] item: ${this.taskId}`)
  }

  remove() {
    this.project.removeItem(this)
  }
}

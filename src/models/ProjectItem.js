import {TodoItem} from './TodoItem'
import {model} from 'frontful-model'
import {Project} from './Project'

class A extends TodoItem {
}

class B extends A {
}

@model.config((context) => ({
  project: context.global(Project)
}))
@model.format({
  taskId: null,
})
export class ProjectItem extends B {
  constructor(...args) {
    super(...args)
    this.taskId = this.taskId || Math.round(Math.random() * 1000000)
  }

  remove() {
    this.project.removeItem(this)
  }
}

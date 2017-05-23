import {TodoItem} from './TodoItem'
import {model} from 'frontful-model'

class A extends TodoItem {
}

class B extends A {
}

@model.format({
  taskId: null,
})
export class ProjectItem extends B {
  constructor(data) {
    super(data)
    this.taskId = this.taskId || Math.round(Math.random() * 1000000)
  }
}

import {TodoItem} from './TodoItem'
import {model} from 'frontful-model'

@model.format({
  taskId: null,
})
export class ProjectItem extends TodoItem {
  constructor(data) {
    super(data)
    this.taskId = this.taskId || Math.round(Math.random() * 1000000)
  }
}

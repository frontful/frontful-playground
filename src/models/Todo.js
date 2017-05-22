import {TodoItem} from './TodoItem'
import {model, format} from 'frontful-model'

@model.format({
  filter: null,
  items: format.array(format.model(TodoItem)),
})
export class Todo {
  add(text) {
    this.items.push({
      text
    })
  }
}

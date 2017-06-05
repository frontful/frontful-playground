import {TodoItem} from './TodoItem'
import {model, format} from 'frontful-model'

@model.format({
  filter: null,
  items: format.array(format.model(TodoItem)),
})
export class Todo {
  removeItem(item) {
    return this.items.splice(this.items.indexOf(item), 1).length > 0
  }
}

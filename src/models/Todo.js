import {TodoItem} from './TodoItem'
import {model, formatter} from 'frontful-model'

@model({
  filter: '',
  items: formatter.array(formatter.model(TodoItem)),
})
export class Todo {
  removeItem(item) {
    return this.items.splice(this.items.indexOf(item), 1).length > 0
  }
}

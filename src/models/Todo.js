import {TodoItem} from './TodoItem'
import {model, formatter} from 'frontful-model'

@model.format({
  filter: '',
  items: formatter.array(formatter.model(TodoItem)),
})
export class Todo {
  removeItem(item) {
    return this.items.splice(this.items.indexOf(item), 1).length > 0
  }
}

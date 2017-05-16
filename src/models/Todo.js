import {Model, format} from 'frontful-model'
import {TodoItem} from './TodoItem'

@format({
  filter: null,
  items: format.array(format.model(TodoItem))
})
export class Todo extends Model {
}

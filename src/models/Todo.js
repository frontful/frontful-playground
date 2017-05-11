import {Model, format, register} from 'frontful-model'
import {TodoItem} from './TodoItem'

@register('todo')
@format({
  filter: null,
  items: format.array(
    format.model(TodoItem)
  )
})
export class Todo extends Model {
}

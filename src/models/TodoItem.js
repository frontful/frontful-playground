import {Model, format} from 'frontful-model'

@format({
  text: null,
  compleated: false,
  tags: format.map(true)
})
export class TodoItem extends Model {
}

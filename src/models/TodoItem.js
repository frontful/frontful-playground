import {Model, format} from 'frontful-model'

@format({
  text: null,
  compleated: false,
  tags: format.map(null)
})
export class TodoItem extends Model {
}

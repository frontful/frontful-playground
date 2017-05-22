import {model, format} from 'frontful-model'

@model.format({
  text: null,
  compleated: false,
  tags: format.map(null),
  itemId: null,
})
export class TodoItem {
  constructor() {
    this.itemId = this.itemId || Math.round(Math.random() * 1000)
  }
}

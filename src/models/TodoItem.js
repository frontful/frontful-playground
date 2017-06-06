import {model, formatter} from 'frontful-model'

@model.format({
  text: '',
  compleated: false,
  tags: formatter.map(null),
  itemId: 0,
})
export class TodoItem {
  constructor() {
    this.itemId = this.itemId || Math.round(Math.random() * 1000)
  }
}

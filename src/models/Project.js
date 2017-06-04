import {ProjectItem} from './ProjectItem'
import {Todo} from './Todo'
import {model, format} from 'frontful-model'

class A extends Todo {
}

class B extends A {
}

@model.format({
  name: null,
  items: format.array(format.model(ProjectItem)),
})
export class Project extends B {
  removeItem(item) {
    return this.items.splice(this.items.indexOf(item), 1).length > 0
  }
}

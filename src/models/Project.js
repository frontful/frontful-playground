import {ProjectItem} from './ProjectItem'
import {Todo} from './Todo'
import {model, formatter} from 'frontful-model'

@model.format({
  name: 'Project name',
  items: formatter.array(formatter.model(ProjectItem)),
})
export class Project extends Todo {
}

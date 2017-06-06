import {Models} from 'frontful-model'
import {Resolver} from 'frontful-resolver'

function initialize(element, options) {
  const models = new Models({
    config: {
      'frontful-router': {
        req: options && options.req,
        res: options && options.res,
      }
    }
  })

  const resolver = new Resolver(element, {
    models: models,
  })

  return {
    models,
    resolver,
  }
}

export default initialize

import {dal} from 'frontful-dal'

@dal.config(() => ({
  url: 'https://hacker-news.firebaseio.com/v0/',
  mapping: {
    top: () => ({
      path: `topstories.json`,
    }),
  }
}))
export class HackerNews {
}

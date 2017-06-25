import {dao} from 'frontful-dao'

@dao(() => ({
  url: 'https://hacker-news.firebaseio.com/v0/',
  mapping: {
    top: () => ({
      path: `topstories.json`,
    }),
  }
}))
export class HackerNews {
}

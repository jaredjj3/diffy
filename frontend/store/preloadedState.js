import * as b from '../util/sampleBody';

const randomAuthor = () => Math.random() < 0.5 ? 'Jane Doe' : 'John Smith';

export default {
  article: {
    index: 2,
    history: [
      { author: randomAuthor(), body: b.body1 },
      { author: randomAuthor(), body: b.body2 },
      { author: randomAuthor(), body: b.body3 }
    ]
  }
};
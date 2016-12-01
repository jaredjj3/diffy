import sampleBody from '../util/sampleBody';

const randomAuthor = () => Math.random() < 0.5 ? 'Jane Doe' : 'John Smith';

export default {
  article: {
    author: randomAuthor(),
    body: sampleBody,
    gitdiffs: [
    ]
  }
};
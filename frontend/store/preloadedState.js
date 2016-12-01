import * as b from '../util/sampleBody';
import GitDiffGenerator from '../util/GitDiffGenerator';

const randomAuthor = () => Math.random() < 0.5 ? 'Jane Doe' : 'John Smith';
const matchFrac = (prevBody, nextBody) => {
  const gdg = new GitDiffGenerator(prevBody, nextBody);
  return gdg.matchFrac();
};
const gitDiff = (prevBody, nextBody) => {
  const gdg = new GitDiffGenerator(prevBody, nextBody);
  return gdg.getGitDiff();
};

export default {
  article: {
    index: 2,
    history: [
      { 
        author: randomAuthor(), 
        body: b.body1, 
        matchFrac: null, 
        gitDiff: gitDiff(b.body1, b.body2)
      },
      { 
        author: randomAuthor(), 
        body: b.body2, 
        matchFrac: matchFrac(b.body1, b.body2),
        gitDiff: gitDiff(b.body1, b.body2) 
      },
      { 
        author: randomAuthor(), 
        body: b.body3, 
        matchFrac: matchFrac(b.body2, b.body3),
        gitDiff: gitDiff(b.body2, b.body3)
      }
    ]
  }
};
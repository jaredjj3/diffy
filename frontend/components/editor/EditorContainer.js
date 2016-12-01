import { connect } from 'react-redux';
import Editor from './Editor';
import { 
  updateAuthor,
  updateBody,
  increaseIndex,
  decreaseIndex,
  generateGitDiff 
} from '../../actions/articleActions';

const mapStateToProps = state => {
  const index = state.article.index;
  const article = state.article.history[index];
  return {
    body: article.body,
    author: article.author,
    indexStr: `( ${index + 1} / ${state.article.history.length} )`
  };
};

const mapDispatchToProps = dispatch => ({
  updateAuthor: author => dispatch(updateAuthor(author)),
  updateBody: body => dispatch(updateBody(body)),
  decreaseIndex: () => dispatch(decreaseIndex()),
  increaseIndex: () => dispatch(increaseIndex()),
  generateGitDiff: body => dispatch(generateGitDiff(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
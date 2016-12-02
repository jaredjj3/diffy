import { connect } from 'react-redux';
import Editor from './Editor';
import { 
  updateBody,
  increaseIndex,
  decreaseIndex,
  addHistory
} from '../../actions/articleActions';

const mapStateToProps = state => {
  const index = state.article.index;
  const article = state.article.history[index];
  return {
    index,
    body: article.body,
    author: article.author,
    history: state.article.history,
    indexStr: `(version ${index + 1} / ${state.article.history.length})`
  };
};

const mapDispatchToProps = dispatch => ({
  updateBody: body => dispatch(updateBody(body)),
  decreaseIndex: () => dispatch(decreaseIndex()),
  increaseIndex: () => dispatch(increaseIndex()),
  addHistory: history => dispatch(addHistory(history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
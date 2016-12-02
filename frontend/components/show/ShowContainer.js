import { connect } from 'react-redux';
import Show from './Show';
import { gotoIndex } from '../../actions/articleActions';

const mapStateToProps = state => {
  const article = state.article;
  return {
    index: article.index,
    history: article.history,
    article: article.history[article.index]
  };
};

const mapDispatchToProps = dispatch => ({
  gotoIndex: index => dispatch(gotoIndex(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
import { connect } from 'react-redux';
import Show from './Show';

const mapStateToProps = state => {
  const article = state.article;
  return {
    index: article.index,
    history: article.history
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
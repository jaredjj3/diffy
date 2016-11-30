import { connect } from 'react-redux';
import Editor from './Editor';

const mapStateToProps = state => ({
  body: state.article.body,
  author: state.article.author
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
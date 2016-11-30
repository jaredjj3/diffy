import { connect } from 'react-redux';
import Editor from './Editor';
import { 
  updateAuthor,
  updateBody 
} from '../../actions/articleActions';

const mapStateToProps = state => ({
  body: state.article.body,
  author: state.article.author
});

const mapDispatchToProps = dispatch => ({
  updateAuthor: author => dispatch(updateAuthor(author)),
  updateBody: body => dispatch(updateBody(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
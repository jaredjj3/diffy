import { connect } from 'react-redux';
import Editor from './Editor';
import { 
  updateAuthor,
  updateBody,
  resetArticle 
} from '../../actions/articleActions';

const mapStateToProps = state => ({
  body: state.article.body,
  author: state.article.author
});

const mapDispatchToProps = dispatch => ({
  updateAuthor: author => dispatch(updateAuthor(author)),
  updateBody: body => dispatch(updateBody(body)),
  resetArticle: () => dispatch(resetArticle())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
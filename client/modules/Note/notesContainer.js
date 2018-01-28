import { connect } from 'react-redux';
import Notes from './Notes';
import { createNote, 
  deleteNote, 
  updateNote, 
  createNoteRequest, 
  deleteNoteRequest, 
  updateNoteRequest 
} from './NoteActions';

const mapDispatchToProps = {
  createNote: createNoteRequest,
  deleteNote: deleteNoteRequest,
  updateNote: updateNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
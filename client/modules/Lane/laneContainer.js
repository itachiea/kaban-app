import { connect } from 'react-redux';
import Lane from './Lane';
import { deleteLane, updateLane, editLane, 
  deleteLaneReques, updateLaneRequest } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
    return {
      laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
    };
  };

const mapDispatchToProps = { 
  editLane: updateLaneRequest, 
  deleteLane: deleteLaneReques, 
  //updateLane: updateLaneRequest,
  addNote: createNoteRequest, 
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
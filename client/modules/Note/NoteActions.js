import uuid from 'uuid';
// Export Constants

export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';

// Export Actions

export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note,
  };
 }
  
  export function updateNote(note) {
    return {
      type: UPDATE_NOTE,
      note,
    };
  }
  
  export function deleteNote(noteId, laneId) {
    return {
      type: DELETE_NOTE,
      noteId,
      laneId,
    };
  }

  export function createNotes(notesData) {
    return {
      type: CREATE_NOTES,
      notes: notesData,
    };
  }

  export function createNoteRequest(note, laneId) {
    return (dispatch) => {
      return callApi('notes', 'post', { note, laneId }).then(noteResp => {
        dispatch(createNote(noteResp, laneId));
      });
    };
  }

  export function deleteNoteRequest(noteId, laneId) {
    return(dispatch) => {
      return callApi('notes/:noteId', 'delete', { noteId, laneId }).then(noteResp => {
        dispatch(deleteNote(noteResp, laneId));
      });
    };
  }

  export function updateNoteRequest(noteId, laneId) {
    return(dispatch) => {
      return callApi('notes/:noteId', 'put', { noteId, laneId }).then(noteResp => {
        dispatch(updateNote(noteResp, laneId));
      });
    };
  }
import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } from './NoteActions';

const initialState = [];

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return state.map(lane => {
        if (lane.id === action.laneId) {
          const notes = [...lane.notes, action.note.id];
          return { ...lane, notes };
        }
        return lane;
      });

   case UPDATE_NOTE:
     return state.map((note) => {
       return note.id === action.id ? { ...note, ...action.note } : note;
     });

    case DELETE_NOTE:
    return state.map(lane => {
      if (lane.id === action.laneId) {
        const notes = [...lane.notes, state.filter((note) => note.id !== action.noteId)];
        return { ...lane, notes };
      }
      return lane;
    });
      // return state.filter((note) => note.id !== action.noteId);

    default:
      return state;
  }
}
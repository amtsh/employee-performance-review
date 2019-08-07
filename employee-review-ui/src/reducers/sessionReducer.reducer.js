import { GET_SESSION, SET_SESSION } from "../actions/Session.actions";

const initialState = {
  email: ""
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSION:
      return {
        ...state
      };
    case SET_SESSION:
      return {
        ...state,
        email: action.payload.email
      };
    default:
      return state;
  }
};

export const getSession = state => state.session;

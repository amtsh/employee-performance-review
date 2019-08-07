const GET_SESSION = "GET_SESSION";
const SET_SESSION = "SET_SESSION";

function getSession() {
  return {
    type: GET_SESSION
  };
}

function setSession(session) {
  return {
    type: SET_SESSION,
    payload: session
  };
}

export { GET_SESSION, SET_SESSION, getSession, setSession };

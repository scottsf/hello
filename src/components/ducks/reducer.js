const initialState = {
  username: '',
  id: null,
  profilePicture: '',
};

const GET_USER_INFO = 'GET_USER_INFO';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export const getUserInfo = userInfo => {
  return {
    type: GET_USER_INFO,
    payload: userInfo,
  };
};

export default reducer;

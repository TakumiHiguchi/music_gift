const initialState = {
    userdetails:{}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERDETAILS_EXISTS":
        return Object.assign({}, state, {
            userdetails: action.value
        });
    case "USERDETAILS_NOEXISTS":
        return Object.assign({}, state, {
            userdetails: {}
        });
    default:
        return state
  }
}

export default userReducer
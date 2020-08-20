const initialState = {
    isSiginin:false,
    user:{}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNED_IN":
        return Object.assign({}, state, {
            isSiginin: true,
            user: action.value
        });
    case "SIGNED_OUT":
        return Object.assign({}, state, {
            isSiginin: false,
            user: {}
        });
    default:
        return state
  }
}

export default userReducer
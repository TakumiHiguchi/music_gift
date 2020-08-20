const initialState = {
    isSiginin:false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNED_IN":
        return Object.assign({}, state, {
            isSiginin: true
        });
    case "SIGNED_OUT":
        return Object.assign({}, state, {
            isSiginin: false
        });
    default:
        return state
  }
}

export default userReducer
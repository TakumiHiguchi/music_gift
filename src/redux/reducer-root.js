import { combineReducers } from 'redux'

import userReducer from './reducers/userReducer'
import userDetailsReducer from './reducers/userDetailsReducer'

const rootReducer = combineReducers({
    user:userReducer,
    userDetails:userDetailsReducer
})

export default rootReducer
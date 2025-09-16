
import homeReducer from "./reducers/homeReducer";
import authReducer from "./reducers/authReducer";

const rootReducer = {
    home: homeReducer,
    auth: authReducer
}

export default rootReducer;
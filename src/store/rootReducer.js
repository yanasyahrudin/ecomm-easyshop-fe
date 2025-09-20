
import homeReducer from "./reducers/homeReducer";
import authReducer from "./reducers/authReducer";
import cardReducer from "./reducers/cardReducer";
const rootReducer = {
    home: homeReducer,
    auth: authReducer,
    card: cardReducer
}

export default rootReducer;
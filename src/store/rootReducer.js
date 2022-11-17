//this is a place where you can gather all states
import{ combineReducers} from "redux";
import cartReducer from "./reducers/cartReducer"
const rootReducer = combineReducers({
    cart: cartReducer,

})
export default rootReducer
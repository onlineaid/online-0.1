import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
    productsReducer, 
    productDetailsReducer, 
    newReviewReducer,
    productDeleteReducer,
    newProductReducer,
    productReviwsReducer,
    reviewReducer
} from "./reducers/productReducers";

import { sliderReducer, createSliderReducer, deleteSliderReducer } from './reducers/sliderReducer'

import { authReducer,
    userReducer, 
    forgotPasswordReducer,
    allUsersReducer,
    userDetailsReducer
} from "./reducers/userReducers";

import { cartReducer } from "./reducers/cartReducers";
import { 
    newOrderReducer, 
    myOrdersReducer, 
    orderDetailsReducer, 
    allOrdersReducer,
    orderReducer 
} from './reducers/orderReducers';

const reducer = combineReducers({
    products : productsReducer,
    createProduct: newProductReducer,
    slider: sliderReducer,
    createSlider: createSliderReducer,
    deleteSlider: deleteSliderReducer,
    productReviews: productReviwsReducer,
    productDelete: productDeleteReducer,
    getProductDetails : productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword : forgotPasswordReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    newReview: newReviewReducer,
    review: reviewReducer
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;


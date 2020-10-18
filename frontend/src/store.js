import {createStore,combineReducers,compose, applyMiddleware} from 'redux';
import {productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer, productReviewSaveReducer} from './reducers/productReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './reducers/userReducers';
import { myOrderListReducer, orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListReducer, orderDeleteReducer } from './reducers/orderReducers';

const cartItems= Cookie.getJSON("cartItems") || [];
const userInfo= Cookie.getJSON("userInfo") || null;
const initialState = {cart: {cartItems, shipping:{}, payment:{}},
                       userSignin: {userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    productReviewSave: productReviewSaveReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //to add redux extention in chrome to record the state of an action

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
export default store;
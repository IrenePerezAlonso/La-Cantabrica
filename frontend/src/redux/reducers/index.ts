import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import selectedProductReducer from './selectedProductReducer';
import cartReducer from './cartReducer';
import loginReducer from './UserReducer';

const rootReducer = combineReducers({
  productsStore: productsReducer,
  selectedProduct: selectedProductReducer,
  cart: cartReducer,
  user: loginReducer
});

export default rootReducer;

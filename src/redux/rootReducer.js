import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from './menu/menuReducer';
import shopReducer from './shop/shopReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  }


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    menu: menuReducer,
    shop: shopReducer
});
export default persistReducer(persistConfig, rootReducer);
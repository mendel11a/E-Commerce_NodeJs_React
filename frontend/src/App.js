import React from 'react';
import './App.css';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import OrderScreen from './screens/OrderScreen';


function App() {

  const userSignin = useSelector(state =>state.userSignin);
  const { userInfo } = userSignin;
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
<BrowserRouter>
  <div className="grid-container">
              <header className="header">
                  <div className="brand">
                      <button onClick={openMenu}>
                          &#9776;
                      </button>
                      <Link to="/">Amazona</Link>
                  </div>
                  <div className="header-links">
                      {
                        userInfo ? (<Link to="/cart/:id?">Cart</Link>):
                        (<Link to="/signin">Cart</Link>)
                      }
                      {
                        userInfo ? (<Link to="/profile">{userInfo.name}</Link>):
                        (<Link to="/signin">Sign In</Link>)
                      }
                      {userInfo && userInfo.isAdmin && (
                        <div className="dropdown">
                          <a href="#">Admin</a>
                          <ul className="dropdown-content">
                            <li>
                              <Link to="/orders">Orders</Link>
                              <Link to="/products">Products</Link>
                            </li>
                          </ul>
                        </div>
                      )}
                  </div>
              </header>
              <aside className="sidebar">
                  <h3>Shopping Categories</h3>
                  <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                  <ul className="categories">
                    <li>
                      <Link to="/category/Skirt">Skirts</Link>
                    </li>
                    <li>
                      <Link to="/category/Shirt">Shirts</Link>
                    </li>
                    <li>
                      <Link to="/category/Hat">Hats</Link>
                    </li>
                    <li>
                      <Link to="/category/Jogging">Joggings</Link>
                    </li>
                    <li>
                      <Link to="/category/Jacket">Jackets</Link>
                    </li>
                    <li>
                      <Link to="/category/Dress">Dresses</Link>
                    </li>
                  </ul>
              </aside>
              <main className="main">
                  <div className="content">
                    <Route path="/orders" component={OrdersScreen} />
                    <Route path="/order/:id" component={OrderScreen} />
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/products" component={ProductsScreen} />
                    <Route path="/payment" component={PaymentScreen}/>        
                    <Route path="/placeorder" component={PlaceOrderScreen}/>        
                    <Route path="/shipping" component={ShippingScreen}/>        
                    <Route path="/category/:id" component={HomeScreen} />
                    <Route path="/register" component={RegisterScreen}/>        
                    <Route path="/signin" component={SigninScreen}/>        
                    <Route path="/product/:id" component={ProductScreen}/>        
                    <Route path="/cart/:id?" component={CartScreen}/> 
                    <Route path="/" exact={true} component={HomeScreen}/> 
                  </div>
              </main>
              <footer className="footer">
                  All Rights reserved.
              </footer>
  </div>
</BrowserRouter>
  );
}

export default App;

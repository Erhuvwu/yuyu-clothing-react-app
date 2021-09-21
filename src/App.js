import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
// import Cart from './pages/Cart';
// import Contact from './pages/Contact';
import Login from './pages/Login';
import Shop from './pages/Shop';

import './App.css'
import Home from './pages/Home';
import Checkout from './pages/Checkout';

const App = ()=> {
    return (
        <div id='app'>
            <NavBar />
            <Switch>
                <Route path='/shop'>
                    <Shop />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/checkout'>
                    <Checkout />
                </Route>
                {/*<Route path='/cart'>
                    <Cart />
                </Route> */}
            </Switch>
           
            {/* <Footer /> */}
        </div>
    );
}

export default App;
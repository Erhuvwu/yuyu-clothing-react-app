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
import Contact from './pages/Contact';
import AddUser from './components/AddUser';
import ListUsers from './components/ListUsers';
import DeleteUser from './components/DeleteUser';
import UpdateUser from './components/UpdateUser';
import ViewUser from './components/ViewUser';

const App = ()=> {
    return (
        <div id='app'>
            <NavBar />
            <Switch>
                <Route path='/shop'>
                    <Shop />
                </Route>
                <Route path='/home' component={Home}/>
                 
                <Route path='/login' component={ListUsers}/>
                 
                <Route path='/checkout'>
                    <Checkout />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                {/* <Route path="/users" component={ListUsers}/> */}
                <Route path="/add-user" component={AddUser}/>
                <Route path="/update-user/:id" component={UpdateUser}/>
                <Route path="/delete-user/:id" component={DeleteUser}/>
                <Route path="/view-user/:id" component={ViewUser}/>
            </Switch>
           
            {/* <Footer /> */}
        </div>
    );
}

export default App;
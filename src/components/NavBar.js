import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CartDropdown from './CartDropdown';
import CartIcon from './CartIcon';

const NavBar = ({ currentUser, hidden }) => {
    return (
        <nav id='nav-bar'>
            <Link className='logo-container' to='./home'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsRW4mBcK1h-0v_MXUSLhUChZJkawwMIu6w&usqp=CAU' width='50' height='50' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>Shop</Link>


                <Link className='option' to='/contact'>Contact</Link>


                <Link className='option' to='/login'>Login</Link>


                {/* <Link className='option' to='/cart'>Cart</Link> */}
                <CartIcon />
            </div>
            {
                hidden ? null :
                    <CartDropdown />

            }

        </nav>

    )};
    //destructuring nested values
    const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
        currentUser,
        hidden
      });
 
    export default connect(mapStateToProps)(NavBar);
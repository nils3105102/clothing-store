import React from 'react';
import './Header.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import Cart from '../Cart/Cart';
import CartModal from '../CartModal/CartModal';


const Header = ({currentUser, cart}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/" >
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser 
                    ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
                    : <Link className="option" to="/signin" >SIGN IN</Link>
                }
                <Cart />
            </div>
            {
                cart ? null : <CartModal />
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        cart: state.cart.hidden
    }
}



export default connect(mapStateToProps)(Header);
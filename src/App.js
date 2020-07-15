import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/Header/Header';
import SignUpAndInPage from './pages/SignUpAndInPage/SignUpAndInPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelector';
import CheckoutPage from './pages/сheckoutPage/CheckoutPage';



class App extends React.Component {
    unsubscribeFromAuth = null;


    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if(userAuth){
                const userRef = createUserProfileDocument(userAuth);
                (await userRef).onSnapshot(snapShot=> {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    })
                })
            } else {
                setCurrentUser(userAuth);
            }

        })
    }
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route  path="/shop" component={ShopPage} />
                    <Route path="/checkout" component={CheckoutPage} />
                    <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to='/'/> : <SignUpAndInPage />} />
                </Switch>
            </div>
        );
    }
    
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

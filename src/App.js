import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/Header/Header';
import SignUpAndInPage from './pages/SignUpAndInPage/SignUpAndInPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

    state = {
        currentUser: null
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

            if(userAuth){
                const userRef = createUserProfileDocument(userAuth);
                (await userRef).onSnapshot(snapShot=> {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                })
            } else {
                this.setState({currentUser: userAuth})
            }

        })
    }
    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    render(){
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route  path="/shop" component={ShopPage} />
                    <Route  path="/signin" component={SignUpAndInPage} />
                </Switch>
            </div>
        );
    }
    
}

export default App;

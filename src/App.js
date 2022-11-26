import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shopPage';
import Header from './componenets/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      console.log('state', this.state),
      (
        <div>
          <Header der currentUser={this.state.currentUser} />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route exact path="/signin" element={<SignInAndSignUpPage />} />
          </Routes>
        </div>
      )
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Routes, Route, Navigate } from 'react-router-dom';
import ShopPage from './pages/shop/shopPage';
import Header from './componenets/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      console.log('this.props.currentuser', this.props.currentUser),
      (
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shop" element={<ShopPage />} />
            <Route
              exact
              path={'/signin'}
              element={
                this.props.currentUser ? (
                  <Navigate to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Routes>
        </div>
      )
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(App);

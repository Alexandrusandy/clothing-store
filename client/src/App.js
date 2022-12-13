import React, { useEffect } from 'react';
import './App.css';
import Header from './componenets/header/header';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shopPage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop/*" element={<ShopPage />} />
        <Route
          exact
          path={'/signin'}
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />}
        />
        <Route exact path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

export default App;

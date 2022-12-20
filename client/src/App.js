import React, { lazy, useEffect, Suspense } from 'react';
import Header from './componenets/header/header';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';
import Spinner from './componenets/spinner/spinner';
import ErrorBoundary from './componenets/error-boundary/error-boundary';

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shopPage'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/shop/*" element={<ShopPage />} />
            <Route
              exact
              path={'/signin'}
              element={
                currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
              }
            />
            <Route exact path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;

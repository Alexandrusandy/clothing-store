import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../componenets/spinner/spinner';

const CollectionsOverviewContainer = lazy(() => import('../../componenets/collections-overview/collections-overview.container'))
const CollectionPageContainer = lazy(() => import('../collection/collection.container'))

const ShopPage = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/collections'
    // )
    //   .then((response) => response.json())
    //   .then((colections) => console.log('collections', colections));
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            exact
            path={``}
            element={
              <CollectionsOverviewContainer isLoading={fetchCollectionsStart} />
            }
          />
          <Route path={`/:collectionId`} element={<CollectionPageContainer />} />
        </Routes>
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

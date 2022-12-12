import React, { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../componenets/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

const ShopPage = ({ fetchCollectionsStart }) => {
  const params = useParams();
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
      <Routes>
        <Route
          exact
          path={``}
          element={
            <CollectionsOverviewContainer isLoading={fetchCollectionsStart} />
          }
        />
        <Route
          path={`/:collectionId`}
          element={<CollectionPageContainer params={params} />}
        />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

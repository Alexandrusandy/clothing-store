import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import CollectionsOverview from '../../componenets/collections-overview/collections-overview.jsx';
import CollectionPage from '../collection/collection-page.jsx';

const ShopPage = () => {
  const params = useParams();

  return (
    <div className="shop-page">
      <Routes>
        <Route exact path={``} element={<CollectionsOverview />} />
        <Route
          path={`/:collectionId`}
          element={<CollectionPage params={params} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;

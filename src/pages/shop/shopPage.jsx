import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../componenets/collections-overview/collections-overview.jsx';
import CollectionPage from '../collection/collection-page.jsx';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    console.log('update', updateCollections);
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { params } = this.props;

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
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

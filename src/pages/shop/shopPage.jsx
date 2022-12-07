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
import WithSpinner from '../../componenets/with-spinner/with-spinner.jsx';

const CollectionsOverviewWithSpinnes = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { params } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            exact
            path={``}
            element={<CollectionsOverviewWithSpinnes isLoading={loading} />}
          />
          <Route
            path={`/:collectionId`}
            element={
              <CollectionPageWithSpinner params={params} isLoading={loading} />
            }
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

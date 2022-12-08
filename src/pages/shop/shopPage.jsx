import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../componenets/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
  componentDidMount() {
    // fetch(
    //   'https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/collections'
    // )
    //   .then((response) => response.json())
    //   .then((colections) => console.log('collections', colections));
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { params, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Routes>
          <Route
            exact
            path={``}
            element={
              <CollectionsOverviewContainer isLoading={isCollectionFetching} />
            }
          />
          <Route
            path={`/:collectionId`}
            element={<CollectionPageContainer params={params} />}
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

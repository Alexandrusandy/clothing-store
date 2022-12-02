import React from 'react';

import './collection-page.styles.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = (props) => {
  console.log('collection props', props);
  return (
    <div className="collection-page">
      <h2>collection PAGE</h2>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection('jackets')(state),
});

export default connect(mapStateToProps)(CollectionPage);

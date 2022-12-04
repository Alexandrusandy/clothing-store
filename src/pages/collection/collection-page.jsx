import React from 'react';

import './collection-page.styles.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../componenets/collection-item/collection-item';

const CollectionPage = (props) => {
  const { title, items } = props.collection;
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(Object.values(ownProps.params)[0])(state),
});

export default connect(mapStateToProps)(CollectionPage);

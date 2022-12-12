import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../componenets/collection-item/collection-item';
import {
  CollectionPageContainer,
  CollectionPageItemsContainer,
  CollectionTitle,
} from './collection-page.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionPageItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItemsContainer>
    </CollectionPageContainer>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(Object.values(ownProps.params)[0])(state),
});

export default connect(mapStateToProps)(CollectionPage);

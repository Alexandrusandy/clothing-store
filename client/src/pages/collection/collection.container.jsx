import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectIsCOllectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../componenets/with-spinner/with-spinner';
import collectionPage from './collection-page';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCOllectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionPage);

export default CollectionPageContainer;

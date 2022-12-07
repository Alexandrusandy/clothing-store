import React from 'react';
import { useParams } from 'react-router-dom';
import ShopPage from './shopPage';

const ShopPageWrapper = () => {
  const params = useParams();
  console.log('params', params);
  return (
    <div>
      <ShopPage params={params} />
    </div>
  );
};

export default ShopPageWrapper;

import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return <div>details de {id}</div>;
};

export default ProductDetails;

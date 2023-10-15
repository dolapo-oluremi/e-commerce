import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs';
import ProductDIsplay from '../../Components/ProductDisplay/ProductDIsplay';
import Desc from '../../Components/Desc/Desc';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find(v => v.id === Number(productId))
  return (
    <div className='product'>
      <BreadCrumbs product={product} />
      <ProductDIsplay product={product} />
      <Desc />
    </div>
  )
}

export default Product
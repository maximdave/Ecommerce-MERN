import { useContext, useState } from 'react';
import { GlobalState } from '../../../GlobalState';
import Loading from '../utils/loading/Loading';
import ProductItem from '../utils/productItem/ProductItem';

// Loading
const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  // const [callback, setCallback] = state.productsAPI.callback;
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <>
      <div className='products'>
        {products.map((product) => {
          return <ProductItem key={product._id} product={product} isAdmin={isAdmin}/>;
        })}
      </div>

      {products.length === 0 && <Loading />}
    </>
  );
};

export default Products;

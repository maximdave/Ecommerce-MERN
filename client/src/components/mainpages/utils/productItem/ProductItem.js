import BtnRender from './BtnRender';

const ProductItem = ({ product, isAdmin }) => {
  return (
    <div className='product_card'>
      {isAdmin && (
        <input
          type='checkbox'
          checked={product.checked}
          // onChange={() => handleCheck(product._id)}
        />
      )}
      <img src={product.images.url} alt='' />

      <div className='product_box'>
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>

      <BtnRender product={product} />
      {/* <div className='row_btn'>
        <Link id='btn_buy' to='/cart'>
          Buy
        </Link>
        <Link id='btn_view' to={`detail/${product._id}`}>
          View
        </Link>
      </div> */}
    </div>
  );
};

export default ProductItem;

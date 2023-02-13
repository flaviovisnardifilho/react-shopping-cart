import { useParams, useNavigate } from 'react-router-dom';

export function Product({ products, addToCart }) {
  const { id } = useParams();
  const { src, productName, width, height, description, avaiable, price } =
    products.filter((prod) => prod.id === id)[0];

  let buttonDisabled = avaiable === 0 ? true : false;
  const navigate = useNavigate();

  return (
    <div className="product">
      <h3 className="title">{productName}</h3>
      <div className="product-content">
        <img
          src={src}
          alt={productName}
          width={width || '30%'}
          height={height || '30%'}
        />
        <div className="product-text">
          <p className="description">{description}</p>

          <p className="amount-price">
            <span className="amount">Items left: {avaiable}</span>
            <span className="price">{price}</span>
          </p>
          <button
            className="addButton"
            onClick={() => {
              addToCart(id);
              navigate('/shoppingcart');
            }}
            disabled={buttonDisabled}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

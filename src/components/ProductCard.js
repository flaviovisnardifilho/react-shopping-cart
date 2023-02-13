export function ProductCard({
  id,
  src,
  productName,
  description,
  avaiable,
  price,
  width = '200px',
  height = '200px',
}) {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className="title">{productName}</h3>
        <img src={src} alt={productName} width={width} height={height} />
        <p className="amount-price">
          <span className="amount">Items left: {avaiable}</span>
          <span className="price">{price}</span>
        </p>
      </div>
    </div>
  );
}

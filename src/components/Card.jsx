function Card({ title, price, image }) {
  const handleClick = () => {
    alert(`yuo add ${title} and its price ${price} `);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <p className="card-price">${price}</p>
      <button className="card-btn" onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;

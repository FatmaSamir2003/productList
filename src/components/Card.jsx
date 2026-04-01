function Card({ title, price, image }) {
  const handleClick = () => {
    alert(`yuo added ${title} and its price is $${price}`);
  };

  return (
    <div className="bg-gray rounded-2xl shadow-md p-4 hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-4">{title}</h2>

      <p className="text-gray-600 mt-2">${price}</p>

      <button
        onClick={handleClick}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;

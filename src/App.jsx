import Card from "./components/Card";

import laptop from "./assets/laptop.jpg";
import headphone from "./assets/headphone.jpg";
import tv from "./assets/tv.jpg";
import airpod from "./assets/airpod.jpeg";
import iphone from "./assets/iphone.jpg";

function App() {
  const products = [
    { id: 1, title: "Laptop", price: 1000, image: laptop },
    { id: 2, title: "Headphone", price: 200, image: headphone },
    { id: 3, title: "TV", price: 800, image: tv },
    { id: 4, title: "Fridge", price: 1200, image: airpod },
    { id: 5, title: "iPhone", price: 1500, image: iphone },
  ];

  return (
    <div className="app">
      <h1 className="title">Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

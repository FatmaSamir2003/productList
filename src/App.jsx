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
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Product List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

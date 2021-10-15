import './App.css';
import {Routes, Route} from "react-router-dom";
import { ProductList } from "./Components/Products/productList";
import {ProductDetails} from "./Components/Products/productDetails";
import { Cart } from './Components/Cart/cart';
import { Wishlist } from './Components/Wishlist/wishlist';
import {Home} from "./Components/Home/home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="product" element={<ProductList/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      
    </div>
  );
}

export default App;

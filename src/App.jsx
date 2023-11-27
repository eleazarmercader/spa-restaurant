import { Routes, Route } from 'react-router-dom';
import { CartProvider } from '/src/components/CartContext.jsx';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';
import DetailView from './views/DetailView';
import CartView from './views/CartView';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/menu" element={<MenuView />} />
          <Route path="/detail/:itemId" element={<DetailView />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </div>
      <Footer />
    </CartProvider>
  );
}

export default App;
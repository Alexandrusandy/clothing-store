import './App.css';
import HomePage from './pages/homepage/homepage';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shopPage';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;

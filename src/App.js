import './App.css';
import HomePage from './pages/homepage/homepage';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shopPage';
import Header from './componenets/header/header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;

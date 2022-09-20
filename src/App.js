import 'bootstrap/dist/css/bootstrap.min.css';
import './app/style.css';
import './app/style.min.css';
import Router from './app/Router';
import CartContext from './app/CartContext';

function App() {
  return (
    
      <CartContext>
        <Router/>
      </CartContext>

  );
}

export default App;

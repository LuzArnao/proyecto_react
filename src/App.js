import 'bootstrap/dist/css/bootstrap.min.css';
import './app/style.css';
import './app/style.min.css';
import Router from './app/Router';
import Provider from './app/CartContext';

function App() {
  return (
    
      <Provider>
        <Router/>
      </Provider>

  );
}

export default App;

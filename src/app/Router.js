import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Layout from './Layout';
import Contacto from '../pages/Contacto';
import Cart from '../pages/Cart';
import Categorias from '../pages/Categorias'
import Checkout from '../pages/Checkout';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="/item/:id" element={<Details/>} />
                <Route path="/category/contactenos" element={<Contacto/>} />
                <Route path="/category/:color" element={<Categorias/>} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
                <Route path="*" element={<div>404</div> } />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;
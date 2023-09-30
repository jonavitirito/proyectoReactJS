import MainLayout from "./layout/MainLayout";

import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from "./context/CartContext";





function App() {

return(
  <CartProvider>
  <MainLayout>
      
 </MainLayout>
      
</CartProvider>
 )
  }
export default App

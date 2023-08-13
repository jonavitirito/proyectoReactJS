import BasicExample from "./components/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
return(
    <div className="header">
  <BasicExample/>

  <ItemListContainer greeting="Bienvenidos a J HAppliances! Los mejores electrodomésticos para tu hogar"/>
 
</div>
 )
  }
export default App

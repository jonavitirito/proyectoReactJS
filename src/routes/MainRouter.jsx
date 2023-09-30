
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBarComponent'
import Category from '../pages/Category'
import ProductDetails from '../pages/productDetails'




const MainRouter = () => {

    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:categoryName" element={<Category/>}/>
                <Route path="/item/:itemId" element={<ProductDetails/>}/>
                
            </Routes>
        </Router>
    )
}

export default MainRouter
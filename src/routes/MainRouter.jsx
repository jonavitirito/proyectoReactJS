
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBarComponent'
import Category from '../pages/Category'
import ItemDetailContainer from '../components/ItemDetailContainer'

const MainRouter = () => {

    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/category/:categoryId" element={<Category/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            </Routes>
        </Router>
    )
}

export default MainRouter
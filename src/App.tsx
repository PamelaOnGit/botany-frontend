import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Kokedamas from "./components/KokedamaList"
import ShowProduct from "./components/ShowProduct"
import Login from "./components/Login"
import AdminMenu from "./components/AdminMenu"
import AllProducts from "./components/AllProducts"
import AddNewProduct from "./components/AddNewProduct"


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kokedamas" element={<Kokedamas />} />
        <Route path="/kokedamas/:productId" element={<ShowProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-menu" element={<AdminMenu />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/all-products/add-new-product" element={<AddNewProduct />} />
        
      </Routes>

    </Router>
  )
}

export default App

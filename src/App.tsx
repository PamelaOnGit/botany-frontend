import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Kokedamas from "./components/KokedamaList"
import ShowProduct from "./components/ShowProduct"
import Login from "./components/Login"
import AdminMenu from "./components/AdminMenu"
import AllProducts from "./components/AllProducts"
import AddNewProduct from "./components/AddNewProduct"
import UpdateProduct from "./components/UpdateProduct"
import Basket from "./components/Basket"
import CustomerDetails from "./components/CustomerDetails"
import DeliveryDetails from "./components/DeliveryDetails"
import DeliveryOptions from "./components/DeliveryOptions"
import ReviewOrder from "./components/ReviewOrder"
import CreatingMyOrder from "./components/CreatingMyOrder"



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
        <Route path="/all-products/update-product/:productId" element={<UpdateProduct />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/delivery-details" element={<DeliveryDetails />} />
        <Route path="/delivery-options" element={<DeliveryOptions />} />
        <Route path="/review-order" element={<ReviewOrder />} />
        <Route path="/creating-my-order" element={<CreatingMyOrder />} />
      </Routes>

    </Router>
  )
}

export default App

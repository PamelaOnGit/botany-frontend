import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Kokedamas from "./components/KokedamaList"
import ShowProduct from "./components/ShowProduct"


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kokedamas" element={<Kokedamas />} />
        <Route path="/kokedamas/:productId" element={<ShowProduct />} />
      </Routes>

    </Router>
  )
}

export default App

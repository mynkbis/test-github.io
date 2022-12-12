import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/user/home/home";
import ProductDetails from "./pages/user/productDetail/detail";

function App() {
  return (<>
    <Navbar />
    <div>
         <Routes>
        <Route path="/" element={<Home />}></Route>
             <Route exact path="ProductDetail:id" element={<ProductDetails/>}>
        </Route></Routes>
   
   
    </div>
 {/* <Footer/> */}
</>
  );
}

export default App;

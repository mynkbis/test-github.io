import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/user/home/home";

function App() {
  return (<>
    <Navbar />
    <div>
         <Routes>
        <Route path="/" element={<Home />}>
        </Route></Routes>
   
   
    </div>
 <Footer/>
</>
  );
}

export default App;

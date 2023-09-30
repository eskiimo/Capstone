import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ReservePage from "./pages/reserve";
import Menu from "./pages/menu";
import OrderPage from "./pages/order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/reserve" element={<ReservePage />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

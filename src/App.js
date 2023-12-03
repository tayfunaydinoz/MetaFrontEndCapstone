import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from "./pages/Home";
import Header from "./components/Header";
import Reservation from "./pages/Reservation";
import Orderonline from "./pages/Orderonline";
import Login from "./pages/Login";

import { animateScroll as scroll } from "react-scroll";

function App() {
  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  return (
    <Container className="p-0">
      <Header handleAbout={scrollTo} />
      <Routes>
        <Route path="/" element={<Home handleAbout={scrollTo} />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/orderonline" element={<Orderonline />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Container>
  );
}

export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Hotels from "./Pages/Hotels";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/singleRoom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import About from "./Pages/About";
import MyBookings from "./Pages/MyBookings";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.jsx";

const App = () => {
  const ownerPath = useLocation().pathname.includes("owner");

  return (
    <div className="w-full mx-auto">
      {!ownerPath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<SingleRoom />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
      {!ownerPath && <Footer />}
    </div>
  );
};

export default App;

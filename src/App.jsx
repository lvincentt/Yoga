import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Schedule from "./pages/Schedulepage";
import Pricing from "./pages/Pricing";
import Instructors from "./pages/InstructorPage";
import Contact from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/instructor" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

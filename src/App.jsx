import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

function App() {
  console.log("APP.js is running 💻");

  return (
    <>
      <BrowserRouter>
        {/* Ensure the whole layout uses flex and min-h-screen */}
        <div className="flex flex-col min-h-screen">
          {/* Navbar and main content */}
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          </div>
          {/* Footer remains at the bottom */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

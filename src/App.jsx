import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing"; // Updated import

function App() {
  console.log("APP.js is running 💻");

  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Landing />} /> {/* Updated component */}
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

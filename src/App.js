import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,  Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex justify-center items-center flex-col">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

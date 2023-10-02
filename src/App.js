import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter,Routes,  Route } from "react-router-dom";

function App() {
  return (
    <div className="App flex justify-center items-center flex-col">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

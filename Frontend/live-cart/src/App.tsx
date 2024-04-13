import Home from "./Components/UserPanel/Home/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./Components/UserPanel/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;

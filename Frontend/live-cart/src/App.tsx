import Home from "./Components/UserPanel/Home/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./Components/UserPanel/Shop/Shop";
import { useState } from "react";
import Context from "./Context";
import ViewProduct from "./Components/UserPanel/Shop/ViewProduct/ViewProduct";
import Path from "./Components/UserPanel/Shop/Path/path";

function App() {
  const [path, setPath] = useState("");
  return (
    <Context.Provider value={{ path, setPath }}>
      <div className="App">
        <Home />
        <main className="main">
          <Path />
          <div className="mx-4">
            <div className="row">
              <Routes>
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/product/:id" element={<ViewProduct />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Foodies from "./foodies/Foodies";
import Growfy from "./growfyProject/view/pages/Growfy";
import Home from "./homePage/Home";
import Planta from "./planta/Planta";
import Protfolio01 from "./portfolio01/page/Protfolio01";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio01" element={<Protfolio01 />} />
        <Route path="/growfy" element={<Growfy />} />
        <Route path="/foodies" element={<Foodies />} />
        <Route path="/planta" element={<Planta />} />
      </Routes>
    </div>
  );
}

export default App;

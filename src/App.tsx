import { Route, Routes } from "react-router-dom";
import "./App.css";
import Foodies from "./foodies/Foodies";
import FuneralLayout from "./funeral/pages/funeralLayout/FuneralLayout";
import Growfy from "./growfyProject/view/pages/Growfy";
import Home from "./homePage/Home";
import FuneralHome from "./funeral/pages/home/Home";
import Planta from "./planta/Planta";
import Protfolio01 from "./portfolio01/page/Protfolio01";
import FrontForm from "./FrontForm/FrontForm";
import FrontFormLayout from "./FrontForm/FrontFormLayout";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio01" element={<Protfolio01 />} />
        <Route path="/growfy" element={<Growfy />} />
        <Route path="/foodies" element={<Foodies />} />
        <Route path="/planta" element={<Planta />} />
        <Route path="/frontform" element={<FrontFormLayout />} />
        <Route path="/funeral" element={<FuneralLayout />}>
          <Route index element={<FuneralHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

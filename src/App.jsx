import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./components/JsxTheorie";
import HookUseState from "./components/HookUseState";
import Form from "./components/Form";
import DisplayList from "./components/DisplayList";
import ExerciceFruits from "./components/ExerciceFruits/ExerciceFruits";

function App() {
  return (
    <>
      {/* <p>Navbar</p> */}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<JsxTheorie />} />
          <Route path="/use-state" element={<HookUseState />} />
          <Route path="/formulaire" element={<Form />} />
          <Route path="/liste" element={<DisplayList />} />
          <Route path="/exercice-fruits" element={<ExerciceFruits />} />
          <Route path="/test" element={<p>Page test !</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

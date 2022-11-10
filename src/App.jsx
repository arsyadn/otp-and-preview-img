import "./App.css";
import { Route, Routes } from "react-router-dom";
import OtpCode from "./components/OtpCode";
import Upload from "./components/Upload";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OtpCode />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  );
}

export default App;

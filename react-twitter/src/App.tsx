import { Route, Routes } from "react-router-dom";
import BerandaPage from "./pages/berandaPage";
import HomePage from "./pages/homePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beranda" element={<BerandaPage />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import BerandaPage from "./pages/berandaPage";
import HomePage from "./pages/homePage";
import { AfterLogin, RequireLogin } from "./components/blocker";

function App() {
  return (
    <Routes>
      <Route element={<AfterLogin />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<RequireLogin />}>
        <Route path="/beranda" element={<BerandaPage />} />
      </Route>
    </Routes>
  );
}

export default App;

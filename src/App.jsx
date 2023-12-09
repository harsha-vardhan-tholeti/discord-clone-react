import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/cover-page.component.jsx";
import LoginPage from "./pages/login-page.component.jsx";
import RegisterPage from "./pages/register-page.component.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CoverPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;

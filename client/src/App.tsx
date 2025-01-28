import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Toolbar from "./components/Toolbar";
import Home from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import ProjectsPage from "./pages/Projects";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import About from "./pages/About";
import Test from "./pages/Test";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Toolbar />
        <div className="mx-auto mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/projects"
              element={
                <ProtectedRoute>
                  <ProjectsPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;

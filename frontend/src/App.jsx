import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AIButton from "./AI/components/AIButton";
import ProjectsPage from "./pages/ProjectsPage";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import CustomCursor from "./components/CustomCursor"; // ← ADD

function App() {
  return (
    <div>
      <CustomCursor /> 
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        transition={Bounce}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <AIButton />
    </div>
  );
}

export default App;
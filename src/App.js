import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskApp from "./pages/TaskApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TaskApp" element={<TaskApp />} />
      </Routes>
    </BrowserRouter>
  );
}
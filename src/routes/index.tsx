import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MealDetail from "../pages/MealDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

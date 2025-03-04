import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MealDetail from '../pages/MealDetail';
import AddMealForm from '../pages/AddMealForm';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetail />} />
        <Route path="/add-meal" element={<AddMealForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

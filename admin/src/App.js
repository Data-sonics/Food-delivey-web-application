import useCurrentUser from "./hooks";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterScreen from "views/admin/register";
import { OrdersScreen } from "./screens/OrdersScreen";
import SignInScreen from "views/admin/signin";
import AddEdit from "views/admin/marketplace/pages/AddEdit";

import AdminLayout from "layouts/admin";
import Home from "views/admin/marketplace/pages/Home";
import View from "views/admin/marketplace/pages/View";
import FoodAddEdit from "views/admin/tables/FoodAddEdit";
import Foods from "views/admin/tables/Foods";
import FoodView from "views/admin/tables/FoodView";

function App() {
  const { currentUser } = useCurrentUser();
  console.log("currentUser:", currentUser);

  return (
    <Routes>
      <Route path="admin/*" element={<AdminLayout />}>
        <Route path="restaurants/addedit" element={<AddEdit />} />
        <Route path="restaurants/home" element={<Home />} />
        <Route path="restaurants/update/:id" element={<AddEdit />} />
        <Route path="restaurants/view/:id" element={<View />} />
        <Route path="foods-management/addedit" element={<FoodAddEdit />} />
        <Route path="foods-management/update/:id" element={<FoodAddEdit />} />
        <Route path="foods-management/home" element={<Foods />} />
        <Route path="foods-management/FoodView/:id" element={<FoodView />} />
      </Route>
      <Route path="signIn/*" element={<SignInScreen />} />
      <Route path="register/*" element={<RegisterScreen />} />
      <Route path="/orders" element={<OrdersScreen />} />

      <Route path="/" element={<Navigate to="/admin/" replace />} />
    </Routes>
  );
}

export default App;

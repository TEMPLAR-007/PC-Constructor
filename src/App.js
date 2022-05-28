import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import PartPurchase from "./Components/PartPurchase";
import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import Review from "./Pages/Dashboard/Review";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder";
import Products from "./Pages/Products";
import Footer from "./Components/Footer";
import Blogs from "./Pages/Blogs";
import NotFound from "./Pages/NotFound";
import MyPortfolio from "./Pages/MyPortfolio";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part/:partId" element={
          <RequireAuth>
            <PartPurchase></PartPurchase>
          </RequireAuth>}>
        </Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="manageAllOrder" element={<ManageAllOrder></ManageAllOrder>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path="mangeProduct" element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myPortfolio" element={<MyPortfolio />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;

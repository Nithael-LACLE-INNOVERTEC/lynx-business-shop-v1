import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Login from "./components/account/Login";
import CustomerService from "./pages/CustomerService";

const Router = () => {
    return (
        <Routes>
            <Route path="/account/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/customerservice" element={<CustomerService />} />
            </Route>
        </Routes>
    );
};

export default Router;
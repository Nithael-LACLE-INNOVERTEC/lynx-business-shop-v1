import { useEffect, useState } from "react";
import Loader from "./common/Loader";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTitle from "./components/PageTitle";
import SignIn from "./pages/Authentication/SignIn";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import ECommerce from "./pages/Dashboard/ECommerce";
import SignUp from "./pages/Authentication/SignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import Customerservice from "./pages/customer/Customerservice";

const Router = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);


    return loading ? (
        <Loader />
    ) : (
        <Routes>
            <Route
                path="/auth/signin"
                element={
                    <>
                        <PageTitle title="Connxection | Bolangerie - Express" />
                        <SignIn />
                    </>
                }
            />
            <Route path="/" element={<DefaultLayout />}>
                <Route
                    index
                    element={
                        <>
                            <PageTitle title="System de Gestion | Bolangerie - Express" />
                            <Home />
                        </>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <>
                            <PageTitle title="Contact | Bolangerie - Express" />
                            <Contact />
                        </>
                    }
                />
                <Route
                    path="/customerservices"
                    element={
                        <>
                            <PageTitle title="Service-clients | Bolangerie - Express" />
                            <Customerservice />
                        </>
                    }
                />
                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/auth/dashboard"
                        element={
                            <>
                                <PageTitle title="eCommerce Dashboard | Bolangerie - Express" />
                                <ECommerce />
                            </>
                        }
                    />
                </Route>
                <Route
                    path="/auth/signin"
                    element={
                        <>
                            <PageTitle title="Signin | Bolangerie - Express" />
                            <SignIn />
                        </>
                    }
                />
                <Route
                    path="/auth/signup"
                    element={
                        <>
                            <PageTitle title="Signup | Bolangerie - Express" />
                            <SignUp />
                        </>
                    }
                />
            </Route>
        </Routes>
    );
};

export default Router;
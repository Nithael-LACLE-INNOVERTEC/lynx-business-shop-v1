import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import { useAuth } from './context/AuthContext';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // Verify if user is logged
  const firstPage = isLoggedIn ? <DefaultLayout /> : <SignIn />;
  console.log("User is connected: ", isLoggedIn);
  

  return loading ? (
    <Loader />
  ) : (
    <>
      {/* Routen ohne Layout */}
      <Routes>
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

        {/* Routen mit DefaultLayout */}
        <Route path="/" element={firstPage}>
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
            path="/auth/dashboard"
            element={
              <>
                <PageTitle title="eCommerce Dashboard | Bolangerie - Express" />
                <ECommerce />
              </>
            }
          />
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
    </>
  );
}

export default App;

import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home/";
import Profile from "./pages/Profile";
import Room from "./pages/Room";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/Layout/Notfound";
import Layout from "./components/Layout/Layout";

function App() {

  return (
    <UserAuthContextProvider>

        <Routes>

          <Route path="/" element={<Layout />}>

              <Route index element={<Home />} />
            
              { /* Protected routes */ }
              <Route element={<ProtectedRoute />}>

                <Route path="rooms" element={<Rooms />} />
                <Route path="rooms/:roomID" element={<Room />} />

                <Route path="profiles" element={<Profiles />} />
                <Route path="profiles/:profileID" element={<Profile />} />

                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />

              </Route>

              <Route path='*' element={
                  <Container maxW="container.xl" my="auto">
                    <NotFound />
                  </Container>
              } />

          </Route>

        </Routes>

    </UserAuthContextProvider>
  );
}

export default App;

import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Rooms from "./pages/Rooms";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home/";
import Profile from "./pages/Profile";
import Room from "./pages/Room";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import UserProfile from "./pages/UserProfile"
import Inbox from "./pages/Inbox";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/Layout/Notfound";
import Layout from "./components/Layout/Layout";
import ProfileLayout from "./components/Layout/ProfileLayout";
import { UserAuthContextProvider } from "./context/UserAuthContext";

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

                <Route element={<ProfileLayout/>}>
                  <Route path="me" element={<UserProfile/>} />
                  <Route path="inbox" element={<Inbox/>} />
                  <Route path="settings" element={<Settings/>} />
                </Route>

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
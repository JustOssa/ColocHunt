import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Rooms from "./pages/Rooms";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home/";
import ListRoom from './pages/ListRoom';
import FindRoom from './pages/FindRoom';
import Profile from "./pages/Profile";
import Room from "./pages/Room";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <UserAuthContextProvider>

      <Flex minHeight="100vh" direction="column" pb="136px">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="rooms" element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
          <Route path="rooms/create" element={<ProtectedRoute><ListRoom /></ProtectedRoute>} />
          <Route path="rooms/:roomID" element={<ProtectedRoute><Room /></ProtectedRoute>} />

          <Route path="profiles" element={<ProtectedRoute><Profiles /></ProtectedRoute>} />
          <Route path="profiles/create" element={<ProtectedRoute><FindRoom /></ProtectedRoute>} />
          <Route path="profiles/:profileID" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

          <Route path="signup" element={
            <ProtectedRoute>
              <Signup />
            </ProtectedRoute>
          } />
          <Route path="signin" element={
            <ProtectedRoute>
              <Signin />
            </ProtectedRoute>
          } />

          <Route path='*' element={<Home />} />



        </Routes>
        <Footer/>
      </Flex>

    </UserAuthContextProvider>
  );
}

export default App;

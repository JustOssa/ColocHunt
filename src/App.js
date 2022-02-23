import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Rooms from "./pages/Rooms";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home";
import ListRoom from './pages/ListRoom';
import FindRoom from './pages/FindRoom';
import Profile from "./pages/Profile";
import Room from "./pages/Room";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";


function App() {

  return (
    <Flex minHeight="100vh" direction="column">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/create" element={<ListRoom />} />
        <Route path="rooms/:roomID" element={<Room />} />

        <Route path="profiles" element={<Profiles />} />
        <Route path="profiles/create" element={<FindRoom />} />
        <Route path="profiles/:profileID" element={<Profile />} />

        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />

      </Routes>
      <Footer/>
    </Flex>
  );
}

export default App;

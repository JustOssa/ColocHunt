import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ( ) => {

    return (
        <Flex minHeight="100vh" direction="column" pt={16} pb="136px">
            <Navbar/>
                <Outlet />
            <Footer/>
        </Flex>
    );
}

export default Layout;
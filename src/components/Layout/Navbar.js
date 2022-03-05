import { FaSun, FaMoon, FaUser, FaUserCircle } from 'react-icons/fa';

import {
    Box,
    Button,
    Container,
    IconButton,
    useColorMode,
    useColorModeValue,
    chakra,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    MenuDivider,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { MdEmail, MdLogout } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import MobileLinks from './MobileLinks';
import { useUserAuth } from '../../context/UserAuthContext';



const Navbar = () => {

    const { toggleColorMode } = useColorMode();
    const themeIcon = useColorModeValue(<FaMoon />, <FaSun />);
    const logoColor = useColorModeValue("brand.600", "brand.400");

    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/signin");
      } catch{
        console.log("Error.");
      }
    };

    return (
        <Box position="fixed" w="100%" zIndex={100} bgColor={useColorModeValue("white", "gray.800")}>
            <Container
                maxW="container.xl"
                py={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Flex spacing={0}>
                    <MobileLinks/>                    
                    <Button variant="ghost" fontSize="xl" as={Link} to="/">
                        Coloc&nbsp;
                        <chakra.span color={logoColor}>V1</chakra.span>
                    </Button>
                </Flex>
                <Box>
                    { user &&
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                variant="ghost"
                                aria-label="Profile"
                                icon={<FaUser />}
                            />
                            <MenuList minW="full">
                                <MenuItem icon={<FaUserCircle size={16} />}>My Account</MenuItem>
                                <MenuItem icon={<MdEmail size={16} />}>Inbox </MenuItem>
                                <MenuItem icon={<IoMdSettings size={16} />}>Settings </MenuItem>
                                <MenuDivider />
                                <MenuItem icon={<MdLogout size={16} />} onClick={handleLogout} >Sign out </MenuItem>
                            </MenuList>
                        </Menu>
                    }
                    <IconButton
                        ml={1}
                        onClick={toggleColorMode}
                        variant="ghost"
                        aria-label="Switch theme"
                        icon={themeIcon}
                    />
                </Box>
            </Container>
        </Box>
    );
}

export default Navbar;
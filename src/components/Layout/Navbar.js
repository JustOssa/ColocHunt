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
    HStack,
} from '@chakra-ui/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdEmail, MdLogout } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import MobileLinks from './MobileLinks';
import { useUserAuth } from '../../context/UserAuthContext';

import { BsPeopleFill } from 'react-icons/bs';
import { MdApartment, MdHelpCenter } from 'react-icons/md';


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

    const NavButton = ({children, ...rest}) => {
        return (  
            <Button
                w="full"
                variant="ghost"
                color={useColorModeValue("gray.500", "gray.400")}
                _activeLink={{
                    //bg: useColorModeValue("brand.500", "brand.200"),
                    //color: useColorModeValue("white", "gray.800")
                    color: useColorModeValue("gray.800", "white")
                }}
                as={NavLink}
                {...rest}
            >
                {children}
            </Button>
        );
    }

    return (
        <Box position="fixed" top={0} w="100%" zIndex={100} bg={useColorModeValue('gray.50', 'gray.900')}>
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
                        Coloc
                        <chakra.span color={logoColor}>Hunt</chakra.span>
                    </Button>
                    <HStack ml={2} display={{ base: "none", md: "flex" }}>
                        <NavButton to="/profiles" leftIcon={<BsPeopleFill />}>Profiles</NavButton>
                        <NavButton to="/rooms" leftIcon={<MdApartment />}>Rooms</NavButton>
                        <NavButton to="/help" leftIcon={<MdHelpCenter />}>Help</NavButton>
                    </HStack>
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
                                <MenuItem as={Link} to="/me" icon={<FaUserCircle size={16} />}>My Account</MenuItem>
                                <MenuItem as={Link} to="/inbox" icon={<MdEmail size={16} />}>Inbox </MenuItem>
                                <MenuItem as={Link} to="/settings" icon={<IoMdSettings size={16} />}>Settings </MenuItem>
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
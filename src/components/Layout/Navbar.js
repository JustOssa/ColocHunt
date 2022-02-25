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
    VStack,
    CloseButton,
    useDisclosure,
    HStack,
    useOutsideClick
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';
import { MdApartment, MdEmail, MdHelpCenter } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';
import { useRef } from 'react';
import { BsPeopleFill } from 'react-icons/bs';



const Navbar = () => {

    const { toggleColorMode } = useColorMode();
    const themeIcon = useColorModeValue(<FaMoon />, <FaSun />);
    const logoColor = useColorModeValue("brand.600", "brand.400");

    const mobileNav = useDisclosure();

    // Close mobile nav on outside click
    const ref = useRef()
    useOutsideClick({
        ref: ref,
        handler: mobileNav.onClose,
      })

    return (
        <Box position="fixed" w="100%" zIndex={100} bgColor={useColorModeValue("white", "gray.800")}>
            <Container
                maxW="container.xl"
                py={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                >
                <HStack spacing={0}>
                    <IconButton
                        display={ mobileNav.isOpen ? "none" : { base: "flex", md: "none" }}
                        aria-label="Open menu"
                        fontSize="20px"
                        variant="ghost"
                        icon={<AiOutlineMenu />}
                        onClick={mobileNav.onOpen}
                    />
                    <VStack
                        ref={ref}
                        zIndex={101}
                        pos="absolute" top={0} left={0} right={0}
                        display={ mobileNav.isOpen ? "flex" : "none"}
                        flexDirection="column"
                        p={2} m={2} spacing={3}
                        bg={useColorModeValue("white", "gray.800")}
                        rounded="sm"
                        shadow="sm"
                    >
                        <CloseButton
                            aria-label="Close menu"
                            justifySelf="self-start"
                            onClick={mobileNav.onClose}
                        />
                        <Button
                            w="full"
                            variant="solid"
                            colorScheme="brand"
                            leftIcon={<BsPeopleFill />}
                            as={NavLink} to="/profiles"
                            onClick={mobileNav.onClose}
                        >
                            Profiles
                        </Button>
                        <Button
                            w="full"
                            variant="ghost"
                            leftIcon={<MdApartment />}
                            as={NavLink} to="/rooms"
                            onClick={mobileNav.onClose}
                        >
                            Rooms
                        </Button>
                        <Button
                            w="full"
                            variant="ghost"
                            leftIcon={<MdHelpCenter />}
                            as={NavLink} to="/help"
                            onClick={mobileNav.onClose}
                        >
                            Help
                        </Button>
                    </VStack>
                    
                    <Button variant="ghost" fontSize="xl" as={Link} to="/">
                        Coloc&nbsp;
                        <chakra.span color={logoColor}>V1</chakra.span>
                    </Button>
                
                </HStack>
                <Box>
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
                        </MenuList>
                    </Menu>
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
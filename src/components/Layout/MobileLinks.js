import {
    Button,
    IconButton,
    useColorModeValue,
    VStack,
    CloseButton,
    useDisclosure,
    useOutsideClick,
    Box
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { MdApartment, MdHelpCenter } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { useRef } from 'react';


const MobileLinks = () => {

    const mobileNav = useDisclosure();

    // Close mobile nav on outside click
    const ref = useRef()
    useOutsideClick({
        ref: ref,
        handler: mobileNav.onClose,
      })

    const NavButton = ({children, ...rest}) => {
        return (  
            <Button
                w="full"
                variant="ghost"
                _activeLink={{
                    bg: useColorModeValue("brand.500", "brand.200"),
                    color: useColorModeValue("white", "gray.800")
                }}
                as={NavLink}
                onClick={mobileNav.onClose}
                {...rest}
            >
                {children}
            </Button>
        );
    }

    return (
        <Box display={{ base: "flex", md: "none" }}>
            <IconButton
                display={ mobileNav.isOpen ? "none" : "flex"}
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
                p={2} m={2} mt={12} spacing={3}
                bg={useColorModeValue("white", "gray.800")}
                rounded="sm"
                shadow="sm"
            >
                <CloseButton
                    aria-label="Close menu"
                    justifySelf="self-start"
                    onClick={mobileNav.onClose}
                />
                <NavButton to="/profiles" leftIcon={<BsPeopleFill />}>Profiles</NavButton>
                <NavButton to="/rooms" leftIcon={<MdApartment />}>Rooms</NavButton>
                <NavButton to="/help" leftIcon={<MdHelpCenter />}>Help</NavButton>
            </VStack>   
        </Box>
    );
}

export default MobileLinks;
import { FaSun, FaMoon, FaUser } from 'react-icons/fa';

import {
    Box,
    Button,
    Container,
    IconButton,
    useColorMode,
    useColorModeValue
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const { toggleColorMode } = useColorMode();
    const themeIcon = useColorModeValue(<FaMoon />, <FaSun />);

    return (
        <Box position="fixed" w="100%" zIndex={1000}>
            <Container
                maxW="container.xl"
                py={3}
                display="flex"
                justifyContent="space-between"
                alignItems="center">
                <Button variant="ghost" fontSize="xl" as={Link} to="/">
                    Coloc V1
                </Button>
                <Box>
                    <IconButton variant="ghost" aria-label="Profile" icon={<FaUser />} as={Link} to="/signin"/>
                    <IconButton ml={1} onClick={toggleColorMode} variant="ghost" aria-label="Switch theme" icon={themeIcon}/>
                </Box>
            </Container>
        </Box>
    );
}

export default Navbar;
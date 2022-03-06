import {
    Box,
    Heading,
    Text,
    chakra,
    useColorModeValue
} from '@chakra-ui/react';


const Header = () => {
    const logoColor = useColorModeValue("brand.600", "brand.400");
    return (
        <Box textAlign="center">
            <Heading as="h1" size="3xl">Coloc <chakra.span color={logoColor}>V1</chakra.span></Heading>
            <Text fontSize="lg" fontWeight="semibold" mt={2}>
                Find well-matched roommates for free
            </Text>
        </Box>
    );
}

export default Header;
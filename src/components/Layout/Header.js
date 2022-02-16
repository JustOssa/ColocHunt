import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';


const Header = () => {

    return (
        <Box textAlign="center">
            <Heading as="h1" size="3xl">Coloc V1</Heading>
            <Text fontSize="lg" fontWeight="semibold" mt={2}>
                Find well-matched roommates for free
            </Text>
        </Box>
    );
}

export default Header;
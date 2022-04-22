import {
    Box,
    Spinner,
    useColorModeValue
} from '@chakra-ui/react';

const Loader = ( {size, ...props}) => {
    return (
        <Box textAlign="center" m="auto" {...props}>
            <Spinner
                thickness='3px'
                speed='0.65s'
                emptyColor='gray.200'
                color={useColorModeValue("brand.600", "brand.400")}
                size={size}
            />
        </Box>
    );
}

export default Loader;
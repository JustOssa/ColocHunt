import {
    Box,
    Heading,
    Text,
    chakra,
    useColorModeValue,
    Button
} from '@chakra-ui/react';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NotFound = ( {title, subtitle, ...props}) => {
    const logoColor = useColorModeValue("brand.600", "brand.400");
    return (
        <Box textAlign="center" {...props}>
            <Heading as="h1" size="xl">
                {title || <span><chakra.span color={logoColor}>404</chakra.span> | Page Not Found</span>}
            </Heading>
            <Text fontSize="xl" mt={4}>
                {subtitle || "You just hit a page that doesn't exist... Oups.😢"}
            </Text>
            <Button as={Link} to="/" leftIcon={<FaHome/>} mt={4}>
                Return Home
            </Button>
        </Box>
    );
}

export default NotFound;
import {
    Container,
    Text,
    Link
} from '@chakra-ui/react';



const Footer = () => {

    return (
        <Container as="footer" maxW="xl" textAlign="center" py={10}>
            <Text>
                Made with ❤️ by{' '}
                <Link href="https://github.com/JustOssa" isExternal>
                    JustOssa
                </Link>
            </Text>
        </Container>
    );
}

export default Footer;
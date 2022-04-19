import { Container, Text, Link, Icon, VStack, HStack } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {

    return (
        <Container as="footer" maxW="xl" py={10} pos="absolute" bottom={0} left={0} right={0}>
            <VStack>
                <Text>
                    Made with ❤️ by{' '}
                    <Link href="https://github.com/JustOssa" isExternal>
                        JustOssa
                    </Link>
                </Text>

                <HStack spacing={4}>
                    <Link
                        isExternal
                        rel="noreferrer"
                        href={process.env.REACT_APP_githubUrl}
                        aria-label="Github Repo"
                    >
                    <Icon as={FaGithub} boxSize={4} />
                    </Link>
                    <Link
                        isExternal
                        rel="noreferrer"
                        href={process.env.REACT_APP_twitterUrl}
                        aria-label="Twitter Profile"
                    >
                    <Icon as={FaTwitter} boxSize={4} />
                    </Link>
                    <Link
                        isExternal
                        rel="noreferrer"
                        href={process.env.REACT_APP_linkedinUrl}
                        aria-label="Linkedin Profile"
                    >
                    <Icon as={FaLinkedin} boxSize={4} />
                    </Link>
                    <Link
                        isExternal
                        rel="noreferrer"
                        href={`mailto:${process.env.REACT_APP_emailAddress}`}
                        aria-label="Email Address"
                    >
                    <Icon as={FaEnvelope} boxSize={4} />
                    </Link>
                </HStack>
            </VStack>
        </Container>
    );
}

export default Footer;
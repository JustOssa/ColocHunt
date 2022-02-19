import { Container, Text, Link, Icon, VStack, HStack } from '@chakra-ui/react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {

    return (
        <Container as="footer" maxW="xl" py={10}>
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
                        href={process.env.githubUrl}
                        aria-label="Github Repo"
                    >
                    <Icon as={FaGithub} boxSize={4} />
                    </Link>
                    <Link
                        isExternal
                        rel="noreferrer"
                        href={process.env.twitterUrl}
                        aria-label="Twitter Profile"
                    >
                    <Icon as={FaTwitter} boxSize={4} />
                    </Link>
                    <Link
                        isExternal
                        rel="noreferrer"
                        href={process.env.linkedinUrl}
                        aria-label="Linkedin Profile"
                    >
                    <Icon as={FaLinkedin} boxSize={4} />
                    </Link>
                    <Link
                        isExternal
                        rel="noreferrer"
                        href={`mailto:${process.env.emailAddress}`}
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
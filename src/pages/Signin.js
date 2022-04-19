import {
    Button,
    Container,
    chakra,
    Box,
    GridItem,
    useColorModeValue,
    Center,
    Flex,
    SimpleGrid,
    VisuallyHidden,
    Input,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";

import { GrGoogle } from 'react-icons/gr';
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import AuthExceptionHandler from "../utils/AuthExceptionHandler";

const Signin = () => {

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn, googleSignIn } = useUserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(loginEmail, loginPassword);
      navigate(from, { replace: true });
    } catch (err) {
      setError(AuthExceptionHandler.handleLoginException(err));
    }
  };

  const handleGoogleSignIn = async (e) => {
    setError("");
    try {
      await googleSignIn();
      navigate(from, { replace: true });
    } catch (err) {
      setError(AuthExceptionHandler.handleLoginException(err));
    }
  };

  return (
      <Container maxW="container.xl" mt="24" 
        display= "flex" minH="calc(100vh - var(--chakra-space-24) - 136px)">
        
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 11 }}
          gap={{ base: 0, lg: 24 }}
          w="full"
        >
          <GridItem
            colSpan={{ base: "auto", lg: 7 }}
            textAlign={{ base: "center", lg: "left" }}
            px={6}
          >
            <chakra.h1
              mb={4}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="bold"
              lineHeight={{ base: "shorter", md: "none" }}
              color={useColorModeValue("gray.900","gray.200")}
              letterSpacing={{ base: "normal", md: "tight" }}
            >
              Welcome back!
            </chakra.h1>
            <chakra.p
              mb={{ base: 10, md: 4 }}
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.500"
            >
              Sign in to list, search & communicate with other members
              without having to share your personal details.
            </chakra.p>

          </GridItem>

          <GridItem colSpan={{ base: "auto", lg: 4 }}>
            <Box as="form" mb={6} rounded="lg" shadow="xl" onSubmit={handleLogin}>
              <Center color="gray.600">
                <p>Start talking now</p>
              </Center>
              <SimpleGrid
                columns={1} px={6} py={4} spacing={4} borderBottom="solid 1px"
                borderColor={useColorModeValue("gray.200","gray.700")}
              >
                {!error && from !== "/" &&
                  <Alert status='info'>
                    <AlertIcon />
                    Login to continue
                  </Alert>
                }
                {error && 
                  <Alert status='error'>
                    <AlertIcon />
                    {error}
                  </Alert>
                }
                <Flex>
                  <VisuallyHidden>Email Address</VisuallyHidden>
                  <Input mt={0} required
                    placeholder="Email Address"
                    type="email"
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                </Flex>
                <Flex>
                  <VisuallyHidden>Password</VisuallyHidden>
                  <Input mt={0} required
                    placeholder="Password"
                    type="password"
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}/>
                </Flex>
                <Button colorScheme="brand" py={2} type="submit">
                  Sign in
                </Button>
                <Flex justify="end">
                    <chakra.a as={RouterLink} to="#" fontSize="xs" textAlign="center" color="gray.600">
                      Forgot password ?
                    </chakra.a>
                </Flex>
              </SimpleGrid>
              <Box px={6} py={4}>
                <Button py={2} w="full" colorScheme="red" leftIcon={<GrGoogle/>} onClick={handleGoogleSignIn}>
                  Continue with Google
                </Button>
              </Box>
            </Box>
            <chakra.p fontSize="xs" textAlign="center" color="gray.600">
              You don't have an account?{" "}
              <chakra.a as={RouterLink} to="/signup" color="brand.500" >
                Sign up
              </chakra.a>
            </chakra.p>
          </GridItem>
          
        </SimpleGrid>
        
      </Container>
  );
}

export default Signin;
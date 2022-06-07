import {
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import {
    Button,
    Container,
    chakra,
    GridItem,
    useColorModeValue,
    Flex,
    SimpleGrid,
    Input,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";

import { FcGoogle } from 'react-icons/fc';
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import AuthExceptionHandler from "../utils/AuthExceptionHandler";

const Signin = () => {

  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

  const { logIn, googleSignIn } = useUserAuth();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError("");
    try {
      await logIn(loginEmail, loginPassword);
      navigate(from, { replace: true });
    } catch (err) {
      setError(AuthExceptionHandler.handleLoginException(err));
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (e) => {
    setLoading(true);
    setError("");
    try {
      await googleSignIn();
      navigate(from, { replace: true });
    } catch (err) {
      setError(AuthExceptionHandler.handleLoginException(err));
      setLoading(false);
    }
  };

  return (
      <Container maxW="container.xl" flex="auto" display= "flex">
        
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 11 }}
          gap={{ base: 0, lg: 24 }}
          w="full" alignContent="center"
        >
          <GridItem
            colSpan={{ base: "auto", lg: 7 }}
            textAlign={{ base: "center", lg: "left" }}
            px={6}
            /*display={{base:"none", md:"block"}}*/
          >
            <Stack maxW={{ base: "md", lg: "full" }} m={"auto"} mt={6}>
              <chakra.h1
                mb={4}
                fontSize={{ base: "3xl", lg: "4xl" }}
                fontWeight="bold"
                lineHeight={{ base: "shorter", lg: "none" }}
                color={useColorModeValue("gray.900","gray.200")}
                letterSpacing={{ base: "normal", lg: "tight" }}
              >
                Welcome back!
              </chakra.h1>
              <chakra.p
                mb={{ md: 4 }}
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.500"
              >
                Sign in to list, search & communicate with other members
                without having to share your personal details.
              </chakra.p>
            </Stack>
          </GridItem>

          <GridItem colSpan={{ base: "auto", lg: 4 }}>
            <Flex as="form" p={8} flex={1} align={"center"} justify={"center"} onSubmit={handleLogin}>
              <Stack spacing={4} w={"full"} maxW={"md"}>
                <Heading fontSize={"2xl"} display={{base:"none", lg:"block"}}>Sign in to your account</Heading>
                {
                  !error && from !== "/" &&
                  <Alert status='info'>
                    <AlertIcon />
                    Login to continue
                  </Alert>
                }
                {
                  error && 
                  <Alert status='error'>
                    <AlertIcon />
                    {error}
                  </Alert>
                }
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" required 
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                      }}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" required 
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </FormControl>
                <Stack spacing={6}>
                  <Stack
                    direction="row"
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link as={RouterLink} to="#" color={"blue.500"}>Forgot password?</Link>
                  </Stack>
                  <Button colorScheme={"blue"} variant={"solid"} type="submit" isLoading={loading}>
                    Sign in
                  </Button>
                  <Button w="full" variant={"outline"} leftIcon={<FcGoogle />} onClick={handleGoogleSignIn}>
                    Continue with Google
                  </Button>
                  <Text fontSize="xs" textAlign="center" color="gray.600">
                    You don't have an account?{" "}
                    <Link as={RouterLink} to="/signup" color="brand.500">
                      Sign up
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Flex>            
          </GridItem>
          
        </SimpleGrid>
        
      </Container>
  );
}

export default Signin;
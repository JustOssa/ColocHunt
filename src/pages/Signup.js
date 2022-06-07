import {
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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import AuthExceptionHandler from "../utils/AuthExceptionHandler";

const Signup = () => {

  const [loading, setLoading] = useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  
  const { signUp, googleSignIn } = useUserAuth();
  let navigate = useNavigate();

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError("");
    try {
      await signUp(registerEmail, registerPassword);
      navigate("/");
    } catch (err) {
      setError(AuthExceptionHandler.handleRegisterException(err));
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (e) => {
    setLoading(true);
    setError("");
    try {
      await googleSignIn();
      navigate("/");
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
          >
            <Stack maxW={{ base: "md", lg: "full" }} m={"auto"}>
              <chakra.h1
                mb={4}
                fontSize={{ base: "3xl", lg: "4xl" }}
                fontWeight="bold"
                lineHeight={{ base: "shorter", lg: "none" }}
                color={useColorModeValue("gray.900","gray.200")}
                letterSpacing={{ base: "normal", lg: "tight" }}
              >
                Ready to find your roommate?
              </chakra.h1>
              <chakra.p
                mb={{ md: 4 }}
                fontSize={{ base: "lg", md: "xl" }}
                color="gray.500"
              >
                Create your free account today and get your listing 
                live right away.
              </chakra.p>
            </Stack>
          </GridItem>

          <GridItem colSpan={{ base: "auto", md: 4 }}>
              <Flex as="form" p={8} flex={1} align={"center"} justify={"center"} onSubmit={handleRegister}>
                <Stack spacing={4} w={"full"} maxW={"md"}>
                  <Heading fontSize={"2xl"} display={{base:"none", lg:"block"}}>Create a new account</Heading>
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
                        setRegisterEmail(event.target.value);
                        }}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" required 
                      onChange={(event) => {
                        setRegisterPassword(event.target.value);
                      }}
                    />
                  </FormControl>
                  <Stack spacing={6}>
                    <Button colorScheme={"blue"} variant={"solid"} type="submit" isLoading={loading}>
                      Sign up for free
                    </Button>
                    <Button w="full" variant={"outline"} leftIcon={<FcGoogle />} onClick={handleGoogleSignIn}>
                      Continue with Google
                    </Button>
                    <Text fontSize="xs" textAlign="center" color="gray.600">
                      By signing up you agree to our{" "}
                      <Link as={RouterLink} to="#" color="brand.500">
                        Terms of Service
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

export default Signup;
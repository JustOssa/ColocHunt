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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import AuthExceptionHandler from "../utils/AuthExceptionHandler";

const Signup = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(registerEmail, registerPassword);
      navigate("/page");
    } catch (err) {
      setError(AuthExceptionHandler.handleRegisterException(err));
    }
  };

  return (
      <Container maxW="container.xl" mt={8}
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
              Ready to find your roommate?
            </chakra.h1>
            <chakra.p
              mb={{ base: 10, md: 4 }}
              fontSize={{ base: "lg", md: "xl" }}
              color="gray.500"
            >
              Create your free account today and get your listing 
              live right away.
            </chakra.p>
          </GridItem>

          <GridItem colSpan={{ base: "auto", md: 4 }}>
            <Box as="form" mb={6} rounded="lg" shadow="xl" onSubmit={handleRegister}>
              <Center color="gray.600">
                <p>Start talking now</p>
              </Center>
              <SimpleGrid
                columns={1} px={6} py={4} spacing={4} borderBottom="solid 1px"
                borderColor={useColorModeValue("gray.200","gray.700")}
              >
                {error && 
                  <Alert status='error'>
                    <AlertIcon />
                    {error}
                  </Alert>
                }
                <Flex>
                  <VisuallyHidden>First Name</VisuallyHidden>
                  <Input mt={0} type="text" placeholder="First Name" required />
                </Flex>
                <Flex>
                  <VisuallyHidden>Email Address</VisuallyHidden>
                  <Input mt={0} required
                    placeholder="Email Address"
                    type="email"
                    onChange={(event) => {
                      setRegisterEmail(event.target.value);
                    }}/>
                </Flex>
                <Flex>
                  <VisuallyHidden>Password</VisuallyHidden>
                  <Input mt={0} required
                    placeholder="Password"
                    type="password"
                    onChange={(event) => {
                      setRegisterPassword(event.target.value);
                    }}/>
                </Flex>
                <Button colorScheme="brand" py={2} type="submit">
                  Sign up for free
                </Button>
              </SimpleGrid>
              <Box px={6} py={4}>
                <Button py={2} w="full" colorScheme="red" leftIcon={<GrGoogle/>} >
                  Continue with Google
                </Button>
              </Box>
            </Box>
            <chakra.p fontSize="xs" textAlign="center" color="gray.600">
              By signing up you agree to our{" "}
              <chakra.a as={RouterLink} to="/signup" color="brand.500" >
                Terms of Service
              </chakra.a>
            </chakra.p>
          </GridItem>
        </SimpleGrid>

      </Container>
  );
}

export default Signup;
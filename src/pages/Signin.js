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
} from "@chakra-ui/react";

import { GrGoogle } from 'react-icons/gr';
import { Link as RouterLink } from "react-router-dom";

const Signin = () => {

  return (
      <Container maxW="container.xl" mt="24">
        
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 11 }}
          gap={{ base: 0, lg: 24 }}
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
            <Box as="form" mb={6} rounded="lg" shadow="xl">
              <Center color="gray.600">
                <p>Start talking now</p>
              </Center>
              <SimpleGrid
                columns={1} px={6} py={4} spacing={4} borderBottom="solid 1px"
                borderColor={useColorModeValue("gray.200","gray.700")}
              >
                <Flex>
                  <VisuallyHidden>Email Address</VisuallyHidden>
                  <Input mt={0} type="email" placeholder="Email Address" required />
                </Flex>
                <Flex>
                  <VisuallyHidden>Password</VisuallyHidden>
                  <Input mt={0} type="password" placeholder="Password" required />
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
                <Button py={2} w="full" colorScheme="red" leftIcon={<GrGoogle/>}>
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
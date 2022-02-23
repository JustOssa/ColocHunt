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

const Signup = () => {

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
            <Box as="form" mb={6} rounded="lg" shadow="xl">
              <Center color="gray.600">
                <p>Start talking now</p>
              </Center>
              <SimpleGrid
                columns={1} px={6} py={4} spacing={4} borderBottom="solid 1px"
                borderColor={useColorModeValue("gray.200","gray.700")}
              >
                <Flex>
                  <VisuallyHidden>First Name</VisuallyHidden>
                  <Input mt={0} type="text" placeholder="First Name" required />
                </Flex>
                <Flex>
                  <VisuallyHidden>Email Address</VisuallyHidden>
                  <Input mt={0} type="email" placeholder="Email Address" required />
                </Flex>
                <Flex>
                  <VisuallyHidden>Password</VisuallyHidden>
                  <Input mt={0} type="password" placeholder="Password" required />
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
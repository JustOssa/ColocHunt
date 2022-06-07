import { chakra, Box, useColorModeValue, Image, Center, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Pic from '../../Assets/images/Friends-bro.svg'
import Features from "./components/Features";
import LastProfiles from "./components/LastProfiles";
import LastRooms from "./components/LastRooms";

import { useUserAuth } from "../../context/UserAuthContext";

const Home = () => {

  const { user } = useUserAuth();

  const StyledBtn = ({children, ...props}) => {
    return (  
      <Button
        {...props}
        w="full" height="auto"
        lineHeight="1.6" fontWeight="extrabold"
        fontSize={{ base: "md", md: "lg" }}
        px={{ base: 8, md: 10 }} py={{ base: 3, md: 4 }}
      >
        {children}
      </Button>
    );
  }

  return (

    <Box maxW="8xl" mx="auto" mb={10}>
      
      <Box pos="relative" overflow="hidden"
          minH={{base: "auto", xl: "calc(100vh - var(--chakra-space-16))"}}>

        <Box maxW="7xl" mx="auto"
            display={{base: "block", lg:"flex"}}
            height={{base: "auto", xl:"full"}}>
          <Box
            pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
            maxW={{ lg: "2xl" }}
            w={{ lg: "full" }}
            zIndex={1}
            border="solid 1px transparent"
          >

              <Box
                w="full"
                textAlign={{ sm: "center", lg: "left" }}
                mx="auto"
                maxW={{ base: "7xl" }}
                px={{ base: 4, sm: 6, lg: 8 }}
                mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
              >
                <chakra.h1
                  fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                  letterSpacing="tight"
                  lineHeight="short"
                  fontWeight="extrabold"
                >
                  <chakra.span display={{ base: "block", xl: "inline" }}>
                    Find well-matched roommates{" "}
                  </chakra.span>
                  <chakra.span display={{ base: "block", xl: "inline" }}
                    color={useColorModeValue("brand.600", "brand.400")}
                  >
                    for free
                  </chakra.span>
                </chakra.h1>
                <chakra.p
                  mt={{ base: 3, sm: 5 }}
                  fontSize={{ sm: "lg", md: "xl" }}
                  maxW="xl"
                  mx={{ sm: "auto", lg: 0 }}
                  color="gray.500"
                >
                    ColocHunt is a free service where you can search for
                    rooms and roommates. You can communicate with other users
                    directly without having to share your personal details.
                </chakra.p>

                <Center>
                  <Image display={{ lg: "none"}} src={Pic} alt='Friends' />
                </Center>

                { (user !== undefined) && 
                  <Box
                    mt={{ base: 5, sm: 8 }}
                    display={{ sm: "flex" }}
                    justifyContent={{ sm: "center", lg: "start" }}
                  >
                    <Box>
                      <StyledBtn
                        as={RouterLink} to={!user ? "signup" : "rooms"}
                        color="white"
                        bg="brand.600"
                        _hover={{ bg: "brand.700" }}
                        _active={{ bg: "brand.700" }}
                      >
                        { !user ? "Get started" : "Browse Rooms" }
                      </StyledBtn>
                    </Box>
                    <Box mt={[3, 0]} ml={[null, 3]}>
                      <StyledBtn
                        as={RouterLink} to={!user ? "signin" : "profiles"}
                        color="brand.700"
                        bg="brand.100"
                        _hover={{ bg: "brand.200" }}
                        _active={{ bg: "brand.200" }}
                      >
                        {!user ? "Sign in" : "View profiles"}
                      </StyledBtn>
                    </Box>

                  </Box>
                }
              </Box>

          </Box>
        </Box>

        <Box
          position={{ lg: "absolute" }}
          top={{ lg: 0 }}
          bottom={{ lg: 0 }}
          right={{ lg: 0 }}
          w={{ lg: "50%" }}
          border='solid 1px transparent'
          display={{base: "none", lg:"block"}}
        >
          <Image h="full" w="full" fit="cover" src={Pic} loading="lazy" />
        </Box>

      </Box>

      <Box mt={10} >
        <Features/>
      </Box>

      <Box mt={10}>
        <LastProfiles locked={!user && true}/>
      </Box>
      <Box mt={10}>
        <LastRooms locked={!user && true}/>
      </Box>

    </Box>
  );
}

export default Home;

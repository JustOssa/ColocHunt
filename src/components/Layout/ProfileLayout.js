import {
    Container,
    Grid,
    GridItem
 } from '@chakra-ui/react';
 import { Box, Button, Image, useColorModeValue, VStack } from '@chakra-ui/react';

import { Link, Outlet } from 'react-router-dom';

import { FaUserCircle } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';

import blank from "../../Assets/images/blank.png"

const Me = () => {

    const LeftCard = ({img}) => {
        return (
              <Box
                w="full" mx="auto"
                bg={useColorModeValue("white", "#1c232f")}
                shadow="lg" rounded="lg"
                roundedBottom={{ base: "unset", md: "lg" }}
                overflow="hidden"
              >
                <Image
                  w="full"
                  h={48}
                  fit="cover"
                  objectPosition="center"
                  src={img}
                  alt="avatar"
                />
        
                <Box display={{base:"none", md: "block"}} py={4} px={6}>
    
                    <VStack spacing={3}>
                        <Button as={Link} to="me" w="full" variant="solid" colorScheme="brand" leftIcon={<FaUserCircle />}>
                            Profile
                        </Button>
                        <Button as={Link} to="inbox" w="full" variant="ghost" leftIcon={<MdEmail />} >
                            Inbox
                        </Button>
                        <Button as={Link} to="settings" w="full" variant="ghost" leftIcon={<IoMdSettings />} >
                            Settings
                        </Button>
                    </VStack>
                </Box>
              </Box>
          );
    }

    return ( 
        <Container maxW="container.xl" mt={8} mb={10}>
            <Grid gap={{ base: 0, md: 4 }} mt={8} 
                templateColumns={{ base: "1fr", md: 'repeat(4, 1fr)' }}
                >
                <GridItem>
                    <LeftCard img={blank} />
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }}>
                    <Outlet/>
                </GridItem >
            </Grid>
        </Container>
     );
}
 
export default Me;
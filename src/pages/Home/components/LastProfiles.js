import { Box, Flex, chakra, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import ProfileCard from '../../../components/ProfileCard';
import { AiFillLock } from "react-icons/ai"
import { Link } from 'react-router-dom';

const LastProfiles = ( {locked} ) => {

    return (
        <> 
            <Box textAlign={{ sm: "center" }} px={{ base: 4, lg: 16, xl: 24 }} >
                <chakra.p
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    lineHeight="8" fontWeight="extrabold" letterSpacing="tight"
                >
                    Latest profiles
                </chakra.p>
                <chakra.p
                    mt={4} mx="auto" maxW="2xl" fontSize={{ sm: "lg", md: "xl" }}
                    color={useColorModeValue("gray.500", "gray.400")}
                >
                    Discover people looking for a place to rent.
                </chakra.p>
            </Box>

            <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 3, xl:4 }}
                spacing={5}
                px={{ base: 4, lg: 16, xl: 24 }} 
                py={10}
                position="relative"
            >
                
                { locked &&
                    <Flex
                        position="absolute"
                        top={0} left={0} right={0} bottom={0}
                        backdropFilter="blur(5px)"
                        zIndex={2}
                        fontSize={{ sm: "lg", md: "xl" }} fontWeight="extrabold"
                        justifyContent="center" alignItems="center" direction="column"
                        as={Link} to="signin"
                    >
                        <AiFillLock size={60}/>
                        Sign in to see profiles
                    </Flex>
                }

                {
                    [
                        ["Miftah ElKheir, Safi", "Patterson", "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"],
                        ["Hay Salam, Safi", "John", "https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"],
                        ["Jrifat, Safi", "Alex", "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"],
                        ["Hay Anas, Safi", "Jane", "https://images.unsplash.com/photo-1620553967565-8e5d2e952b3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"]
                    ]
                        .map((item) => (
                            <Box
                                key={item[0]}
                                _first={{ display: ['none', 'initial'] }}
                                _last={{ display: ['none', 'initial', null, 'none', 'initial', ] }} >
                                <ProfileCard
                                    profileID=""
                                    name={item[1]}
                                    gender="Female"
                                    image={item[2]}
                                    description="This is a profile template, to view actual profiles please sign in or create a free account."
                                    looking={item[0]}
                                    budget="200"
                                    studies="ENSA Safi"
                                />
                            </Box>
                        ))
                }

            </SimpleGrid>
        </>
     );
}
 
export default LastProfiles;
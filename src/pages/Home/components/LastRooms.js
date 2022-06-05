import { Box, chakra, Flex, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import Card from '../../../components/Card';
import { AiFillLock } from "react-icons/ai"
import { Link } from 'react-router-dom';

const LastRooms = ( {locked} ) => {
    return (
        <> 
            <Box textAlign={{ sm: "center" }} px={{ base: 4, lg: 16, xl: 24 }}>
                <chakra.p
                    fontSize={{ base: "3xl", sm: "4xl" }}
                    lineHeight="8" fontWeight="extrabold" letterSpacing="tight"
                >
                    Latest rooms
                </chakra.p>
                <chakra.p
                    mt={4} mx="auto" maxW="2xl" fontSize={{ sm: "lg", md: "xl" }}
                    color={useColorModeValue("gray.500", "gray.400")}
                >
                    Join people who already have a place.
                </chakra.p>
            </Box>

            <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 3, xl:4 }}
                px={{ base: 4, lg: 16, xl: 24 }}
                spacing={5}
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
                        Sign in to see rooms
                    </Flex>
                }

                {
                    [
                        ["Miftah ElKheir, Safi", "https://i.imgur.com/5BtLV52.jpeg"],
                        ["Hay Salam, Safi", "https://i.imgur.com/LuycVeB.jpeg"],
                        ["Jrifat, Safi", "https://i.imgur.com/9lXhrTh.jpeg"],
                        ["Hay Anas, Safi", "https://i.imgur.com/vHiYiXj.jpeg"]
                    ]
                        .map((item) => (
                            <Box
                                key={item[0]}
                                _first={{ display: ['none', 'initial'] }}
                                _last={{ display: ['none', 'initial', null, 'none', 'initial', ] }} >
                                <Card
                                    roomID=""
                                    title={item[0]}
                                    image={item[1]}
                                    rent="200"
                                    bedrooms="3"
                                    bathrooms="1"
                                    currentRoomates="2"
                                    totalRoomates="3"
                                />
                            </Box>
                        ))
                }

            </SimpleGrid>
        </>
     );
}
 
export default LastRooms;
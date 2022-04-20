import { Box, chakra, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import Card from '../../../components/Card';

const LastRooms = () => {
    return (
        <> 
            <Box textAlign={{ sm: "center" }} px={{ base: 4, lg: 16, xl: 24 }} >
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
                spacing={5}
                px={{ base: 4, lg: 16, xl: 24 }} 
                py={10}
                /*filter="blur(5px)"*/
            >
                <Card
                    key={1}
                    roomID={1}
                    title="Miftah ElKheir, Safi"
                    image={"https://i.imgur.com/5BtLV52.jpeg"}
                    rent="200"
                    bedrooms="3"
                    bathrooms="1"
                    currentRoomates="2"
                    totalRoomates="3"
                    />
                <Card
                    key={2}
                    roomID={2}
                    title="Hay Salam, Safi"
                    image={"https://i.imgur.com/LuycVeB.jpeg"}
                    rent="150"
                    bedrooms="3"
                    bathrooms="1"
                    currentRoomates="2"
                    totalRoomates="3"
                    />
                <Card
                    key={3}
                    roomID={3}
                    title="Jrifat, Safi"
                    image={"https://i.imgur.com/9lXhrTh.jpeg"}
                    rent="300"
                    bedrooms="3"
                    bathrooms="1"
                    currentRoomates="2"
                    totalRoomates="3"
                    />
                <Card
                    key={4}
                    roomID={4}
                    title="Hay Anas, Safi"
                    image={"https://i.imgur.com/vHiYiXj.jpeg"}
                    rent="230"
                    bedrooms="3"
                    bathrooms="1"
                    currentRoomates="2"
                    totalRoomates="3"
                    />

            </SimpleGrid>
        </>
     );
}
 
export default LastRooms;
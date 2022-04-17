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
                <Card key={1} title="Miftah ElKheir, Safi" post={"https://i.imgur.com/5BtLV52.jpeg"} />
                <Card key={2} title="Hay Salam, Safi" post={"https://i.imgur.com/LuycVeB.jpeg"} />
                <Card key={3} title="Jrifat, Safi" post={"https://i.imgur.com/9lXhrTh.jpeg"} />
                <Card key={4} title="Hay Anas, Safi" post={"https://i.imgur.com/vHiYiXj.jpeg"} />
            </SimpleGrid>
        </>
     );
}
 
export default LastRooms;
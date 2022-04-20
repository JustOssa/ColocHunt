import { Box, chakra, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import ProfileCard from '../../../components/ProfileCard';

const LastProfiles = () => {
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
                /*filter="blur(5px)"*/
            >
                <ProfileCard
                    key={1}
                    profileID={1}
                    name="Patterson"
                    gender="Female"
                    image={"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                    description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                    looking="Hay Salam"
                    budget="200"
                    studies="ENSA Safi"
                />
                <ProfileCard
                    key={2}
                    profileID={2}
                    name="John"
                    gender="Male"
                    image={"https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                    description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                    looking="Miftah ElKheir"
                    budget="150"
                    studies="ENSA Safi"
                />
                <ProfileCard
                    key={3}
                    profileID={3}
                    name="Alex"
                    gender="Male"
                    image={"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                    looking="Hay Salam"
                    budget="300"
                    studies="ENSA Safi"
                />
                <ProfileCard
                    key={4}
                    profileID={4}
                    name="Jane"
                    gender="Female"
                    image={"https://images.unsplash.com/photo-1620553967565-8e5d2e952b3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                    looking="Hay Anas"
                    budget="210"
                    studies="ENSA Safi"
                />
            </SimpleGrid>
        </>
     );
}
 
export default LastProfiles;
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const ListRoom = () => {
    return ( 
      <Container maxW="container.xl" mt="95px">
            <Box pb={10}>
                <Heading as="h2" size="xl">Got a room to share?</Heading>
                <Text fontSize="lg" fontWeight="semibold" mt={2}>
                    List your room for free.
                </Text>
            </Box>
      </Container>
     );
}
 
export default ListRoom;
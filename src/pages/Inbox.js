import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const Inbox = () => {
    return ( 
        <Box
            p={8} shadow="lg" rounded="lg"
            roundedTop={{ base: "unset", md: "lg" }}
            bg={useColorModeValue("white", "#1c2330")}
            minH={{md:"full"}}
        >
            <Heading as='h3' fontSize='lg' mb={4}>Inbox</Heading>
        </Box>
     );
}
 
export default Inbox;
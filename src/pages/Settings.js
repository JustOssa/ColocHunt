import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const Settings = () => {
    return ( 
        <Box
            p={8} shadow="lg" rounded="lg"
            roundedTop={{ base: "unset", md: "lg" }}
            bg={useColorModeValue("white", "#1c2330")}
            minH={{md:"full"}}
        >
            <Heading as='h3' fontSize='lg' mb={4}>Settings</Heading>
        </Box>
     );
}
 
export default Settings;
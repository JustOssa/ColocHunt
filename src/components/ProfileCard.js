import { Badge, Box, chakra, Flex, Icon, Image, useColorModeValue } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

const ProfileCard = ({title, img}) => {
    return (
          <Box
            w="full"
            mx="auto"
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
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
    
            <Flex px={6} py={3} bg="gray.900" align="center" justify="space-between" w="100%">
                <Flex align="center">
                    <Icon as={MdLocationOn} h={5} w={5} color="white" />
                    <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize={["lg", "inherit"]}>
                        Looking in California
                    </chakra.h1>
                </Flex>
                <Badge backgroundColor='gray.600' color="white">200$</Badge>
            </Flex>
    
            <Box py={4} px={6}>
              <chakra.h1
                fontSize={["xl", "inherit"]}
                fontWeight="bold"
                color={useColorModeValue("gray.800", "white")}
              >
                {title}
              </chakra.h1>
    
              <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
                Looking to rent a room, i keep to myself, im as quiet as it could be,
                I don't smoke nor drink.
              </chakra.p>
    
              <Flex
                alignItems="center"
                mt={4}
                color={useColorModeValue("gray.700", "gray.200")}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />
                <chakra.h1 px={2} fontSize="sm">ENSA Safi</chakra.h1>
              </Flex>
            </Box>
          </Box>
      );
}
 
export default ProfileCard;
import { Badge, Box, chakra, Flex, Icon, Image, LinkBox, LinkOverlay, useColorModeValue } from "@chakra-ui/react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileCard = ({profileID, image, gender, name, description, studies, looking, budget}) => {
    return (
          <LinkBox
            w="full"
            mx="auto"
            bg={useColorModeValue("white", "#1f2633")}
            shadow="lg"
            rounded="md"
            overflow="hidden"
            pos="relative"
          >
            <Image
              w="full"
              h={48}
              fit="cover"
              objectPosition="center"
              src={image}
              fallbackSrc={
                gender === "Male" ?
                  "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                :
                  "https://i.pinimg.com/736x/09/04/8e/09048e346d8177216ee0e72e69b314c4.jpg"
              }
              alt="avatar"
            />
    
            <Flex px={6} py={3} bg="gray.900" align="center" justify="space-between" w="100%">
                <Flex align="center" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
                    <FaMapMarkerAlt size={17} color="white" overflow="unset"/>
                    <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize={["lg", "inherit"]}
                      overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
                        Looking in {looking}
                    </chakra.h1>
                </Flex>
                <Badge backgroundColor='gray.600' color="white">{budget}$</Badge>
            </Flex>
    
            <Box py={4} px={6}>
              <LinkOverlay _before={{ zIndex:1 }} as={Link} to={"/profiles/" + profileID}>
                <chakra.h1
                  fontSize={["xl", "inherit"]} fontWeight="bold"
                  color={useColorModeValue("gray.800", "white")}
                >
                  {name}
                </chakra.h1>
              </LinkOverlay>
    
              <chakra.p pt={2} mb={12} noOfLines={3} color={useColorModeValue("gray.700", "gray.400")} >
                {description}
              </chakra.p>
    
              <Flex
                alignItems="center" pos="absolute" bottom={4}
                color={useColorModeValue("gray.700", "gray.200")}
              >
                <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />
                <chakra.h1 px={2} fontSize="sm">
                  {studies}
                </chakra.h1>
              </Flex>
            </Box>
          </LinkBox>
      );
}
 
export default ProfileCard;
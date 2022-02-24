import { Badge, Box, chakra, Flex, Icon, Image, LinkBox, LinkOverlay, useColorModeValue } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProfileCard = ({img, name, description, studies, looking}) => {
    return (
          <LinkBox
            w="full"
            mx="auto"
            bg={useColorModeValue("white", "#1f2633")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            pos="relative"
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
                <Flex align="center" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
                    <Icon as={MdLocationOn} h={5} w={5} color="white" />
                    <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize={["lg", "inherit"]}
                      overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
                        Looking in {looking}
                    </chakra.h1>
                </Flex>
                <Badge backgroundColor='gray.600' color="white">200$</Badge>
            </Flex>
    
            <Box py={4} px={6}>
              <LinkOverlay _before={{ zIndex:1 }} as={Link} to="/profiles/a">
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
import {
    chakra,
    Box,
    SimpleGrid,
    useColorModeValue,
    Image,
    Center,
  } from "@chakra-ui/react";

import Pic1 from '../../../Assets/images/Time-management-rafiki.svg'
import Pic2 from '../../../Assets/images/People-talking-bro.svg'
import Pic3 from '../../../Assets/images/Security-On-rafiki.svg'

const Features = () => {

    const Feature = (props) => {
        return (
          <Box textAlign="center" shadow="lg" rounded="md" px={8} py={10}
            bg={useColorModeValue("white", "#1f2633")}>
            <Center>
                <Image boxSize={48} src={props.icon}/>
            </Center>
            <chakra.h3 my={3} fontSize="lg" fontWeight="bold" >
                {props.title}
            </chakra.h3>
            <chakra.p fontSize={{ md: "lg" }}
                color={useColorModeValue("gray.600", "gray.400")}
            >
                {props.children}
            </chakra.p>
          </Box>
        );
    };

    return (
        <>
        <Box textAlign={{ sm: "center" }} px={{ base: 4, lg: 16, xl: 24 }} >
            <chakra.p
                fontSize={{ base: "3xl", sm: "4xl" }}
                lineHeight="8" fontWeight="extrabold" letterSpacing="tight"
            >
                Features
            </chakra.p>
            <chakra.p
                mt={4} mx="auto" maxW="2xl" fontSize={{ sm: "lg", md: "xl" }}
                color={useColorModeValue("gray.500", "gray.400")}
            >
                Take a look at the features and see how we make roommates finding better.
            </chakra.p>
        </Box>

        <SimpleGrid
            px={{ base: 4, lg: 16, xl: 24 }} 
            py={10}
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 5, xl: 10 }}
        >
            <Feature
                title="Save Time"
                icon={Pic1}
            >
                Finding great roommates has never been easier. Create your
                free listing and connect with other members with just few clicks.
            </Feature>

            <Feature
                title="Matching interests"
                icon={Pic2}
            >
                Connect with relevant roommates who have common interests
                and fit your preferences and lifestyle.
            </Feature>

            <Feature
                title="Safe and secure"
                icon={Pic3}
            >
                Keep your private information secure by chatting with roommates
                through our application or website.
            </Feature>
        </SimpleGrid>
        </>
    );
}
 
export default Features;

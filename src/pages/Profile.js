import { Avatar, Box, Button, chakra, Container, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Stack, Tag, TagLabel, TagLeftIcon, Text, useColorModeValue } from '@chakra-ui/react';
import Header from '../components/Layout/Header';
import { FaSmile } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import InfoCard from '../components/InfoCard';
import { MdEmail } from 'react-icons/md';

const Profile = () => {

    const profileImg = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

    return ( 
        <Container maxW="container.xl" mt="24">
            <Header/>
            <Grid gap={{ base: 0, md: 4 }} mt={8} 
                templateColumns={{ base: "1fr", md: 'repeat(4, 1fr)' }}
                >
                <GridItem>
                    <InfoCard key={1} title="Patterson" img={profileImg} />
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }}>

                <Box
                    py={4} px={8} shadow="lg" rounded="lg" roundedTop={{ base: "unset", md: "lg" }}
                    bg={useColorModeValue("white", "#1c2330")}
                >
                    <Flex justifyContent={{ base: "center", md: "end" }} mt={-20}>
                    <Image
                        w={32}
                        h={32}
                        fit="cover"
                        rounded="full"
                        borderStyle="solid"
                        borderWidth={2}
                        alt="Testimonial avatar"
                        src={profileImg}
                    />
                    </Flex>


                    <Box mt={{base:"initial", md: -10}} textAlign={{base:"center", md: "initial"}}>
                        <chakra.h2 fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
                            Patterson
                        </chakra.h2>
                        <chakra.p mb={2} color={useColorModeValue("gray.900", "gray.200")}>
                            Female · 24 years · Student
                        </chakra.p>
                    </Box>

                    <Heading fontSize='md' fontWeight="medium" py={2}>About me</Heading>
                    <Text color={useColorModeValue("gray.800", "gray.400")}>
                        My name is Patterson. I'm a 24-year-old student, looking for
                        a place in which I can have my privacy while having a friendly
                        environment. I'm clean and organized. I play an instrument; but I
                        always make sure to be on a same page with everyone about when to play.
                    </Text>

                    <Heading as='h4' fontSize='md' fontWeight="medium" py={2}>Interests</Heading>
                    <HStack spacing={2}>
                        {[1, 2].map((size) => (
                            <Tag key={size} variant='subtle' colorScheme='cyan'>
                                <TagLeftIcon boxSize='12px' as={FaSmile} />
                                <TagLabel>Student</TagLabel>
                            </Tag>
                        ))}
                    </HStack>

                    <Heading as='h4' fontSize='md' fontWeight="medium" py={2}>More</Heading>
                    <HStack spacing={2}>
                        {[1, 2, 3].map((size) => (
                            <Tag key={size} variant='subtle' colorScheme='red'>
                                <TagLeftIcon boxSize='12px' as={BsFillHeartFill} />
                                <TagLabel>Friendly</TagLabel>
                            </Tag>
                        ))}
                    </HStack>

                    <Divider mt={4} />

                    <Stack my={2} spacing={2}>
                        <Flex  justifyContent="space-between">
                            <Text color={useColorModeValue("gray.900", "gray.200")}>
                                Looking in:
                            </Text>
                            <Text fontWeight="semibold">Hay Salam</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text color={useColorModeValue("gray.900", "gray.200")}>
                                Budget:
                            </Text>
                            <Text fontWeight="semibold">200$/Month</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text color={useColorModeValue("gray.900", "gray.200")}>
                                Available:
                            </Text>
                            <Text fontWeight="semibold">Immediately</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text color={useColorModeValue("gray.900", "gray.200")}>
                                Duration:
                            </Text>
                            <Text fontWeight="semibold">6 months</Text>
                        </Flex>
                    </Stack>
                </Box>

                <Flex justify="space-between" align="center"
                    mt={4} py={4} px={8} shadow="lg" rounded="lg"
                    bg={useColorModeValue("white", "#1c2330")}
                    display={{base:"flex", md:"none"}}
                >
                    <Flex>
                        <Avatar src={profileImg} />
                        <Box ml='3'>
                            <Text fontWeight='bold'>
                                Patterson
                            </Text>
                            <Text fontSize='sm'>ENSA Safi</Text>
                        </Box>
                    </Flex>

                    <Button leftIcon={<MdEmail/>} colorScheme='blue' >
                        Contact
                    </Button>
                </Flex>

                </GridItem >
            </Grid>
        </Container>
     );
}
 
export default Profile;
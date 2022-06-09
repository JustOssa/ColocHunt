import { Avatar, Box, Button, chakra, Container, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Stack, Tag, TagLabel, TagLeftIcon, Text, useColorModeValue } from '@chakra-ui/react';
import Header from '../components/Layout/Header';
import { FaSmile } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import InfoCard from '../components/InfoCard';
import { MdEmail } from 'react-icons/md';
import Loader from '../components/Layout/Loader';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../firestore/utils';
import NotFound from '../components/Layout/Notfound';
import FormatDate from '../utils/formatDate';

const Profile = () => {

    const [profileData, setProfileData] = useState();
    const [loading, setLoading] = useState(true);

    const profileImg = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

    const subColor = useColorModeValue("gray.900", "gray.200");
    const bg1 = useColorModeValue("white", "#1c2330");
    const color1 = useColorModeValue("gray.800", "gray.400");

    let params = useParams();

    useEffect( () => {
        async function getProfileData() {
            try {
                const docSnap = await getUser(params.profileID);
                // If user has profile listing
                if (docSnap.exists() && docSnap.data().ProfileListing) {
                    setProfileData(docSnap.data());
                }
                setLoading(false);
            } catch (err) {
                console.log(err.message)
            }
        }
        getProfileData();
    }, [params]);

    return ( 
        loading ?
            <Loader size="lg"/>
        :
        profileData ?
            <Container maxW="container.xl" mt={8} mb={10}>
                <Header/>
                <Grid gap={{ base: 0, md: 4 }} mt={8} 
                    templateColumns={{ base: "1fr", md: 'repeat(4, 1fr)' }}
                    >
                    <GridItem>
                        <InfoCard title={profileData?.name} about={profileData?.about} location={profileData?.ProfileListing?.location} budget={profileData?.ProfileListing?.budget} studies={profileData?.studies} img={profileImg} />
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 3 }}>

                    <Box
                        py={4} px={8} shadow="lg" rounded="lg" roundedTop={{ base: "unset", md: "lg" }}
                        bg={bg1}
                    >
                        <Flex justifyContent={{ base: "center", md: "end" }} mt={-20} visibility={{base:"visible", md: "hidden"}}>
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
                                {profileData?.name}
                            </chakra.h2>
                            <chakra.p mb={2} color={subColor}>
                                {profileData?.gender} · {profileData?.age} years · Student
                            </chakra.p>
                        </Box>

                        <Heading fontSize='md' fontWeight="medium" py={2}>About me</Heading>
                        <Text color={color1}>
                            {profileData?.about}
                        </Text>

                        <Heading as='h4' fontSize='md' fontWeight="medium" py={2}>Interests</Heading>
                        <HStack spacing={2}>
                            { profileData?.interests?.map((interest) => (
                                <Tag key={interest} variant='subtle' colorScheme='cyan'>
                                    <TagLeftIcon boxSize='12px' as={FaSmile} />
                                    <TagLabel>{interest}</TagLabel>
                                </Tag>
                            ))}
                        </HStack>

                        <Heading as='h4' fontSize='md' fontWeight="medium" py={2}>More</Heading>
                        <HStack spacing={2}>
                            {[1, 2].map((size) => (
                                <Tag key={size} variant='subtle' colorScheme='red'>
                                    <TagLeftIcon boxSize='12px' as={BsFillHeartFill} />
                                    <TagLabel>Friendly</TagLabel>
                                </Tag>
                            ))}
                        </HStack>

                        <Divider mt={4} />

                        <Stack my={2} spacing={2}>
                            <Flex  justifyContent="space-between">
                                <Text color={subColor}>
                                    Looking in:
                                </Text>
                                <Text fontWeight="semibold">{profileData?.ProfileListing?.location}</Text>
                            </Flex>
                            <Flex justifyContent="space-between">
                                <Text color={subColor}>
                                    Budget:
                                </Text>
                                <Text fontWeight="semibold">{profileData?.ProfileListing?.budget}$/Month</Text>
                            </Flex>
                            <Flex justifyContent="space-between">
                                <Text color={subColor}>
                                    Available:
                                </Text>
                                <Text fontWeight="semibold">{FormatDate(profileData?.ProfileListing?.availability)}</Text>
                            </Flex>
                            <Flex justifyContent="space-between">
                                <Text color={subColor}>
                                    Duration:
                                </Text>
                                <Text fontWeight="semibold">{profileData?.ProfileListing?.duration} months</Text>
                            </Flex>
                        </Stack>
                    </Box>

                    <Flex justify="space-between" align="center"
                        mt={4} py={4} px={8} shadow="lg" rounded="lg"
                        bg={bg1}
                        display={{base:"flex", md:"none"}}
                    >
                        <Flex>
                            <Avatar src={profileImg} />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    {profileData?.name}
                                </Text>
                                <Text fontSize='sm'>{profileData?.studies}</Text>
                            </Box>
                        </Flex>

                        <Button leftIcon={<MdEmail/>} colorScheme='blue' >
                            Contact
                        </Button>
                    </Flex>

                    </GridItem >
                </Grid>
            </Container>
        :
            <Container maxW="container.xl" my="auto">
                <NotFound/>
            </Container>
     );
}
 
export default Profile;
import { Avatar, Box, Button, chakra, Container, Divider, Flex, Grid, GridItem, Heading, HStack, IconButton, Image, Stack, Tag, TagLabel, TagLeftIcon, Text, useColorModeValue } from '@chakra-ui/react';
import Header from '../components/Layout/Header';
import { FaSmile } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { IoWifi } from 'react-icons/io5'
import { BsFillHeartFill, BsSnow } from 'react-icons/bs';
import InfoCard from '../components/InfoCard';
import { MdEmail } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRoom, getUser } from '../firestore/utils';
import NotFound from '../components/Layout/Notfound';
import Loader from '../components/Layout/Loader';
const Room = () => {

    const [roomData, setRoomData] = useState();
    const [profile, setProfile] = useState();
    const [loading, setLoading] = useState(true);

    const profileImg = "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";

    let params = useParams();

    useEffect( () => {
        async function getRoomData() {
            try {
                const docSnap = await getRoom(params.roomID);
                if (docSnap.exists()) {
                    const docSnap2 = await getUser(docSnap.data().userID);
                    if (docSnap2.exists()) {
                        setRoomData(docSnap.data());
                        setProfile(docSnap2.data());
                    }   
                }
                setLoading(false);
            } catch (err) {
                console.log(err.message)
            }
        }
        getRoomData();
    }, [params]);
    
    const subColor = useColorModeValue("gray.900", "gray.200");
    const bg1 = useColorModeValue("white", "#1c2330");
    const color1 = useColorModeValue("gray.800", "gray.400");

    return (
        loading ?
            <Loader size="lg"/>
        :
        roomData ?
            <Container maxW="container.xl" mt={8} mb={10}>
                <Header/>
                <Grid mt={8} gap={{ base: 0, md: 4 }} templateColumns={{ base: "1fr", md: 'repeat(4, 1fr)' }}>
                    <GridItem>
                        <InfoCard title={"Author: " + profile?.name} about={profile?.about} location={roomData?.location} studies={profile?.studies} budget={roomData?.rent} img={roomData?.image} />
                    </GridItem>
                    
                    <GridItem colSpan={{ base: 1, md: 3 }}>

                        <Box
                            py={4} px={8} shadow="lg" rounded="lg" roundedTop={{ base: "unset", md: "lg" }}
                            bg={bg1}
                        >
                            <Flex justifyContent={{ base: "center", md: "end" }} mt={{ base: -20, md: -20 }}>
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


                            <IconButton
                                display="none"
                                size="lg"
                                variant='ghost'
                                colorScheme='red'
                                aria-label='Favorite'
                                icon={<BsFillHeartFill  />}
                                position="absolute"
                                top={2}
                                right={2}
                            />


                            <Box mt={{base:2, md: -10}} textAlign={{base:"center", md: "initial"}}>
                                <chakra.h2 fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
                                    {roomData?.location}
                                </chakra.h2>
                                <chakra.p mb={2} color={subColor}>
                                    {roomData?.privateRoom ?
                                        roomData?.furnishedRoom ? "Private and furnished room" : "Private room not furnished"
                                    :   
                                        roomData?.furnishedRoom ? "Shared and furnished room" : "Shared room not furnished"
                                    }                                    
                                </chakra.p>
                            </Box>

                            <Heading fontSize='md' fontWeight="medium" py={2}>Description</Heading>
                            <Text color={color1}>
                                {roomData?.aboutProperty}
                            </Text>

                            <Heading as='h4' fontSize='md' fontWeight="medium" py={2}>Tags</Heading>
                            <HStack spacing={2}>
                                {[1, 2].map((size) => (
                                    <Tag key={size} variant='subtle' colorScheme='cyan'>
                                        <TagLeftIcon boxSize='12px' as={FaSmile} />
                                        <TagLabel>Student</TagLabel>
                                    </Tag>
                                ))}
                            </HStack>

                            <Heading as='h4' fontSize='md' fontWeight="medium" py={2}>Equipments</Heading>
                            <HStack spacing={2}>
                                <Tag key={1} variant='subtle' colorScheme='red'>
                                    <TagLeftIcon boxSize='12px' as={BsSnow} />
                                    <TagLabel>Refrigerator</TagLabel>
                                </Tag>
                                <Tag key={2} variant='subtle' colorScheme='red'>
                                    <TagLeftIcon boxSize='12px' as={AiFillFire} />
                                    <TagLabel>Oven</TagLabel>
                                </Tag>
                                <Tag key={3} variant='subtle' colorScheme='red'>
                                    <TagLeftIcon boxSize='12px' as={IoWifi} />
                                    <TagLabel>Internet</TagLabel>
                                </Tag>
                            </HStack>

                            <Divider mt={4} />

                            <Stack my={2} spacing={2}>
                                <Flex  justifyContent="space-between">
                                    <Text color={subColor}>
                                        Bedrooms
                                    </Text>
                                    <Text fontWeight="semibold">{roomData?.bedrooms}</Text>
                                </Flex>
                                <Flex justifyContent="space-between">
                                    <Text color={subColor}>
                                        Rent
                                    </Text>
                                    <Text fontWeight="semibold">{roomData?.rent}$/Month</Text>
                                </Flex>
                                <Flex justifyContent="space-between">
                                    <Text color={subColor}>
                                        Roommates
                                    </Text>
                                    <Text fontWeight="semibold">{roomData?.currentRoomates + "/" + roomData?.totalRoomates}</Text>
                                </Flex>
                            </Stack>
                        </Box>

                        <Flex justify="space-between" align="center"
                            mt={4} py={4} px={8} shadow="lg" rounded="lg"
                            bg={bg1}
                            display={{base:"flex", md:"flex"}}
                        >
                            <Flex>
                                <Avatar src={profileImg} />
                                <Box ml='3'>
                                    <Text fontWeight='bold'>
                                        {profile?.name}
                                    </Text>
                                    <Text fontSize='sm'>{profile?.studies}</Text>
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
                <NotFound my="auto"/>
            </Container>
        
     );
}
 
export default Room;
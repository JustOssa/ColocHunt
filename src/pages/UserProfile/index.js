import {
    Box,
    Button,
    chakra,
    Flex,
    Heading,
    HStack,
    IconButton,
    SimpleGrid,
    Stack,
    Tag,
    TagLabel,
    TagLeftIcon,
    Text,
    Spinner,
    useColorModeValue,
    useDisclosure } from '@chakra-ui/react';
import { FaSmile } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import Card from '../../components/Card';
import BasicInfoModal from './components/modals/BasicInfoModal';
import MoreInfoModal from './components/modals/MoreInfoModal';
import ListProfileModal from './components/modals/ListProfileModal';
import ListRoomModal from './components/modals/ListRoomModal';
import CompleteProfile from './components/CompleteProfile'

import { useEffect, useState, useCallback } from "react";
import { getUser, getUserRoom } from '../../firestore/utils';

import { useUserAuth } from '../../context/UserAuthContext';
import FormatDate from '../../utils/formatDate';

const UserProfile = () => {

    const { user } = useUserAuth();
    // Data from db
    const [userData, setUserData] = useState();
    const [userRoom, setUserRoom] = useState();
    const [loading, setLoading] = useState(true);

    // modals
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen:isOpen2, onOpen:onOpen2, onClose:onClose2 } = useDisclosure();
    const { isOpen:isOpen3, onOpen:onOpen3, onClose:onClose3 } = useDisclosure();
    const { isOpen:isOpen4, onOpen:onOpen4, onClose:onClose4 } = useDisclosure();

    const Editable = ({children, onClick, ...props}) => {
        return (
            <Flex {...props} align="center" gap={2}>
                {children}
                <IconButton
                    onClick={onClick}
                    aria-label='Edit'
                    icon={<FiEdit />}
                    size="xs"
                />
            </Flex>
        );
    }

    const ProfileListing = () => {
        return (
            <>
            <Editable onClick={onOpen3} justify="space-between" my={3}>
                <Heading as='h4' fontSize='md' fontWeight="medium" >My listing</Heading>
            </Editable>
            <Stack spacing={2}>
                <Flex  justifyContent="space-between">
                    <Text color={subColor}> Looking in:</Text>
                    <Text fontWeight="semibold">{userData.ProfileListing.location}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color={subColor}>Budget:</Text>
                    <Text fontWeight="semibold">{userData.ProfileListing.budget}$/Month</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color={subColor}>Available:</Text>
                    <Text fontWeight="semibold">{FormatDate(userData.ProfileListing.availability)}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color={subColor}>Duration:</Text>
                    <Text fontWeight="semibold">{userData.ProfileListing.duration} months</Text>
                </Flex>
            </Stack>
        </>
        );
    }
    const RoomListing = () => {
        return (
            <>
                <Editable onClick={onOpen4} justify="space-between" mb={3}>
                    <Heading as='h4' fontSize='md' fontWeight="medium">My listing</Heading>
                </Editable>
                <SimpleGrid columns={{base: 1, sm: 2, xl: 3}} spacing={2}>
                    <Card
                        roomID={"roomIDHere"}
                        title={userRoom.location}
                        image={userRoom.image}
                        rent={userRoom.rent}
                        bedrooms={userRoom.bedrooms}
                        bathrooms={userRoom.bathrooms}
                        currentRoomates={userRoom.currentRoomates}
                        totalRoomates={userRoom.totalRoomates}
                    />
                </SimpleGrid>
            </>
        );
    }

    const subColor = useColorModeValue("gray.900", "gray.200");
    const bg1 = useColorModeValue("white", "#1c2330");
    const color1 = useColorModeValue("gray.800", "gray.400");
    const color2 = useColorModeValue("green.600", "green.200");
    const color3 = useColorModeValue("red.600", "red.200");
    
    // load user data from db
    const getUserData = useCallback( async () => {
        try {
            const docSnap = await getUser(user.uid);
            if (docSnap.exists()) {
                setUserData(docSnap.data());
                // get user listed room
                const querySnapshot = await getUserRoom(user.uid);
                if (!querySnapshot.empty) {
                    setUserRoom(querySnapshot.docs[0].data());
                }
            }
            setLoading(false);
        } catch (err) {
            console.log(err.message)
        }
    }, [user]);

    useEffect( () => {
        getUserData();
    }, [getUserData]);

    const blue = useColorModeValue("brand.600", "brand.400");

    return ( 
        <>

        <>

            { loading ?
                <Flex
                    align="center" justify="center"
                    py={4} px={8} shadow="lg" rounded="lg"
                    roundedTop={{ base: "unset", md: "lg" }} bg={bg1}
                    minH={{base:48, md:"full"}} 
                >
                    <Spinner
                        thickness='3px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color={blue}
                        size='lg'
                    />
                </Flex>
            :
                (userData ?
                    <>
                    <Box
                        py={6} px={8} shadow="lg" rounded="lg"
                        roundedTop={{ base: "unset", md: "lg" }} bg={bg1}
                    >

                        <Flex direction="column" align={{base:"center", md: "initial"}}>
                            <Editable onClick={onOpen}>
                                <chakra.h2 fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>
                                    {userData?.name}
                                </chakra.h2>
                            </Editable>
                            <chakra.p mb={2} color={subColor}>
                                {userData?.gender} · {userData?.age} years · Student
                            </chakra.p>
                        </Flex>

                        <Editable onClick={onOpen2} justify="space-between">
                            <Heading fontSize='md' fontWeight="medium" py={2}>About me</Heading>
                        </Editable>
                        <Text color={color1}>
                            {userData?.about}
                        </Text>

                        <HStack spacing={2} pt={2}>
                            {["Friendly", "Organized"].map((item, i) => (
                                <Tag key={i} variant='subtle' colorScheme='red'>
                                    <TagLeftIcon boxSize='12px' as={BsFillHeartFill} />
                                    <TagLabel>{item}</TagLabel>
                                </Tag>
                            ))}
                        </HStack>

                        <Heading as='h4' fontSize='md' fontWeight="medium" py={2}>Interests</Heading>
                        <HStack spacing={2}>
                            {userData?.interests?.map((item, i) => (
                                <Tag key={i} variant='subtle' colorScheme='cyan'>
                                    <TagLeftIcon boxSize='12px' as={FaSmile} />
                                    <TagLabel>{item}</TagLabel>
                                </Tag>
                            ))}
                        </HStack>

                        <Heading as='h4' fontSize='md' fontWeight="medium" py={2}>Studies</Heading>
                        <Text color={color1}>
                            {userData?.studies}
                        </Text>

                    </Box>

                    <Box
                        mt={4} py={6} px={8} shadow="lg" rounded="lg" bg={bg1}
                    >

                        {/* If: Looking for a room */}
                        { userData?.ProfileListing && <ProfileListing/> }

                        {/* If: Listing a room */}
                        { userRoom && <RoomListing/> }

                        {/* If: new profile */}
                        { (!userRoom && !userData?.ProfileListing) &&
                        <>
                            <Heading as='h4' fontSize='md' fontWeight="medium" my={3}>My listing</Heading>
                            <Text color={color1} fontSize={14}>
                                To start using our service and browse available listings you need to either
                                <chakra.span color={color2} fontWeight="semibold" whiteSpace="nowrap"> List your profile </chakra.span>
                                and let room owners find you, or
                                <chakra.span color={color3} fontWeight="semibold" whiteSpace="nowrap"> List a room</chakra.span> if you already
                                have a room to start browsing listed roommate profiles.
                            </Text>
                            <SimpleGrid columns={{base: 1, sm: 2}} spacing={2} mt={2}>
                                <Button variant="outline" colorScheme="green" onClick={onOpen3}>Looking for a room</Button>
                                <Button variant="outline" colorScheme="red" onClick={onOpen4}>Already have a room</Button>
                            </SimpleGrid>
                        </>
                        }

                    </Box>
                    </>
                :
                    <Box
                        p={8} shadow="lg" rounded="lg"
                        roundedTop={{ base: "unset", md: "lg" }} bg={bg1}
                        minH={{md:"full"}}
                    >
                        <CompleteProfile getUserData={getUserData} loading={loading} setLoading={setLoading}/>
                    </Box>
                )
            }

        </>


        {/* Modal 1 : Basic info */}
        <BasicInfoModal onClose={onClose} isOpen={isOpen} getUserData={getUserData} userData={userData} loading={loading} setLoading={setLoading}/>

        {/* Modal 2 : More info */}
        <MoreInfoModal onClose={onClose2} isOpen={isOpen2} getUserData={getUserData} userData={userData} loading={loading} setLoading={setLoading}/>

        {/* Modal 3 : Listing Profile*/}
        <ListProfileModal onClose={onClose3} isOpen={isOpen3} getUserData={getUserData} loading={loading} setLoading={setLoading}/>

        {/* Modal 4 : Listing Room*/}
        <ListRoomModal onClose={onClose4} isOpen={isOpen4} getUserData={getUserData} loading={loading} setLoading={setLoading}/>

        </>
     );
}
 
export default UserProfile;
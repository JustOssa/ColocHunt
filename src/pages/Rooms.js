import { Center, Container, HStack, IconButton, Select, SimpleGrid, Skeleton, useBreakpointValue } from '@chakra-ui/react';
import Card from '../components/Card';
import Header from '../components/Layout/Header';

import { useState, useEffect } from 'react';
import { getRooms, getRoomsByLocation } from '../firestore/utils';

import { FiFilter } from 'react-icons/fi';

const Rooms = () => {

    const [loading, setLoading] = useState();
    const [rooms, setRooms] = useState();

    const handleGetRooms = async (location) => {
        setLoading(true);
        try {
          if (location) {
              const querySnapshot = await getRoomsByLocation(location);
              setRooms(
                querySnapshot.docs.map( (doc) => ({ ...doc.data(), id: doc.id }))
              );
          } else {
              const querySnapshot = await getRooms();
              setRooms(
                querySnapshot.docs.map( (doc) => ({ ...doc.data(), id: doc.id }))
              );
          }
        } catch (error) {
          console.log(error.message);
        }
        setLoading(false);
      };

    useEffect(() => {
        handleGetRooms();
    }, []);

    const skeltonCount = useBreakpointValue({ base: 2, sm: 4, md: 6, lg: 4 })

    return ( 
        <Container maxW="container.xl" mt={8} mb={10}>
            <Header description="Join people who already have a place"/>

            <HStack justify="space-between" spacing={4} mt={8}>

                <Select maxW={{sm:72}} isDisabled={loading && true}
                    placeholder='Select location' onChange={(e) => {handleGetRooms(e.target.value)}}>
                    <option value='Hay Anas, Safi'>Hay Anas, Safi</option>
                    <option value='Miftah ElKheir, Safi'>Miftah ElKheir, Safi</option>
                    <option value='Hay Salam, Safi'>Hay Salam, Safi</option>
                    <option value='Jrifat, Safi'>Jrifat, Safi</option>
                </Select>

                <IconButton aria-label='Filter' icon={<FiFilter />} isDisabled={loading && true}/>
            </HStack>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} mt={6}>
                {
                    loading ?
                        [...Array(skeltonCount)].map( (elm, i) => {
                            return <Skeleton key={i} rounded='md' h="219px"/>
                        })
                    :
                        (
                            rooms?.length ?
                                rooms.map((doc) => {
                                    return (
                                        <Card
                                            key={doc.id}
                                            roomID = {doc.id}
                                            title={doc.location}
                                            image={doc.image}
                                            rent={doc.rent}
                                            bedrooms={doc.bedrooms}
                                            bathrooms={doc.bathrooms}
                                            currentRoomates={doc.currentRoomates}
                                            totalRoomates={doc.totalRoomates}
                                            />
                                    );
                                })
                            :
                            <Center gridColumn="1/-1">No rooms found :(</Center>
                        )
                }
            </SimpleGrid>
        </Container>
     );
}
 
export default Rooms;
import { Center, Container, HStack, IconButton, Select, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Card from '../components/Card';
import Header from '../components/Layout/Header';

import { useState, useEffect } from 'react';
import { getRooms, getRoomsByLocation } from '../firestore/utils';

import { FiFilter } from 'react-icons/fi';

const Rooms = () => {

    const [loading, setLoading] = useState();
    const [rooms, setRooms] = useState();

    const handleGetRooms = async () => {
        setLoading(true);
        try {
          const querySnapshot = await getRooms();
          setRooms(
            querySnapshot.docs.map( (doc) => ({ ...doc.data(), id: doc.id }))
          );
        } catch (error) {
          console.log(error.message);
        }
        setLoading(false);
      };

    useEffect(() => {
        handleGetRooms();
    }, []);

    const handleSearch = async (location) => {
        if (!location) {
            handleGetRooms();
        } else {
            setLoading(true);
            try {
                const querySnapshot = await getRoomsByLocation(location);
                setRooms(
                    querySnapshot.docs.map( (doc) => ({ ...doc.data(), id: doc.id }))
                );
            } catch (error) {
                console.log(error.message);
            }
            setLoading(false);               
        }
    };



    return ( 
        <Container maxW="container.xl" mt="24">
            <Header description="Join people who already have a place"/>

            <HStack justify="space-between" spacing={4} mt={8}>

                <Select maxW={{sm:72}} isDisabled={loading && true}
                    placeholder='Select location' onChange={(e) => {handleSearch(e.target.value)}}>
                    <option value='Hay Anas, Safi'>Hay Anas, Safi</option>
                    <option value='Miftah ElKheir, Safi'>Miftah ElKheir, Safi</option>
                    <option value='Hay Salam, Safi'>Hay Salam, Safi</option>
                    <option value='Jrifat, Safi'>Jrifat, Safi</option>
                </Select>

                <IconButton aria-label='Filter' icon={<FiFilter />}/>
            </HStack>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} mt={6}>
                {
                    loading ?
                        [...Array(4)].map( (elm, i) => {
                            return <Skeleton key={i} rounded='md' h="219px"/>
                        })
                    :
                        (
                            rooms?.length ?
                                rooms.map((doc) => {
                                    return (
                                        <Card key={doc.id} title={doc.location} post={doc.img} />
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
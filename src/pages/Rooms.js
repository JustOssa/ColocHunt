import { Container, HStack, IconButton, Input, InputGroup, InputLeftElement, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Card from '../components/Card';
import Header from '../components/Layout/Header';

import { useState, useEffect } from 'react';
import { getRooms } from '../firestore/utils';

import { BsSearch } from 'react-icons/bs';
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



    return ( 
        <Container maxW="container.xl" mt="24">
            <Header description="Join people who already have a place"/>

            <HStack justify="space-between" spacing={4} mt={8}>
                <InputGroup maxW={{sm:72}}>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<BsSearch color='gray.300' />}
                    />
                    <Input placeholder='Search' />
                </InputGroup>

                <IconButton aria-label='Filter' icon={<FiFilter />} />
            </HStack>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} mt={6}>
                {
                    loading ?
                    [...Array(4)].map( (elm, i) => {
                        return <Skeleton key={i} rounded='md' h="219px"/>
                    })
                    :
                    rooms && rooms.map((doc) => {
                        return (
                            <Card key={doc.id} title={doc.location} post={doc.img} />
                        );
                    })
                }
            </SimpleGrid>
        </Container>
     );
}
 
export default Rooms;
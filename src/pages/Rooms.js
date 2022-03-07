import { Container, HStack, IconButton, Input, InputGroup, InputLeftElement, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Card from '../components/Card';
import Header from '../components/Layout/Header';

import { BsSearch } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';

const Rooms = () => {
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
                <Card title="Miftah ElKheir, Safi" post={"https://i.imgur.com/5BtLV52.jpeg"} />
                <Card title="Hay Salam, Safi" post={"https://i.imgur.com/LuycVeB.jpeg"} />
                <Card title="Jrifat, Safi" post={"https://i.imgur.com/9lXhrTh.jpeg"} />
                <Card title="Hay Anas, Safi" post={"https://i.imgur.com/vHiYiXj.jpeg"} />
                <Card title="Hay Ourida 2, Safi" post={"https://i.imgur.com/VTJ5oz4.jpeg"} />
                <Skeleton borderRadius={['sm', null, 'md']} />
            </SimpleGrid>
        </Container>
     );
}
 
export default Rooms;
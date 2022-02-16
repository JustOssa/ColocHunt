import { Container, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Card from '../components/Card';
import Header from '../components/Layout/Header';

const Profiles = () => {
    return ( 
        <Container maxW="container.xl" mt="24">
            <Header/>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} mt={8}>
                <Card key={1} title="Miftah ElKheir, Safi" post={"https://i.imgur.com/5BtLV52.jpeg"} />
                <Card key={2} title="Hay Salam, Safi" post={"https://i.imgur.com/LuycVeB.jpeg"} />
                <Card key={2} title="Jrifat, Safi" post={"https://i.imgur.com/9lXhrTh.jpeg"} />
                <Card key={2} title="Hay Anas, Safi" post={"https://i.imgur.com/vHiYiXj.jpeg"} />
                <Card key={2} title="Hay Ourida 2, Safi" post={"https://i.imgur.com/VTJ5oz4.jpeg"} />
                <Skeleton borderRadius={['sm', null, 'md']} key={3} />
            </SimpleGrid>
        </Container>
     );
}
 
export default Profiles;
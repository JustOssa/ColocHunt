import { Button, Container, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';

const Home = () => {

  return (
      <Container maxW="container.xl" mt="24">
        <Header/>
        <Stack spacing={4} mt={8} mx="auto" maxW="sm">
          <Button as={Link} to="/profiles/create">Looking for a room</Button>
          <Button as={Link} to="/rooms/create">Got a room to share</Button>
        </Stack>
      </Container>
  );
}

export default Home;

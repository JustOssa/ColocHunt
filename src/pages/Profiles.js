import { Container, HStack, IconButton, Input, InputGroup, InputLeftElement, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Header from '../components/Layout/Header';
import ProfileCard from '../components/ProfileCard';

import { BsSearch } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';

import { useState, useEffect } from 'react';
import { getProfiles } from '../firestore/utils';

const Profiles = () => {
    
    const [loading, setLoading] = useState();
    const [profiles, setProfiles] = useState();

    const handleGetProfiles = async () => {
        setLoading(true);
        try {
          const querySnapshot = await getProfiles();
          setProfiles(
            querySnapshot.docs.map( (doc) => ({ ...doc.data(), id: doc.id }))
          );
        } catch (error) {
          console.log(error.message);
        }
        setLoading(false);
      };

    useEffect(() => {
        handleGetProfiles();
    }, []);

    return ( 
        <Container maxW="container.xl" mt="24">
            <Header description="Discover people looking for a place to rent"/>

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
                        return <Skeleton key={i} rounded='md' h="424px"/>
                    })
                    :
                    profiles && 
                    <>
                        <ProfileCard
                            name="Patterson"
                            img={"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}
                            description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                            looking="Hay Salam"
                            studies="ENSA Safi"
                        />
                        <ProfileCard
                            name="John"
                            img={"https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
                            description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                            looking="Miftah ElKheir"
                            studies="ENSA Safi"
                        />
                        <ProfileCard
                            name="Alex"
                            img={"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                            description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                            looking="Hay Salam"
                            studies="ENSA Safi"
                        />
                        <ProfileCard
                            name="Jane"
                            img={"https://images.unsplash.com/photo-1620553967565-8e5d2e952b3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                            description="Looking to rent a room, i keep to myself, im as quiet as it could be, I don't smoke nor drink."
                            looking="Hay Anas"
                            studies="ENSA Safi"
                        />
                    </>
                    /*profiles && profiles.map((doc) => {
                        return (
                            
                            <ProfileCard
                                key={doc.id}
                                name={doc.name}
                                img={doc.img}
                                description={doc.about}
                                looking={doc.ProfileListing?.lookingIn}
                                studies={doc.studies}
                            />
                        );
                    })*/
                }
            </SimpleGrid>
        </Container>
     );
}
 
export default Profiles;
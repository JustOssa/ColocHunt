import { Center, Container, HStack, IconButton, Select, SimpleGrid, Skeleton, useBreakpointValue } from '@chakra-ui/react';
import Header from '../components/Layout/Header';
import ProfileCard from '../components/ProfileCard';

import { FiFilter } from 'react-icons/fi';

import { useState, useEffect } from 'react';
import { getProfiles, getProfilesByLocation } from '../firestore/utils';

const Profiles = () => {
    
    const [loading, setLoading] = useState();
    const [profiles, setProfiles] = useState();

    const handleGetProfiles = async (location) => {
        setLoading(true);
        try {
            if (location) {
                const querySnapshot = await getProfilesByLocation(location);
                setProfiles(
                    querySnapshot.docs.map( (doc) => ({ ...doc.data(), id: doc.id }))
                );
            } else {
                const querySnapshot = await getProfiles();
                setProfiles(
                    querySnapshot.docs.map( (doc) => ({ ...doc.data(), id: doc.id }))
                );
            }
        } catch (error) {
          console.log(error.message);
        }
        setLoading(false);
      };

    useEffect(() => {
        handleGetProfiles();
    }, []);

    const skeltonCount = useBreakpointValue({ base: 1, sm: 4, md: 6, lg: 4 })

    return ( 
        <Container maxW="container.xl" mt={8}>
            <Header description="Discover people looking for a place to rent"/>

            <HStack justify="space-between" spacing={4} mt={8}>
                
                <Select maxW={{sm:72}} isDisabled={loading && true}
                    placeholder='Select location' onChange={(e) => {handleGetProfiles(e.target.value)}}>
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
                            return <Skeleton key={i} rounded='md' h="424px"/>
                        })
                    :
                        (
                        profiles && 
                            profiles?.length ?
                                profiles.map((doc) => {
                                    return (
                                        
                                        <ProfileCard
                                            key={doc.id}
                                            profileID={doc.id}
                                            name={doc.name}
                                            gender={doc.gender}
                                            image={doc.img}
                                            description={doc.about}
                                            looking={doc.ProfileListing?.location}
                                            budget={doc.ProfileListing?.budget}
                                            studies={doc.studies}
                                        />
                                    );
                                })
                            :
                                <Center gridColumn="1/-1">No Profiles found :(</Center>
                        )
                }
            </SimpleGrid>
        </Container>
     );
}
 
export default Profiles;
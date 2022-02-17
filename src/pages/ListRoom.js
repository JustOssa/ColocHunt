import { Box, Button, Checkbox, Container, FormControl, FormHelperText, FormLabel, Heading, HStack, Input, InputGroup, InputLeftAddon, InputRightAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, SimpleGrid, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListRoom = () => {

    const [page, setPage] = useState(1);
    const [location, setLocation] = useState("");
    const [rent, setRent] = useState(0);
    const [currentRoomates, setCurrentRoomates] = useState(1);
    const [totalRoomates, setTotalRoomates] = useState(3);
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [privateRoom, setPrivateRoom] = useState(false);
    const [furnishedRoom, setFurnishedRoom] = useState(false);
    const [equipments, setEquipments] = useState([false, false, false]);
    const [aboutProperty, setAboutProperty] = useState("");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [studies, setStudies] = useState("");
    const [about, setAbout] = useState("");
    const [interests, setInterests] = useState([false, false, false]);

    const handleInterestChange = (position) => {
        const updatedInterests = interests.map((item, index) =>
            index === position ? !item : item
        );
        setInterests(updatedInterests);
    }
    const handleEquipmentsChange = (position) => {
        const updatedEquipments = equipments.map((item, index) =>
            index === position ? !item : item
        );
        setEquipments(updatedEquipments);
    }

    const submitData = () => {
        console.log(
            JSON.stringify({
                location: location,
                rent: rent,
                roomates:currentRoomates + "/" + totalRoomates,
                bedrooms: bedrooms,
                bathrooms: bathrooms,
                private : privateRoom,
                furnished: furnishedRoom,
                equipments: equipments,
                aboutProperty: aboutProperty,
                name: name,
                email: email,
                password: password,
                studies:studies,
                about: about,
                interests: interests,
              })
        )
    }

    return ( 
        <Container maxW="container.xl" mt="95px">

            <Box pb={10}>
                <Heading as="h2" size="xl">Got a room to share?</Heading>
                <Text fontSize="lg" fontWeight="semibold" mt={2}>
                    List your room for free.
                </Text>
            </Box>

            { page === 1 &&
            <Stack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor='location'>Location</FormLabel>
                    <Input id='location' placeholder='Type to search...' value={location} onChange={(e) => setLocation(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='rent'>Rent</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children='$' />
                        <NumberInput defaultValue={0} min={0} id='rent' value={rent} onChange={(value) => setRent(value)}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <InputRightAddon children='monthly' />
                    </InputGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Roommates</FormLabel>
                    <HStack>
                        <NumberInput maxW={[null, 32]} defaultValue={1} min={1} id='current' value={currentRoomates} onChange={(value) => setCurrentRoomates(value)}>
                            <NumberInputField />
                        </NumberInput>
                        <Text>/</Text>
                        <NumberInput maxW={[null, 32]} defaultValue={3} min={2} id='total' value={totalRoomates} onChange={(value) => setTotalRoomates(value)}>
                            <NumberInputField />
                        </NumberInput>
                    </HStack>
                    <FormHelperText>Current / Total</FormHelperText>
                </FormControl>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel htmlFor='bedrooms'>Bedrooms</FormLabel>
                            <NumberInput defaultValue={0} min={0} id='bedrooms' value={bedrooms} onChange={(value) => setBedrooms(value)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <Stack>
                                <Checkbox value="private" isChecked={privateRoom} onChange={() => setPrivateRoom(!privateRoom)}>Private room</Checkbox>
                                <Checkbox value="furnished" isChecked={furnishedRoom} onChange={() => setFurnishedRoom(!furnishedRoom)}>Furnished room</Checkbox>
                            </Stack>
                        </FormControl>
                    </Stack>
                    <FormControl>
                        <FormLabel htmlFor='bathrooms'>Bathrooms</FormLabel>
                        <NumberInput defaultValue={0} min={0} id='bathrooms' value={bathrooms} onChange={(value) => setBathrooms(value)}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </SimpleGrid>
                <FormControl>
                    <FormLabel>Equipments</FormLabel>
                    <Stack>
                        <Checkbox value="refrigerator" isChecked={equipments[0]} onChange={() => handleEquipmentsChange(0)}>Refrigerator</Checkbox>
                        <Checkbox value="oven" isChecked={equipments[1]} onChange={() => handleEquipmentsChange(1)}>Oven</Checkbox>
                        <Checkbox value="internet" isChecked={equipments[2]} onChange={() => handleEquipmentsChange(2)}>Internet</Checkbox>
                    </Stack>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='about-property'>About the property</FormLabel>
                    <Textarea id='about-property' value={aboutProperty} onChange={(e) => setAboutProperty(e.target.value)}></Textarea>
                </FormControl>
                <Heading as="h3" size="md">Create a profile</Heading>
                <FormControl>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <Input id='name' value={name} onChange={(e) => setName(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </FormControl>      
                <Button onClick={ () => setPage(page+1) }>Next</Button>
                <Button as={Link} to="/profiles">Skip</Button>
            </Stack>

            }

            { page === 2 &&

            <Stack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor='studies'>Studies</FormLabel>
                    <Select id="studies" placeholder='Select option' value={studies} onChange={(e) => setStudies(e.target.value)}>
                        <option value='ensa'>ENSA</option>
                        <option value='est'>EST</option>
                        <option value='fps'>FPS</option>
                        <option value='other'>Other</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='about-you'>About you</FormLabel>
                    <Textarea id='about-you' value={about} onChange={(e) => setAbout(e.target.value)}></Textarea>
                </FormControl>
                <FormControl>
                    <FormLabel>Interests</FormLabel>
                    <Stack>
                        <Checkbox value="bike" isChecked={interests[0]} onChange={() => handleInterestChange(0)}>I have a bike</Checkbox>
                        <Checkbox value="car" isChecked={interests[1]} onChange={() => handleInterestChange(1)}>I have a car</Checkbox>
                        <Checkbox value="boat" isChecked={interests[2]} onChange={() => handleInterestChange(2)}>I have a boat</Checkbox>
                    </Stack>
                </FormControl>
                <Button onClick={ () => setPage(page-1) }>Back</Button>
                <Button colorScheme='blue' onClick={submitData}>Submit</Button>
            </Stack>

            }
  
        </Container>
     );
}
 
export default ListRoom;
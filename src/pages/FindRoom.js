import { Box, Button, Checkbox, Container, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FindRoom = () => {

    const [page, setPage] = useState(1);
    const [location, setLocation] = useState("");
    const [budget, setBudget] = useState(0);
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

    const submitData = () => {
        console.log(
            JSON.stringify({
                location: location,
                budget: budget,
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
                <Heading as="h2" size="xl">Looking for a room?</Heading>
                <Text fontSize="lg" fontWeight="semibold" mt={2}>
                    Create your profile.
                </Text>
            </Box>

            { page === 1 &&
            <Stack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor='location'>Location</FormLabel>
                    <Input id='location' placeholder='Type to search...' value={location} onChange={(e) => setLocation(e.target.value)}/>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='budget'>Budget</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children='$' />
                        <NumberInput defaultValue={0} min={0} id='budget' value={budget} onChange={(value) => setBudget(value)}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <InputRightAddon children='monthly' />
                    </InputGroup>
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
                <Button as={Link} to="/rooms">Skip</Button>
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
 
export default FindRoom;
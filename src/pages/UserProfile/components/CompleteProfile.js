import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    SimpleGrid,
    Stack,
    Textarea,
    useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";
import { createUser } from "../../../firestore/utils";
import { useUserAuth } from '../../../context/UserAuthContext';

const CompleteProfile = ({getUserData, loading, setLoading}) => {

    const { user } = useUserAuth();

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);
    const [studies, setStudies] = useState("");
    const [about, setAbout] = useState("");
    // const [interests, setInterests] = useState([false, false, false]);

    const ScrollBox = ( props ) => {
        return (   
            <Box overflowY="scroll" h={32} 
                    sx={{
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: useColorModeValue("gray.300", "gray.800"),
                        borderRadius: '24px',
                    },
                    }}>
                {props.children}
            </Box>
         );
    }

    const handleCreateProfile = async (e) => {
        setLoading(true);
        e.preventDefault();
        const userData = {
            name: name,
            gender: gender,
            age: age,
            studies: studies,
            about: about,
            interests: ["Gaming", "Movies", "Reading"]
          };
        try {
            await createUser(userData, user.uid);
            console.log("Profile added.")
            getUserData();
        } catch (err) {
            console.log(err.message);
        }
      };

    return ( 
        <Box as="form" onSubmit={handleCreateProfile}>
            <Heading as='h3' fontSize='lg' mb={4}>Complete your profile</Heading>
            <FormControl>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input id="name" placeholder='Full name' value={name} onChange={(e) => setName(e.target.value)}/>
            </FormControl>
            <SimpleGrid columns={{base:2, md:3}} spacing={4} mt={4}>
                <FormControl>
                    <FormLabel htmlFor='gender'>Gender</FormLabel>
                    <Select id="gender" placeholder='Select option' value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='age'>Age</FormLabel>
                    <NumberInput id="age" placeholder="Age" value={age} onChange={(value) => setAge(value)}>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='studies'>Studies</FormLabel>
                    <Select id="studies" placeholder='Select option'
                        value={studies} onChange={(e) => setStudies(e.target.value)}
                    >
                        <option value='ENSA'>ENSA</option>
                        <option value='EST'>EST</option>
                        <option value='FPS'>FPS</option>
                        <option value='-'>Other</option>
                    </Select>
                </FormControl>
            </SimpleGrid>

            <FormControl mt={4}>
                <FormLabel>About</FormLabel>
                <Textarea placeholder='Tell us about you' value={about} onChange={(e) => setAbout(e.target.value)}/>
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Interests</FormLabel>
                <ScrollBox>
                <Stack>
                    <Checkbox>Gaming</Checkbox>
                    <Checkbox>Music</Checkbox>
                    <Checkbox>Movies</Checkbox>
                    <Checkbox>Reading</Checkbox>
                    <Checkbox>Sleeping</Checkbox>
                    <Checkbox>Traveling</Checkbox>
                    <Checkbox>Basketball</Checkbox>
                </Stack>
                </ScrollBox>
            </FormControl>
            <Flex mt={4} justify="flex-end">
                <Button colorScheme='blue' w={20} type="submit" isLoading={loading}>Next</Button>
            </Flex>
        </Box>
     );
}
 
export default CompleteProfile;
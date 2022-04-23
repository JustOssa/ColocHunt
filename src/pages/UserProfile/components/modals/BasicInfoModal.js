import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Select,
    Stack
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { updateUser } from "../../../../firestore/utils";
import { useUserAuth } from '../../../../context/UserAuthContext';

const BasicInfoModal = ({isOpen, onClose, getUserData, userData, loading, setLoading}) => {
    
    const { user } = useUserAuth();

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState();

    const resetStates = useCallback( () => {
        if (userData) {
            setName(userData.name);
            setGender(userData.gender);
            setAge(userData.age);
        }
    }, [userData]);

    useEffect( () => {
        resetStates();
    }, [resetStates]);
    
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        const userData = {
            name: name,
            gender: gender,
            age: age
          };
        console.log(userData);
        try {
            await updateUser(userData, user.uid);
            onClose();
            console.log("Profile updated.")
            getUserData();
        } catch (err) {
            console.log(err.message);
        }
        setLoading(false);
      };

    return ( 
        <Modal onClose={() => {resetStates(); onClose()}} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                        <Input id="name" placeholder='Full name' value={name} onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
                    <Stack direction="row" spacing={4} mt={4}>
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
                    </Stack>
                </ModalBody>
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleUpdateProfile} disabled={loading ? true : false}>{loading ? "loading..." : "Save"}</Button>
                <Button onClick={() => {resetStates(); onClose()}}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
     );
}
 
export default BasicInfoModal;
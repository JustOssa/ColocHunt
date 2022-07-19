import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
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
    NumberInputStepper
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useUserAuth } from "../../../../context/UserAuthContext";
import { updateUser } from "../../../../firestore/utils";


const ListProfileModal = ({isOpen, onClose, getUserData, userData, loading, setLoading}) => {
    
    const { user } = useUserAuth();

    const [location, setLocation] = useState("");
    const [budget, setBudget] = useState(0);
    const [availability, setAvailability] = useState("");
    const [duration, setDuration] = useState("");

    const resetStates = useCallback( () => {
        if (userData?.ProfileListing) {
            setLocation(userData.ProfileListing.location);
            setBudget(userData.ProfileListing.budget);
            setAvailability(userData.ProfileListing.availability);
            setDuration(userData.ProfileListing.duration);
        }
    }, [userData]);

    useEffect( () => {
        resetStates();
    }, [resetStates]);

    const handleShareProfile = async () => {
        setLoading(true);
        const userData = {
            ProfileListing: {
                location: location,
                budget: budget,
                availability: availability,
                duration: duration,
                userID: user.uid
            }
          };
        try {
            await updateUser(userData, user.uid);
            console.log("Profile shared.")
            onClose();
            getUserData();
        } catch (err) {
            console.log(err.message);
        }
      };

    return ( 
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Update listing</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel htmlFor='looking'>Looking in</FormLabel>
                        <Input id="looking" placeholder='Type to search' value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel htmlFor='budget'>Budget</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children='$' />
                            <NumberInput min={0} value={budget} onChange={(value) => setBudget(value)}>
                                <NumberInputField id="budget" placeholder="Budget"/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <InputRightAddon children='monthly' />
                        </InputGroup>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel htmlFor='availability'>Availability</FormLabel>
                        <Input type="date" id="availability" value={availability} onChange={(e) => setAvailability(e.target.value)}/>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel htmlFor='duration'>Duration</FormLabel>
                        <Input id="duration" placeholder='Duration (months)' value={duration} onChange={(e) => setDuration(e.target.value)}/>
                    </FormControl>
                </ModalBody>
                <ModalFooter justifyContent="space-between">
                    <Button colorScheme='red' variant="ghost" size='xs' >Delete listing</Button>
                    <Flex>
                        <Button colorScheme='blue' mr={3} onClick={handleShareProfile} isLoading={loading}>Save</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
     );
}
 
export default ListProfileModal;
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Stack,
    Textarea,
    useColorModeValue
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { updateUser } from "../../../../firestore/utils";
import { useUserAuth } from '../../../../context/UserAuthContext';

const MoreInfoModal = ({isOpen, onClose, getUserData, userData, loading, setLoading}) => {

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
    const { user } = useUserAuth();

    const [about, setAbout] = useState("");
    const [studies, setStudies] = useState("");
    const [interests, setInterests] = useState();

    const resetStates = useCallback( () => {
        if (userData) {
            setAbout(userData.about);
            setStudies(userData.studies);
            setInterests(userData.interests);
        }
    }, [userData]);

    useEffect( () => {
        resetStates();
    }, [resetStates]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        const userData = {
            about: about,
            studies: studies,
            interests: interests
          };
        try {
            await updateUser(userData, user.uid);
            onClose();
            console.log("Profile updated.");
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
                        <FormLabel>About</FormLabel>
                        <Textarea placeholder='Tell us about you' value={about} onChange={(e) => setAbout(e.target.value)}/>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel htmlFor='studies'>Studies</FormLabel>
                        <Select id="studies" placeholder='Select option' value={studies} onChange={(e) => setStudies(e.target.value)}>
                            <option value='ENSA'>ENSA</option>
                            <option value='EST'>EST</option>
                            <option value='FPS'>FPS</option>
                            <option value='-'>Other</option>
                        </Select>
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
                </ModalBody>
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={handleUpdateProfile} disabled={loading ? true : false}>{loading ? "loading..." : "Save"}</Button>
                <Button onClick={() => {resetStates(); onClose()}}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
     );
}
 
export default MoreInfoModal;
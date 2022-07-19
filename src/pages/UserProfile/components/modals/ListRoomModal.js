import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
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
    NumberInputStepper,
    SimpleGrid,
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";
import { useState } from "react";
import { useUserAuth } from "../../../../context/UserAuthContext";
import { createRoom } from "../../../../firestore/utils";

const ListRoomModal = ({isOpen, onClose, getUserData, loading, setLoading}) => {
    
    const { user } = useUserAuth();

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
    const [roomImage, setRoomImage] = useState("");

    const handleEquipmentsChange = (position) => {
        const updatedEquipments = equipments.map((item, index) =>
            index === position ? !item : item
        );
        setEquipments(updatedEquipments);
    }

    const handleCreateRoom = async () => {
        setLoading(true);
        const roomData = {
            location: location,
            rent: rent,
            currentRoomates: currentRoomates,
            totalRoomates: totalRoomates,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            privateRoom: privateRoom,
            furnishedRoom: furnishedRoom,
            equipments: equipments,
            aboutProperty: aboutProperty,
            image: roomImage,
            userID: user.uid
          };
        console.log(roomData);
        try {
            await createRoom(roomData);
            console.log("Room added.")
            onClose();
            getUserData();
        } catch (err) {
            console.log(err.message);
        }
      };


    return ( 
        <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create listing</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel htmlFor='location'>Location</FormLabel>
                        <Input id='location' placeholder='Type to search...' value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </FormControl>
                    <FormControl mt={4}>
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
                    <FormControl mt={4}>
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
                    <SimpleGrid columns={2} spacing={5} mt={4}>
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
                    <FormControl mt={4}>
                        <FormLabel>Equipments</FormLabel>
                        <Stack>
                            <Checkbox value="refrigerator" isChecked={equipments[0]} onChange={() => handleEquipmentsChange(0)}>Refrigerator</Checkbox>
                            <Checkbox value="oven" isChecked={equipments[1]} onChange={() => handleEquipmentsChange(1)}>Oven</Checkbox>
                            <Checkbox value="internet" isChecked={equipments[2]} onChange={() => handleEquipmentsChange(2)}>Internet</Checkbox>
                        </Stack>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel htmlFor='about-property'>About the property</FormLabel>
                        <Textarea id='about-property' value={aboutProperty} onChange={(e) => setAboutProperty(e.target.value)}></Textarea>
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel htmlFor='roomImage'>Image</FormLabel>
                        <Input id='roomImage' placeholder='Image url...' value={roomImage} onChange={(e) => setRoomImage(e.target.value)}/>
                    </FormControl>
                </ModalBody>
                <ModalFooter justifyContent="space-between">
                    <Button colorScheme='red' variant="ghost" size='xs'>Delete listing</Button>
                    <Flex>
                        <Button colorScheme='blue' mr={3} onClick={handleCreateRoom} isLoading={loading}>Save</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
     );
}
 
export default ListRoomModal;
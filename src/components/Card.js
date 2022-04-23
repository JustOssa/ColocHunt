import { Badge, Box, Flex, Image, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react';
import { FaBed, FaBath, FaUserFriends, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import RandomImages from '../utils/randomImage';
import fallbackImg from "../Assets/images/fallback/fallback1.jpg"

const Card = ({ roomID, title, image, rent, bedrooms, bathrooms, currentRoomates, totalRoomates }) => {
    const cardColor = useColorModeValue('white', '#1f2633');
    const badgeColor = useColorModeValue('gray.300', 'gray.600');

    //const fallbackImg = RandomImages[Math.floor(Math.random() * RandomImages.length)];

    return (
        <Box bgColor={cardColor} rounded='md' shadow="lg" overflow="hidden">
            <LinkBox>
                <Box
                    h="150px"
                    position="relative"
                    overflow="hidden">
                    <Image
                        w="100%" h="100%"
                        objectFit="cover"
                        src={image}
                        fallbackSrc={fallbackImg}
                    />
                </Box>
            
                <Flex px="4" py="2" align="center" justify="space-between" w="100%">
                    <LinkOverlay as={Link} to={"/rooms/" + roomID} display="contents">
                        <Flex align="center" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
                            <FaMapMarkerAlt size={14} overflow="unset"/>
                            <Text mx={2} fontWeight="semibold" fontSize='sm' isTruncated>
                                {title}
                            </Text>
                        </Flex>
                    </LinkOverlay>
                    <Badge backgroundColor={badgeColor}>{rent || "-"}$</Badge>
                </Flex>
                <Flex px="4" pb="2" align="center" justify="space-between" w="100%">
                    <Flex align="center" gap={2} title="Roommates">
                        <FaUserFriends/>
                        <Text>{(currentRoomates|| "-") + "/" + (totalRoomates ||"-")}</Text>
                    </Flex>
                    <Flex align="center" gap={2} title="Bedrooms">
                        <FaBed/>
                        <Text>{bedrooms || "-"}</Text>
                    </Flex>
                    <Flex align="center" gap={2} title="Bathrooms">
                        <FaBath/>
                        <Text>{bathrooms || "-"}</Text>
                    </Flex>
                </Flex>
            </LinkBox>
        </Box>
    );
}

export default Card;
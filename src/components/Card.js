import { Badge, Box, Flex, Img, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MotionImg = motion(Img)

const Card = ({ title, post }) => {
    const cardColor = useColorModeValue('white', 'gray.700');
    const badgeColor = useColorModeValue('gray.300', 'gray.600');


    return (
        <Box bgColor={cardColor} rounded='md' shadow="lg" overflow="hidden">
            <Box
                onClick=""
                cursor="pointer"
                h="150px"
                position="relative"
                overflow="hidden">
                <MotionImg
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    w="100%" h="100%"
                    objectFit="cover"
                    src={post}
                />
            </Box>
            <LinkBox>
                <Flex px="4" py="2" align="center" justify="space-between" w="100%">
                    <LinkOverlay as={Link} to="a">
                        <Text fontWeight="semibold" fontSize='sm'>
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Badge backgroundColor={badgeColor}>200$</Badge>
                </Flex>
                <Flex px="4" pb="2" align="center" justify="space-between" w="100%">
                    <Flex align="center" gap={2} title="Roommates">
                        <FaUserFriends/>
                        <Text>2/3</Text>
                    </Flex>
                    <Flex align="center" gap={2} title="Bedrooms">
                        <FaBed/>
                        <Text>2</Text>
                    </Flex>
                    <Flex align="center" gap={2} title="Bathrooms">
                        <FaBath/>
                        <Text>1</Text>
                    </Flex>
                </Flex>
            </LinkBox>
        </Box>
    );
}

export default Card;
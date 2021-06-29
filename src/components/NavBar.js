import React from 'react';
import {
    Flex,
    Spacer,
    VStack,
    Heading,
    Text,
    IconButton,
    useMediaQuery,
    HStack,
    Link,
    LinkBox,
    LinkOverlay,
	useDisclosure,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react';
import {
	BiMenu
} from 'react-icons/bi';

export default function NavBar() {
    const [smallScreen] = useMediaQuery("(max-width: 800px)");
    document.title = "Fusion: A Discord Alternaive";
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = React.useRef()
    return (
        <Flex flexDir="column" height="100px" maxHeight="100px">
            <Spacer />
            <Flex flexDir="row" padding={3}>
				<LinkBox>
					<VStack>
						<LinkOverlay href="/">
							<Heading>Fusion</Heading>
							<Text>A Discord Alternative</Text>
						</LinkOverlay>
					</VStack>
				</LinkBox>
				<Spacer />
				{!smallScreen ? <>
                    <HStack>
                        <Link href="/">Home</Link>
                    </HStack>
                </> : <>
					<IconButton 
						icon={<BiMenu />} 
						ref={btnRef} 
						onClick={onOpen}
						variant="outline"
						borderRadius="md"
						colorScheme="white"
					/>
					<Drawer
						isOpen={isOpen}
						placement="top"
						onClose={onClose}
						finalFocusRef={btnRef}
					>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerCloseButton />
							<DrawerHeader>Menu</DrawerHeader>
							<DrawerBody>
								<Link href="/">Home</Link>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
                </>}
            </Flex>
            <Spacer />
        </Flex>
    )
}

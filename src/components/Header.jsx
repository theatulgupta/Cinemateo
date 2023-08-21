import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerHeader,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                zIndex={'overlay'}
                pos={ 'fixed' }
                top={ 4 }
                left={ 4 }
                colorScheme='purple'
                padding={ 0 }
                w={ 10 }
                h={ 10 }
                borderRadius={ 'full' }
                onClick={ onOpen }
            >
                <BiMenuAltLeft size={ '20' } />
            </Button>

            <Drawer isOpen={ isOpen } placement='left' onClose={ onClose }>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        CINEMATEO
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems={ 'flex-start' }>
                            <Button onClick={ onClose } colorScheme='purple' variant={ 'ghost' }>
                                <Link to={ '/' } >Home</Link>
                            </Button>
                            <Button onClick={ onClose } colorScheme='purple' variant={ 'ghost' }>
                                <Link to={ '/videos' } >Videos</Link>
                            </Button>
                            <Button onClick={ onClose } colorScheme='purple' variant={ 'ghost' }>
                                <Link to={ '/videos?category=free' } >Free Videos</Link>
                            </Button>
                            <Button onClick={ onClose } colorScheme='purple' variant={ 'ghost' }>
                                <Link to={ '/upload' } >Upload Video</Link>
                            </Button>
                        </VStack>
                        <HStack width={ 'full' } justifyContent={ 'space-evenly' } pos={ 'absolute' } left={ 0 } bottom={ 10 }>
                            <Button onClick={ onClose } colorScheme='purple' variant={ 'solid' }>
                                <Link to={ '/login' } >Log In</Link>
                            </Button>
                            <Button onClick={ onClose } colorScheme='purple' variant={ 'outline' }>
                                <Link to={ '/signup' } >Sign Up</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header
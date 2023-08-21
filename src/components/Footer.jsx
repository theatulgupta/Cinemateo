import { Box, Button, HStack, Heading, Input, Stack, VStack, Text, Link} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend, AiFillYoutube, AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


const Footer = () => {
    return (
        <Box
            bgColor={ 'blackAlpha.900' }
            minH={ '40' }
            p={ '16' }
            color={ 'white' }>
            <Stack direction={ [ 'column', 'row' ] }>
                <VStack alignItems={ 'stretch' }
                    w={ 'full' } px={ '4' }>
                    <Heading textAlign={['center','left']} size={ 'md' } textTransform={ 'uppercase' }>
                        Subscribe to our Newsletter
                    </Heading>
                    <HStack borderBottom={ '2px solid white' } py={ '2' }>
                        <Input placeholder='Enter your email here'
                            border={ 'none' }
                            borderRadius='none'
                            outline={ 'none' }
                            focusBorderColor='none' />
                        <Button p={ '0' }
                            color={ 'purple' }
                            variant={ 'ghost' }
                            borderRadius={ '0 20px 20px 0' }>
                            <AiOutlineSend size={ 20 } />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={ 'full' }
                    borderLeft={ [ 'none', '1px' ] }
                    borderRight={ [ 'none', '1px' ] }
                >
                    <Heading textAlign={ 'center' }
                        textTransform={ 'uppercase' }>CINEMATEO
                    </Heading>
                    <Text>© All rights reserved</Text>
                </VStack>
                <VStack w={ 'full' }>
                    <Heading size={ 'md' } textTransform={ 'uppercase' }>
                        Social Media
                    </Heading>
                    <HStack verticalAlign={ 'centre' } py={ 1 }>
                        <Link href='https://www.youtube.com/c/AGKMindsYT' >
                            <Button variant={ 'link' } colorScheme={ 'white' } px={ 1 }>
                                <AiFillYoutube size={ 40 } />
                            </Button>
                        </Link>
                        <Link href='https://www.instagram.com/_theatulgupta/' >
                            <Button variant={ 'link' } colorScheme={ 'white' } px={ 1 }>
                                <AiFillInstagram size={ 40 } />
                            </Button>
                        </Link>
                        <Link href='https://www.github.com/theatulgupta/' >
                            <Button variant={ 'link' } colorScheme={ 'white' } px={ 1 }>
                                <AiFillGithub size={ 40 } />
                            </Button>
                        </Link>
                        <Link href='https://www.linkedin.com/in/theatulgupta/' >
                            <Button variant={ 'link' } colorScheme={ 'white' } px={ 1 }>
                                <AiFillLinkedin size={ 40 } />
                            </Button>
                        </Link>
                    </HStack>
                </VStack>
            </Stack>

        </Box >
    )
}


export default Footer
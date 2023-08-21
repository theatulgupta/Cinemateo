import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'
import Footer from '../components/Footer';

const headingOptions = {
    pos: "absolute",
    left: '50%',
    top: '50%',
    transform: 'translate( -50%,-50%)',
    textTransform: 'uppercase',
    padding: '4',
    size: '4xl'
}

const Home = () => {
    return <Box>
        <MyCarousel />
        <Container maxW={ [ 'full', 'container.xl' ] } minH={ '100vh' } p={ 16 }>
            <Heading
                textTransform={ 'uppercase' }
                py={ '2' }
                w={ 'fit-content' }
                borderBottom={ '2px solid' }
                m={ 'auto' }>
                Services
            </Heading>
            <Stack
                h={ 'full' }
                px={ [ '0', '4' ] }
                py={ 4 }
                alignItems={ 'center' }
                direction={ [ 'column', 'row' ] }
            >
                <Image src={ img5 } filter={ 'hue-rotate(-130deg)' } h={ [ '40', 400 ] } />
                <Text
                    letterSpacing={ 'widest' }
                    lineHeight={ '190%' }
                    p={ [ '0', '16' ] }
                    textAlign={ 'left' }
                >
                    "Welcome to <b>Cinemateo.com</b> – Your Premier Online Destination for a Cinematic Adventure!<br /><br />

                    🎬 Explore a World of Films: Immerse yourself in a curated collection of movies that span across genres, eras, and cultures. From beloved classics to the latest blockbusters, <b>Cinemateo.com</b> has a movie for every taste.<br />

                    🎉 Exclusive Features: Get access to exclusive features that enhance your movie-watching experience. From personalized recommendations to thematic playlists, <b>Cinemateo.com</b> is dedicated to making your journey through cinema unforgettable.<br /><br />

                    Join us in celebrating the art of storytelling through film. Subscribe today and embark on an extraordinary cinematic journey with <b>Cinemateo.com</b> – Where Every Frame Tells a Story."
                </Text>
            </Stack>
        </Container>
        <Footer />
    </Box>
}

const MyCarousel = () => {
    return <Carousel
        autoPlay
        infiniteLoop
        interval={ 2000 }
        showStatus={ false }
        showThumbs={ false }
        showArrows={ false }
    >
        <Box w={ 'full' }
            h={ '100vh' }>
            <Image src={ img1 } h={ 'full' } w={ 'full' } objectFit={ 'cover' } />
            <Heading bgColor={ 'blackAlpha.600' } color={ 'white' } { ...headingOptions }>
                Watch the future
            </Heading>
        </Box>
        <Box w={ 'full' }
            h={ '100vh' }>
            <Image src={ img2 } h={ 'full' } w={ 'full' } objectFit={ 'cover' } />
            <Heading bgColor={ 'whiteAlpha.900' } color={ 'black' } { ...headingOptions }>
                Future is Gaming
            </Heading>
        </Box>
        <Box w={ 'full' }
            h={ '100vh' }>
            <Image src={ img3 } h={ 'full' } w={ 'full' } objectFit={ 'cover' } />
            <Heading bgColor={ 'whiteAlpha.600' } color={ 'black' } { ...headingOptions }>
                Gaming on Console
            </Heading>
        </Box>
        <Box w={ 'full' }
            h={ '100vh' }>
            <Image src={ img4 } h={ 'full' } w={ 'full' } objectFit={ 'cover' } />
            <Heading bgColor={ 'whiteAlpha.600' } color={ 'black' } { ...headingOptions }>
                Thug Gaming
            </Heading>
        </Box>
    </Carousel>
}

export default Home
import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Video = () => {

    const videosArr = [
        'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
        'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
        'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
        'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
        'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
        'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
        'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    ];

    const [ videoSrc, setVideoSrc ] = useState( videosArr[ 0 ] );

    return <Stack h={ 'fit-content' } direction={ [ 'column', 'row' ] }>
        <VStack w={ 'full' } >
            <video
                controls
                controlsList='nodownload'
                src={ videoSrc }
                style={ {
                    width: '100%',
                } }></video>
            <VStack w={ 'full' } p={ 8 } alignItems={ 'flex-start' } >
                <Heading>
                    Introduction to Cinemateo
                </Heading>
                <Text fontSize={ 'xl' }>📽️ Cinemateo.com offers a seamless and user-friendly experience. Our sleek design and intuitive interface make navigating through our extensive library a breeze. Discover curated playlists, hidden gems, and thought-provoking documentaries that are sure to captivate your imagination.

                    🍿 But Cinemateo.com is more than just a repository of movies – it's a community of like-minded cinephiles who share a passion for storytelling and visual art. Engage in discussions, share your reviews, and connect with fellow movie lovers from around the globe.</Text>
            </VStack>
        </VStack>
        <VStack
            w={ [ 'full', 'xl' ] }
            alignItems={ 'stretch' }
            p="8"
            spacing={ '8' }
            overflowY={ 'auto' }
        >
            { videosArr.map( ( item, index ) => (
                <Button
                    variant={ 'outline' }
                    colorScheme={ 'purple' }
                    onClick={ () => setVideoSrc( item ) }
                >
                    Lecture { index + 1 }
                </Button>
            ) ) }
        </VStack>
    </Stack>
};

export default Video
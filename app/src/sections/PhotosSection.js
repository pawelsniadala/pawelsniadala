import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Container from '../components/Container';

import { photos } from '../data/photos';

const PhotosSection = () => {

    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }

    // const photosCopy = [ ...photos.section ];

    // shuffleArray(photosCopy);

    return (
        <Box
            component='section'
            className='photos-section'
            // sx={{ backgroundColor: '#f5f5f5'}}
        >
            <Container>
                <Box className='secion-header'>
                    Tytuł sekcji
                </Box>
                <Box className='section-body'>
                    {/* <Box className='card-wrapper team section'>

                    </Box> */}
                    <Box className='photos-wrapper'>
                        <ul>
                            {photos.section.map((item, index) => (
                                <li>
                                    <LazyLoadImage
                                        className={`lazy-load-image ${item.designation}`}
                                        height={'100%'}
                                        width={'100%'}
                                        src={item.srcThumbnail}
                                        alt={item.designation}
                                        effect='blur'
                                        // onClick={() => openLightbox(index)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default PhotosSection;

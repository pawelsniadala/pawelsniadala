
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';


import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';




import Container from '../components/Container';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../components/Page';
import PhotosAllPartial from './partials/photos/PhotosAllPartial';
// import PricesDermatologyPartials from './partials/prices/PricesDermatologyPartials';
// import PricesAestheticMedicinePartials from './partials/prices/PricesAestheticMedicinePartials';
// import PricesCosmetologyPartials from './partials/prices/PricesCosmetologyPartials';
// import PricesPhysioterapyPartials from './partials/prices/PricesPhysioterapyPartials';
// import PricesCosmeticSurgeryPartials from './partials/prices/PricesCosmeticSurgeryPartials';
// import PricesAllergologyPartials from './partials/prices/PricesAllergologyPartials';
// import PricesUsgPartials from './partials/prices/PricesUsgPartials';
// import PricesEndocrinologyPartials from './partials/prices/PricesEndocrinologyPartials';
// import PricesGynecologyPartials from './partials/prices/PricesGynecologyPartials';
// import PricesOrthopedicsPartials from './partials/prices/PricesOrthopedicsPartials';
// import PricesVascularSurgeryPartials from './partials/prices/PricesVascularSurgeryPartials';
// import PricesClinicalDietitianPartials from './partials/prices/PricesClinicalDietitianPartials';
// import PricesRheumatologyPartial from './partials/prices/PricesRheumatologyPartial';



import { photos } from '../data/photos';

const PhotosView = () => {
    const location = useLocation();

    const [ pricesTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case '/photos':
                    return (
                        'photos-all'
                    );
                case '/prices/aesthetic-medicine':
                    return (
                        'prices-aesthetic-medicine'
                    );
                case '/prices/cosmetology':
                    return (
                        'prices-cosmetology'
                    );
                case '/prices/physioterapy':
                    return (
                        'prices-physioterapy'
                    );
                case '/prices/cosmetic-surgery':
                    return (
                        'prices-cosmetic-surgery'
                    );
                case '/prices/allergology':
                    return (
                        'prices-allergology'
                    );
                case '/prices/usg':
                    return (
                        'prices-usg'
                    );
                case '/prices/endocrinology':
                    return (
                        'prices-endocrinology'
                    );
                case '/prices/gynecology':
                    return (
                        'prices-gynecology'
                    );
                case '/prices/orthopedics':
                    return (
                        'prices-orthopedics'
                    );
                case '/prices/vascular-surgery':
                    return (
                        'prices-vascular-surgery'
                    );
                case '/prices/clinical-dietitian':
                    return (
                        'prices-clinical-dietitian'
                    );
                case '/prices/rheumatology':
                    return (
                        'prices-rheumatology'
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (photoTab) => {
        switch(photoTab) {
            case 'photos-all':
                return (
                    // <PricesDermatologyPartials />
                    <PhotosAllPartial />
                    // <div></div>
                );
            case 'prices-aesthetic-medicine':
                return (
                    // <PricesAestheticMedicinePartials />
                    <div></div>

                );
            case 'prices-cosmetology':
                return (
                    // <PricesCosmetologyPartials />
                    <div></div>

                );
            case 'prices-physioterapy':
                return (
                    // <PricesPhysioterapyPartials />
                    <div></div>

                );
            case 'prices-cosmetic-surgery':
                return (
                    // <PricesCosmeticSurgeryPartials />
                    <div></div>

                );
            case 'prices-allergology':
                return (
                    // <PricesAllergologyPartials />
                    <div></div>

                );
            case 'prices-usg':
                return (
                    // <PricesUsgPartials />
                    <div></div>

                );
            case 'prices-endocrinology':
                return (
                    // <PricesEndocrinologyPartials />
                    <div></div>

                );
            case 'prices-gynecology':
                return (
                    // <PricesGynecologyPartials />
                    <div></div>

                );
            case 'prices-orthopedics':
                return (
                    // <PricesOrthopedicsPartials />
                    <div></div>

                );
            case 'prices-vascular-surgery':
                return (
                    // <PricesVascularSurgeryPartials />
                    <div></div>

                );
            case 'prices-clinical-dietitian':
                return (
                    // <PricesClinicalDietitianPartials />
                    <div></div>

                );
            case 'prices-rheumatology':
                return (
                    // <PricesRheumatologyPartial />
                    <div></div>

                );
            default:
        }
    }

    // function getWindowDimensions() {
    //     const { innerWidth: width } = window;
    //     return { width };
    // }

    // function useWindowDimensions() {
    //     const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

    //     useEffect(() => {
    //         function handleResize() {
    //             setWindowDimensions(getWindowDimensions());
    //         }

    //         window.addEventListener('resize', handleResize);
    //         return () => window.removeEventListener('resize', handleResize);
    //     }, []);

    //     return windowDimensions;
    // }

    // const { width } = useWindowDimensions();

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box
                    className='view-header prices'
                    // sx={{ backgroundColor: '#f6f8fa' }}
                >

                {photos.view.map((item, index) => (
                    <Box className='card-introduction'>
                        {item.srcOriginal ? (
                            <Box
                                className='card-background'
                                component={LazyLoadImage}
                                height={1}
                                width={1}
                                src={item.srcOriginal}
                                alt={item.title}
                                effect='blur'
                            />
                        ) : (
                            <Box className='card-background-color' />
                        )}
                        <Container>
                            <Box
                                className='card-image'
                                component={LazyLoadImage}
                                src={item.srcOriginal2}
                                alt={item.title}
                                effect='blur'
                            />
                        </Container>

                        {/* <CardContent className='card-content'>
                            <Typography className='card-name'>
                                {item.name}
                            </Typography>
                            <Typography className='card-speciality'>
                                {item.speciality}
                            </Typography>
                            {item.summary && (
                                <Typography className='card-text'>
                                    {item.summary}
                                </Typography>
                            )}
                        </CardContent> */}
                    </Box>
                ))}


                    <Box className='header-wrapper'>
                        {/* <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                                <Typography color='text.primary'>
                                    Cennik
                                </Typography>
                            </Breadcrumbs>
                        </Box> */}
                        <Box className='heading-wrapper'>


                            <Box className='prices-navigation' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Container className=''>
                                    {/* <Typography variant='h4' className='heading-view' sx={{ marginBottom: '25px', paddingTop: '25px' }}>
                                        Galeria
                                    </Typography> */}
                                    <Tabs
                                        value={location.pathname}
                                        variant='scrollable'
                                        scrollButtons='auto'
                                        aria-label='scrollable auto tabs example'
                                        // TabIndicatorProps={{ style: { background: 'transparent' }}}
                                        sx={{
                                            [`& .${tabsClasses.scrollButtons}`]: {
                                                '&.Mui-disabled': { opacity: 0.3 },
                                            },
                                        }}
                                    >
                                        <Tab
                                            label='Wszystkie'
                                            component={Link}
                                            to={`/photos`}
                                            value={`/photos`}
                                            // selected={pricesTab === 'prices-clinical-dietitian'}
                                            onClick={() => setTab('photos-all')}
                                        />
                                        <Tab
                                            label='Medycyna estetyczna'
                                            component={Link}
                                            to={`/prices/aesthetic-medicine`}
                                            value={`/prices/aesthetic-medicine`}
                                            onClick={() => setTab('prices-aesthetic-medicine')}
                                        />
                                        <Tab
                                            label='Kosmetologia'
                                            component={Link}
                                            to={`/prices/cosmetology`}
                                            value={`/prices/cosmetology`}
                                            onClick={() => setTab('prices-cosmetology')}
                                        />
                                        <Tab
                                            label='Fizjoterapia'
                                            component={Link}
                                            to={`/prices/physioterapy`}
                                            value={`/prices/physioterapy`}
                                            onClick={() => setTab('prices-physioterapy')}
                                        />
                                        <Tab
                                            label='Chirurgia plastyczna'
                                            component={Link}
                                            to={`/prices/cosmetic-surgery`}
                                            value={`/prices/cosmetic-surgery`}
                                            onClick={() => setTab('prices-cosmetic-surgery')}
                                        />
                                        <Tab
                                            label='Alergologia'
                                            component={Link}
                                            to={`/prices/allergology`}
                                            value={`/prices/allergology`}
                                            onClick={() => setTab('prices-allergology')}
                                        />
                                        <Tab
                                            label='USG'
                                            component={Link}
                                            to={`/prices/usg`}
                                            value={`/prices/usg`}
                                            onClick={() => setTab('prices-usg')}
                                        />
                                    </Tabs>
                                </Container>
                            </Box>
                        </Box>
                    </Box>
                </Box>



                <Box className='view-body'>
                    <Box className='body-wrapper prices'>

                        <Box className='prices-tabels'>
                            <Box
                                className='tab-pane fade show active'
                                id={`pills-${pricesTab}`}
                                role='tabpanel'
                                aria-labelledby={`pills-${pricesTab}-tab`}
                            >
                                {renderTabContent(pricesTab)}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(PhotosView);

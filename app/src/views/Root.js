import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
// import ScrollArrow from '../components/ScrollArrow';
import HeaderSection from '../sections/HeaderSection';
// import FooterSection from '../sections/FooterSection';
import HomeView from './HomeView';
import PhotosView from './PhotosView';
// import ContactView from './ContactView';
// import Modal from '../components/Modal';
// import Toast from '../components/Toast';

const Root = () => (
    <MainTemplate>
        <Router>
            <HeaderSection />
            <main>
                <Routes>
                    <Route exact path='/' element={<HomeView main />} />
                    <Route exact path='/pawelsniadala/' element={<HomeView main />} />
                    <Route path='/prices' element={<PhotosView title='Cennik' />}>
                    </Route>
                </Routes>
            </main>
            {/* <Modal />
            <Toast />
            <FooterSection />
            <ScrollArrow /> */}
        </Router>
    </MainTemplate>
);

export default Root;

import { Container } from '@mui/material';
import {Route, Routes} from 'react-router-dom'
import AboutUs from '../components/AboutUs/AboutUs';
import Home from '../components/Home/Home';
import ItemDetails from '../features/Items/components/ItemDetails/ItemDetails';
import Items from '../features/Items/Items';

const AppRoutes = () => {
    return (
        <Container className="main-container">
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path="/" element={<Items />}/>
                    <Route path="/items/:title" element={<ItemDetails />}/>
                    <Route path="/about-us" element={<AboutUs />}/>
                </Route>
            </Routes>
        </Container>





    )
}

export default AppRoutes;
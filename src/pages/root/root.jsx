import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';
import Navigation from '../../components/header/Navigation';

const root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default root;
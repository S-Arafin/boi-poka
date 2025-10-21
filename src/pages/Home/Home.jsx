import React from 'react';
import Banner from '../../components/banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div className=''>
            <Banner></Banner>
            <div>
                <Books data={data}></Books>

            </div>

        </div>
    );
};

export default Home;
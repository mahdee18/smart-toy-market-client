import React from 'react';
import GallerySection from '../GallerySection/GallerySection';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import useTitle from '../../../Hook/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Category></Category>
        </div>
    );
};

export default Home;
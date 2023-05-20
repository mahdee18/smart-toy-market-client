import React from 'react';
import GallerySection from '../GallerySection/GallerySection';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Category></Category>
        </div>
    );
};

export default Home;
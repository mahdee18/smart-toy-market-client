import React from 'react';
import GallerySection from '../GallerySection/GallerySection';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import useTitle from '../../../Hook/useTitle';
import Testimonials from '../Testimonials/Testimonials';
import NewsletterSubscription from '../../Discount/Discount';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Category></Category>
            <Testimonials></Testimonials>
            <NewsletterSubscription></NewsletterSubscription>
        </div>
    );
};

export default Home;
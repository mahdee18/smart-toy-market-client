import React from 'react';
import GallerySection from '../GallerySection/GallerySection';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import useTitle from '../../../Hook/useTitle';
import Testimonials from '../Testimonials/Testimonials';
import NewsletterSubscription from '../../Discount/Discount';
import CallToAction from '../CallToAction/CallToAction';
import ParralaxBanner from '../ParralaxBanner/ParralaxBanner';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Category></Category>
            <ParralaxBanner></ParralaxBanner>
            <Testimonials></Testimonials>
            <NewsletterSubscription></NewsletterSubscription>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;
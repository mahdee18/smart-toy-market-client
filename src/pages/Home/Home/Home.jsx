import React from 'react';
import GallerySection from '../GallerySection/GallerySection';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
import useTitle from '../../../Hook/useTitle';
import Testimonials from '../Testimonials/Testimonials';
import NewsletterSubscription from '../../Discount/Discount';
import CallToAction from '../CallToAction/CallToAction';
import ParralaxBanner from '../ParralaxBanner/ParralaxBanner';
import Facilities from '../Facilities/Facilities';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <Facilities></Facilities>
            <Category></Category>
            <ParralaxBanner></ParralaxBanner>
            <Testimonials></Testimonials>
            <NewsletterSubscription></NewsletterSubscription>
            <NewsLetter></NewsLetter>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;
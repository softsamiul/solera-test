import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import FriendlyFaces from '../FriendlyFaces/FriendlyFaces';
import GisftsExplore from '../GiftsExplore/GisftsExplore';
import HeroSection from '../HeroSection/HeroSection';
import SeasonalKits from '../SeasonalKits/SeasonalKits';
import TopSection from '../TopSection/TopSection';
import TreaseredToken from '../TreaseredToken/TreaseredToken';

const Home = () => {
    return (
        <div>
            <TopSection></TopSection>
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <FriendlyFaces></FriendlyFaces>
            <TreaseredToken></TreaseredToken>
            <SeasonalKits></SeasonalKits>
            <GisftsExplore></GisftsExplore>
            <Footer></Footer>

        </div>
    );
};

export default Home;
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import FriendlyFaces from '../FriendlyFaces/FriendlyFaces';
import GisftsExplore from '../GiftsExplore/GisftsExplore';
import HeroSection from '../HeroSection/HeroSection';
import SeasonalKits from '../SeasonalKits/SeasonalKits';
import Testimonial from '../Testimonial/Testimonial';
import TopSection from '../TopSection/TopSection';
import TreaseredToken from '../TreaseredToken/TreaseredToken';
import FriendlyFaces_indispensables_data from '../../../Datas/FriendlyFaces_indispensables_data';
import Indispensables from '../Indispensables/Indispensables';

const Home = () => {
    const friendlyFacesData = FriendlyFaces_indispensables_data;

    console.log(friendlyFacesData[0].friendlyFacesData)

    return (
        <div>
            <TopSection></TopSection>
            <Navigation></Navigation>
            <HeroSection></HeroSection>

            {<FriendlyFaces data={friendlyFacesData[0].friendlyFacesData}></FriendlyFaces>}

            <TreaseredToken></TreaseredToken>
            {<Indispensables data={friendlyFacesData[1].IndispensablesData}></Indispensables>}
            <SeasonalKits></SeasonalKits>
            <GisftsExplore></GisftsExplore>
            <Testimonial></Testimonial>
            <Footer></Footer>

        </div>
    );
};

export default Home;
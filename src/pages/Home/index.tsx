import Pricing from "../Price";
import Footer from "./Footer";
import HeroSection1 from "./HeroSection";
import LandingSection from "./LandingSection";

const Home = () => {
	return (
		<div>
			<LandingSection />
			<HeroSection1 />
			<Pricing />
			<Footer/>
		</div>
	);
};

export default Home;

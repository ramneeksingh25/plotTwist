import { useEffect, useState } from "react";
import image1 from  '../../assets/1submit.webp'
import image3 from  '../../assets/2bring.webp'
import image2 from  '../../assets/3vote.webp'
import { Link } from "react-router-dom";

const LandingSection = () => (
	<header className="w-full h-[90vh] flex flex-col justify-center items-center bg-gradient-to-t text-center from-gray-300 dark:from-gray-800 to-zinc-400 dark:to-black select-none px-[10vw] ">
		<h1 className="text-4xl md:text-6xl font-bold mb-4">
			Revolutionize Storytelling: Vote on Movie Ideas!
		</h1>
		<p className="text-lg md:text-xl text-gray-900 dark:text-gray-400 mb-8">
			Where Your Ideas Get a Spotlight and Your Votes Bring Them to Life.
		</p>
		<div className="flex justify-center space-x-6 font-bold">
			<Link to="/exploreideas">
				<button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-red-600 dark:bg-red-600 border border-red-600 px-3 text-white  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:dark:bg-gray-900 before:bg-gray-300 before:transition-all before:duration-500 hover:text-red-600 hover:shadow-red-600 hover:before:left-0 hover:before:w-full">
					<span className="relative z-10">Explore Ideas</span>
				</button>
			</Link>
			<button className="text-red hover:before:bg-red-600 relative h-[50px] w-40 overflow-hidden bg-gray-300 dark:bg-transparent border  border-red-600 px-3 text-red-600  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-500 hover:text-white hover:shadow-red-600 hover:before:left-0 hover:before:w-full">
				<span className="relative z-10">Create Ideas</span>
			</button>
		</div>
	</header>
);

const HeroSection2 = () => <>Wow</>;
const HeroSection1 = () => {
	// State to track the currently hovered point
	const [currentImage, setCurrentImage] = useState(1);
	// Define the images to be shown
	const images = [
		image1,
		image2,
		image3,
	]
	

	return (
		<div className="hero-section flex items-center justify-between px-[10vw] py-32 bg-white dark:bg-black">
			{/* Left Side - Image */}
			<div className="w-1/2 rounded-3xl overflow-hidden">
				<img
					src={images[currentImage-1]}
					alt={`Hero ${currentImage}`}
					className="w-full h-auto"
				/>
			</div>
			<div className="points-container w-1/2 flex flex-col space-y-6 p-8 items-end">
				{[
					{
						point: "Submit Your Idea",
						desc: "Share your creative movie concepts with the community",
						num: 1,
					},
					{
						point: "Vote on Ideas",
						desc: "See the most popular movie ideas from around the world",
						num: 2,
					},
					{
						point: "Bring Ideas to Life",
						desc: "Cast your vote on the top voted ideas and see them get produced into films",
						num: 3,
					},
				].map((obj) => {
					const { point, desc, num } = obj;
					return (
						<>
							<div
								key={point}
								className={` w-full hover:cursor-pointer pl-2 border-l-2 ${
									currentImage == num
										? "border-black dark:border-white"
										: "border-white dark:border-black"
								}`}
								onMouseEnter={() => setCurrentImage(num)}>
								<h3 className="text-xl font-bold">{point}</h3>
								<p className="text-gray-500 dark:text-gray-400">{desc}</p>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

const Home = () => {
	return (
		<div>
			<LandingSection />
			<HeroSection1 />
			<HeroSection2 />
		</div>
	);
};

export default Home;

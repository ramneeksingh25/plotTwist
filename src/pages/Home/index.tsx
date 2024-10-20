import { useState } from "react";

const LandingSection = () => (
	<header className="w-full h-[90vh] flex flex-col justify-center items-center bg-gradient-to-t text-center from-gray-300 dark:from-gray-900 to-zinc-700 dark:to-black select-none px-[10vw] ">
		<h1 className="text-4xl md:text-6xl font-bold mb-4">
			Revolutionize Storytelling: Vote on Movie Ideas!
		</h1>
		<p className="text-lg md:text-xl text-gray-900 dark:text-gray-400 mb-8">
			Where Your Ideas Get a Spotlight and Your Votes Bring Them to Life.
		</p>
		<div className="flex justify-center space-x-6 font-bold">
			<button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden bg-white dark:bg-transparent border   border-red-600 px-3 text-red-600  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-500 hover:text-white hover:shadow-red-600 hover:before:left-0 hover:before:w-full">
				<span className="relative z-10">Explore Ideas</span>
			</button>
			<button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-red-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white dark:before:border-zinc-900 before:duration-100 before:ease-linear hover:bg-black hover:text-red-600 hover:shadow-red-600 hover:before:border-[25px]">
				<span className="relative z-10">Submit Your Idea</span>
			</button>
		</div>
	</header>
);

const HeroSection2 = () => <>Wow</>;
const HeroSection1 = () => {
	// State to track the currently hovered point
	const [currentImage, setCurrentImage] = useState(1);

	// Define the images to be shown
	const images = {
		image1: "path-to-image1.jpg",
		image2: "path-to-image2.jpg",
		image3: "path-to-image3.jpg",
	};

	return (
		<div className="hero-section flex items-center justify-between px-[10vw] py-32 bg-gray-400 dark:bg-gray-800">
			{/* Left Side - Image */}
			<div className="image-container w-1/2">
				<img
					src={images.image1}
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

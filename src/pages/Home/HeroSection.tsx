import { useState } from "react";
import image1 from  '../../assets/1submit.webp'
import image3 from  '../../assets/2bring.webp'
import image2 from  '../../assets/3vote.webp'

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

export default HeroSection1;
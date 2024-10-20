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

export default LandingSection
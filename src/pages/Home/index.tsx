const LandingSection = () => (
	<header className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-t text-center from-gray-300 dark:from-gray-800 to-zinc-700 select-none">
		<h1 className="text-4xl md:text-6xl font-bold mb-4">
			Revolutionize Storytelling: Vote on Movie Ideas Powered by Blockchain!
		</h1>
		<p className="text-lg md:text-xl text-gray-900 dark:text-gray-400 mb-8">
			Where Your Ideas Get a Spotlight and Your Votes Bring Them to Life.
		</p>
		<div className="flex justify-center space-x-6">
			<button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-600 px-3 text-red-600  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-500 hover:text-white -500 hover:shadow-red-600 hover:before:left-0 hover:before:w-full">
				<span className="relative z-10">Explore Ideas</span>
			</button>
			<button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-red-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white dark:before:border-zinc-900 before:duration-100 before:ease-linear hover:bg-black hover:text-red-600 hover:shadow-red-600 hover:before:border-[25px]">
				<span className="relative z-10">Submit Your Idea</span>
			</button>
		</div>
	</header>
);

const Home = () => {
	return (
		<div className="">
			<LandingSection />
      </div>
	);
};

export default Home;

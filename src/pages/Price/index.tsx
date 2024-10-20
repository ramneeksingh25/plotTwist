import React from "react";

const PricingPage: React.FC = () => {
	return (
		<div className="h-screen w-full flex flex-col items-center justify-center ">
			<div className="text-center mb-12">
				<h1 className="text-5xl font-bold text-gray-800 dark:text-white">Choose Your Plan</h1>
				<p className="text-gray-600 dark:text-gray-400 mt-4">Find the plan that’s right for you.</p>
			</div>
			
			<div className="grid grid-cols-3 gap-8">
				{/* Silver Plan */}
				<div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
					<h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-slate-400 inline-block mb-4">Silver</h2>
					<p className="text-gray-600 mb-4">Basic features for small-scale users.</p>
					<p className="text-4xl font-bold text-gray-800 mb-6 text-center">0.003 ETH</p>
					<ul className="text-gray-600 mb-6">
						<li>✔ 1 Upvote/Downvote per idea</li>
						<li>✔ Access to basic content</li>
						<li>✔ Email support</li>
					</ul>
					<button className="w-full py-2 px-4 bg-gradient-to-tr from-slate-500 to-slate-300 hover:from-slate-400 hover:to-slate-100 text-white rounded-lg ">
						Select Plan
					</button>
				</div>

				{/* Gold Plan */}
				<div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
					<h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-400 inline-block mb-4">Gold</h2>
					<p className="text-gray-600 mb-4">Advanced features for growing teams.</p>
					<p className="text-4xl font-bold text-gray-800 mb-6 text-center">0.007 ETH</p>
					<ul className="text-gray-600 mb-6">
						<li>✔ 2 Upvotes/Downvotes per idea</li>
						<li>✔ Priority support</li>
						<li>✔ Access to exclusive content</li>
					</ul>
					<button className="w-full py-2 px-4 bg-gradient-to-tr from-orange-300 to-yellow-500 hover:from-orange-400 text-white rounded-lg hover:to-yellow-400">
						Select Plan
					</button>
				</div>

				{/* Diamond Plan */}
				<div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8">
					<h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-400 inline-block mb-4">Diamond</h2>
					<p className="text-gray-600 mb-4 ">All-inclusive plan with premium features.</p>
					<p className="text-4xl font-bold text-gray-800 mb-6 text-center">0.01 ETH</p>
					<ul className="text-gray-600 mb-6">
						<li>✔ 3 Upvotes/Downvotes per idea</li>
						<li>✔ Dedicated support</li>
						<li>✔ Early access to new features</li>
					</ul>
					<button className="w-full py-2 px-4 bg-gradient-to-tr from-teal-300 to-teal-500 hover:from-teal-400 text-white rounded-lg hover:to-teal-400">
						Select Plan
					</button>
				</div>
			</div>
		</div>
	);
};

export default PricingPage;

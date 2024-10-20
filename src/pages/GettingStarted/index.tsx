import { useState } from "react";
import ConnectBtn from "../../components/ConnectBtn";

const GettingStarted = () => {
	const [formData, setFormData] = useState({
		walletId: "",
		username: "",
		fullName: "",
		dateOfBirth: "",
		location: "",
		interests: "",
		agreeTerms: false,
		subscribeNewsletter: false,
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]:
				name === "agreeTerms" || name === "subscribeNewsletter"
					? checked
					: value,
		}));
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		// Handle signup logic here
		console.log("User Data:", formData);
	};
	return (
		<div className="fixed w-full h-full flex flex-col items-center justify-center pt-20 px-20">
			<div className="shadow-2xl bg-gray-300 dark:bg-gray-900 rounded-lg grid grid-cols-2 gap-5 overflow-hidden">
				<div className="p-5">
					<h2 className="text-2xl font-bold text-center mb-6 font-">
						Signup for{" "}
						<span className="font-PW text-red-400 dark:text-red-600 duration-150">
							PlotTwist
						</span>
					</h2>
					<form
						onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-2">
								Unique Wallet ID:
							</label>
							<ConnectBtn connectMessage="Connect to buy Subscription" />
						</div>

						<div className="mb-4">
							<label className="block text-sm font-medium mb-2">
								Username:
							</label>
							<input
								type="text"
								name="username"
								value={formData.username}
								onChange={handleChange}
								required
								className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
							/>
						</div>
						<div className="mb-4">
							<label className="block text-sm font-medium mb-2">
								Full Name:
							</label>
							<input
								type="text"
								name="fullName"
								value={formData.fullName}
								onChange={handleChange}
								className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-sm font-medium mb-2">
								Date of Birth:
							</label>
							<input
								type="date"
								name="dateOfBirth"
								value={formData.dateOfBirth}
								onChange={handleChange}
								className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-sm font-medium mb-2">Bio:</label>
							<input
								type="text"
								name="interests"
								value={formData.interests}
								onChange={handleChange}
								className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
							/>
						</div>

						<div className="mb-4">
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									name="agreeTerms"
									checked={formData.agreeTerms}
									onChange={handleChange}
									required
									className="form-checkbox h-4 w-4 text-red-600"
								/>
								<span className="ml-2 text-sm">
									I agree to the terms and conditions
								</span>
							</label>
						</div>

						<div className="mb-4">
							<label className="inline-flex items-center">
								<input
									type="checkbox"
									name="subscribeNewsletter"
									checked={formData.subscribeNewsletter}
									onChange={handleChange}
									className="form-checkbox h-4 w-4 text-red-600"
								/>
								<span className="ml-2 text-sm">Subscribe to newsletter</span>
							</label>
						</div>

						<button
							type="submit"
							className="w-full text-red hover:before:bg-redborder-red-500 relative h-[50px] overflow-hidden border border-red-500 bg-red-500 px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-600 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full ">
							<div className="relative z-10">Register</div>
						</button>
					</form>
				</div>
				<div className="">
					<img
						src="https://miro.medium.com/v2/resize:fit:1200/0*MkUuRYfx9-oHW0qH.jpg"
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default GettingStarted;

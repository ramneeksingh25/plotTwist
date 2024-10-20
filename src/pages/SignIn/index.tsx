import { useState } from "react";
import ConnectBtn from "../../components/ConnectBtn";

const SignIn = () => {
	const [formData, setFormData] = useState({
		walletId: "",
		username: "",
		fullName: "",
		dateOfBirth: "",
		location: "",
		interests: "",
		plan: "Silver", // Default plan
		agreeTerms: false,
		subscribeNewsletter: false,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const target = e.target as HTMLInputElement;
		const { name, value, checked, type } = target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle signup logic here
		console.log("User Data:", formData);
	};

	return (
		<div className="fixed w-full h-full flex flex-col items-center justify-center pt-20 px-4">
			<div className="shadow-2xl bg-gray-300 dark:bg-gray-900 rounded-lg grid grid-cols-2 gap-5 overflow-hidden max-w-4xl w-full">
				<div className="p-5 col-span-2 md:col-span-1 lg:col-span-1">
					<h2 className="text-2xl font-bold text-center mb-6">
						Signup for{" "}
						<span className="font-PW text-red-400 dark:text-red-600 duration-150">
							PlotTwist
						</span>
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">
								Unique Wallet ID:
							</label>
							<ConnectBtn connectMessage="Connect to buy Subscription" />
						</div>

						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">
								Username:
							</label>
							<input
								type="text"
								name="username"
								value={formData.username}
								onChange={handleChange}
								required
								className="w-full p-1 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
							/>
						</div>

						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">
								Full Name:
							</label>
							<input
								type="text"
								name="fullName"
								value={formData.fullName}
								onChange={handleChange}
								className="w-full p-1 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
							/>
						</div>

						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">
								Date of Birth:
							</label>
							<input
								type="date"
								name="dateOfBirth"
								value={formData.dateOfBirth}
								onChange={handleChange}
								className="w-full p-1 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
							/>
						</div>

						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">Bio:</label>
							<input
								type="text"
								name="interests"
								value={formData.interests}
								onChange={handleChange}
								className="w-full p-1 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
							/>
						</div>

						<div className="mb-2">
							<label className="block text-sm font-medium mb-1">
								Select Subscription Plan:
							</label>
							<select
								name="plan"
								value={formData.plan}
								onChange={handleChange}
								className="w-full p-1 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-black">
								<option value="Silver">Silver</option>
								<option value="Gold">Gold</option>
								<option value="Diamond">Diamond</option>
							</select>
						</div>

						<div className="mb-2">
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

						<div className="mb-2">
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
							className="w-full h-[50px] bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-lg">
							Register
						</button>
					</form>
				</div>
				<div className="hidden md:block lg:block">
					<img
						src="https://miro.medium.com/v2/resize:fit:1200/0*MkUuRYfx9-oHW0qH.jpg"
						alt="PlotTwist"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default SignIn;

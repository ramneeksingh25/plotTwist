import React, { useState } from "react";

const CreateNewPage: React.FC = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [votingStartTime, setVotingStartTime] = useState("");
	const [votingEndTime, setVotingEndTime] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (title && description && votingStartTime && votingEndTime) {
			setMessage("Your proposal has been submitted successfully!");
			setTitle("");
			setDescription("");
            setVotingStartTime(Math.floor(Date.now() / 1000).toString()); 
            setVotingEndTime(Math.floor((Date.now() + 2 * 24 * 60 * 60 * 1000) / 1000).toString());
		} else {
			setMessage("Please fill out all required fields.");
		}
	};

	return (
		<div className="p-8 pt-28">
			<h1 className="text-3xl font-bold mb-4">Create a New Proposal</h1>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label htmlFor="title" className="block text-lg font-semibold">
						Title
					</label>
					<input
						type="text"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="w-full p-2 mt-2 border rounded-md text-black"
						required
					/>
				</div>

				<div>
					<label htmlFor="description" className="block text-lg font-semibold">
						Description
					</label>
					<textarea
						id="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="w-full p-2 mt-2 border rounded-md text-black"
						placeholder="Describe your idea"
						rows={5}
						required
					/>
				</div>
				<div>
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
					>
						Submit Idea
					</button>
				</div>
			</form>

			{/* Feedback Message */}
			{message && (
				<p className="mt-6 text-center text-lg font-semibold text-green-600">
					{message}
				</p>
			)}
		</div>
	);
};

export default CreateNewPage;

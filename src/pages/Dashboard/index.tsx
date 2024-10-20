import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { proposalStruct, buyerStruct, voteStruct } from "../../types/Struct";
import Idea from "./Idea";
// Assuming you have defined buyerStruct, voteStruct, proposalStruct, SubTier, ProposalStatus somewhere in your project
const Dashboard: React.FC = () => {
	// Assuming buyerStruct has properties like name, tier, TokenAmount, etc.
	const [buyer, setBuyer] = useState<buyerStruct>({
		name: "John Doe",
		tier: "Diamond",
		TokenAmount: 3,
		walletAddress: "0x123...", // Assuming walletAddress is part of the buyerStruct
	});

	// Assuming proposalStruct includes upvotes, downvotes, status, etc.
	const [submittedIdeas, setSubmittedIdeas] = useState<proposalStruct[]>([
		{
			id: 1,
			title: "Idea One",
			upvotes: 10,
			downvotes: 3,
			status: "Open",
			votesFor: 10,
			votesAgainst: 3,
			proposer: "0x123...",
			executionTime: new Date().toISOString(),
			votingStartTime: new Date().toISOString(),
			votingEndTime: new Date().toISOString(),
			totalVotes: 13,
			description: "This is a proposal for Idea One.",
		},
		{
			id: 2,
			title: "Idea Two",
			upvotes: 7,
			downvotes: 2,
			status: "Closed",
			votesFor: 7,
			votesAgainst: 2,
			proposer: "0x123...",
			executionTime: new Date().toISOString(),
			votingStartTime: new Date().toISOString(),
			votingEndTime: new Date().toISOString(),
			totalVotes: 9,
			description: "This is a proposal for Idea Two.",
		},
	]);

	// voteStruct representing votes from the user
	const [votedIdeas, setVotedIdeas] = useState<voteStruct[]>([
		{
			id: 1,
			title: "Other Idea",
			upvotes: 5,
			downvotes: 2,
			desc: "try1",
			voter: "0x123...",
			numberOfVotes: 3,
		},
		{
			id: 2,
			title: "Other Idea",
			upvotes: 2,
			downvotes: 3,
			desc: "try2",
			voter: "0x123...",
			numberOfVotes: 1,
		},
	]);

	useEffect(() => {
		// Fetching data from backend here
		setBuyer({
			name: "John Doe",
			tier: "Diamond",
			TokenAmount: 3,
			walletAddress: "0x123...", // Assuming walletAddress is part of the buyerStruct
		});
		setSubmittedIdeas([
			{
				id: 1,
				title: "Idea One",
				upvotes: 10,
				downvotes: 3,
				status: "Open",
				votesFor: 10,
				votesAgainst: 3,
				proposer: "0x123...",
				executionTime: new Date().toISOString(),
				votingStartTime: new Date().toISOString(),
				votingEndTime: new Date().toISOString(),
				totalVotes: 13,
				description: "This is a proposal for Idea One.",
			},
			{
				id: 2,
				title: "Idea Two",
				upvotes: 7,
				downvotes: 2,
				status: "Closed",
				votesFor: 7,
				votesAgainst: 2,
				proposer: "0x123...",
				executionTime: new Date().toISOString(),
				votingStartTime: new Date().toISOString(),
				votingEndTime: new Date().toISOString(),
				totalVotes: 9,
				description: "This is a proposal for Idea Two.",
			},
		]);
	}, []);

	return (
		<div className="pt-20 px-16">
			<div className="my-12">
				<h2 className="text-4xl font-bold">Welcome, {buyer.name}!</h2>
				<p className="text-xl">Your tier: {buyer.tier}</p>
				<p className="text-gray-600 dark:text-gray-400">
					Token Balance: {buyer.TokenAmount}
				</p>
				<button className="bg--300 px-2 py-1 rounded-sm before:ease relative h-12 w-40 overflow-hidden border border-red-500 text-red-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-red-500 before:duration-300 hover:text-white hover:shadow-red-500 hover:before:h-64 hover:before:-translate-y-32">
					<span className="relative z-10">Buy New Votes</span>
				</button>
			</div>

			{/* Submitted Ideas Section */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Your Ideas</h2>
				{submittedIdeas.map((idea) => (
					<div
					key={idea.id}
					className="mb-4 p-4 rounded-xl bg-gray-200 dark:bg-gray-600">
					<h3 className="text-xl">{idea.title}</h3>
					<p>Status: {idea.status}</p>
					<p>Upvotes: {idea.upvotes}</p>
					<p>Downvotes: {idea.downvotes}</p>
				</div>
				))}
				<Link to={"/create"}>
					<button className="bg-green-500 text-white px-4 py-2 rounded">
						Create New Idea
					</button>
				</Link>
			</div>

			{/* Voted Ideas Section */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Your Votes</h2>
				{votedIdeas.map((idea) => (
					<Idea idea={idea} votedIdeas={votedIdeas} setVotedIdeas={setVotedIdeas} />
				))}
			</div>

			{/* Top Ideas Section */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Top Ideas</h2>
				<p className="text-gray-600">Explore the most upvoted ideas!</p>
			</div>
		</div>
	);
};

export default Dashboard;

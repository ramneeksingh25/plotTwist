import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProposalStruct, ProposalStatus, VoteStruct } from "../../types/Struct";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { buyerEx, submittedIdeasEx, voteIdeasExample } from "./example";
import Idea from "../../components/Idea";

const Dashboard: React.FC = () => {
	const [buyer, setBuyer] = useState({
		name: "John Doe",
		tier: "Diamond",
		TokenAmount: 3,
		walletAddress: "0x123...",
	});

	// Using ProposalStruct with votesFor and votesAgainst properties
	const [submittedIdeas, setSubmittedIdeas] = useState<ProposalStruct[]>([
		{
			id: 1,
			title: "Idea One",
			status: ProposalStatus.Pending,
			votesFor: 10,
			votesAgainst: 3,
			proposer: "0x123...",
			executionTime: 1722508800,
			votingStartTime: 1722100800,
			votingEndTime: 1722259200,
			totalVotes: 13,
			description: "This is a proposal for Idea One.",
		},
		{
			id: 2,
			title: "Idea Two",
			status: ProposalStatus.Canceled,
			votesFor: 7,
			votesAgainst: 2,
			proposer: "0x123...",
			executionTime: 1723411200,
			votingStartTime: 1723017600,
			votingEndTime: 1723171200,
			totalVotes: 9,
			description: "This is a proposal for Idea Two.",
		},
	]);

	const [votedIdeas, setVotedIdeas] = useState<VoteStruct[]>([]);

	useEffect(() => {
		// Fetching data from backend if needed
		setBuyer(buyerEx);
		setSubmittedIdeas(submittedIdeasEx);
		setVotedIdeas(voteIdeasExample);
	}, []);

	const handleUpvote = (ideaId: number) => {
		const updatedIdeas = submittedIdeas.map((idea) => {
			if (idea.id === ideaId) {
				return {
					...idea,
					votesFor: idea.votesFor + 1,
					totalVotes: idea.totalVotes + 1,
				};
			}
			return idea;
		});
		setSubmittedIdeas(updatedIdeas);
	};

	const handleDownvote = (ideaId: number) => {
		const updatedIdeas = submittedIdeas.map((idea) => {
			if (idea.id === ideaId) {
				return {
					...idea,
					votesAgainst: idea.votesAgainst + 1,
					totalVotes: idea.totalVotes + 1,
				};
			}
			return idea;
		});
		setSubmittedIdeas(updatedIdeas);
	};

	return (
		<div className="pt-20 px-16">
			<div className="my-12">
				<h2 className="text-4xl font-bold">Welcome, {buyer.name}!</h2>
				<p className="text-xl">Your tier: {buyer.tier}</p>
				<p className="text-gray-600 dark:text-gray-400">
					Token Balance: {buyer.TokenAmount}
				</p>
				<button className="bg-red-500 px-4 py-2 text-white rounded hover:bg-red-600 transition-all">
					Buy New Votes
				</button>
			</div>

			{/* Submitted Ideas Section */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Your Ideas</h2>
				{submittedIdeas.map((idea) => (
						<Idea idea={idea} ideas={submittedIdeas} setIdeas={setSubmittedIdeas}/>
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
					<div
						key={idea.voter}
						className="mb-4 p-4 rounded bg-gray-200 dark:bg-gray-600">
						<h3 className="text-xl">Total Votes: {idea.numberOfVotes}</h3>
						<p>Your Vote: {idea.vote}</p>
					</div>
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

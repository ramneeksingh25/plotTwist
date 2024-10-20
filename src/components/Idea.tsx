import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { proposalStruct } from "../types/Struct";

const Idea: React.FC<{
	idea: proposalStruct;
	ideas: proposalStruct[];
	setIdeas: React.Dispatch<React.SetStateAction<proposalStruct[]>>;
}> = ({ idea, ideas, setIdeas }) => {
	const handleUpvote = (ideaId: number) => {
		const updatedIdeas = ideas.map((idea: proposalStruct) =>
			idea.id === ideaId ? { ...idea, upvotes: idea.upvotes + 1 } : idea
		);
		setIdeas(updatedIdeas);
	};

	const handleDownvote = (ideaId: number) => {
		const updatedIdeas = ideas.map((idea: proposalStruct) =>
			idea.id === ideaId ? { ...idea, downvotes: idea.downvotes + 1 } : idea
		);
		setIdeas(updatedIdeas);
	};

	return (
		<div
			key={idea.id}
			className="mb-4 p-4 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-900">
			<h3 className="text-xl font-semibold">{idea.title}</h3>
			<p className="text-sm text-gray-600">Proposer: {idea.proposer}</p>
			<p className="text-sm text-gray-600">Status: {idea.status}</p>
			<p className="text-sm text-gray-600">
				Execution Time: {idea.executionTime}
			</p>
			<p className="text-sm text-gray-600">
				Voting Period: {idea.votingStartTime} - {idea.votingEndTime}
			</p>
			<p className="text-md mt-2">{idea.description}</p>
			<div className="mt-4 flex items-center gap-5">
				{/* Upvote section */}
				<div className="flex items-center">
					<button
						onClick={() => handleUpvote(idea.id)}
						className="flex items-center transition-all duration-150">
						<BiSolidUpvote className="text-3xl text-green-500 hover:bg-green-500 hover:text-white rounded-full p-1" />
					</button>
					<p className="ml-2 text-lg">{idea.upvotes}</p>
				</div>

				{/* Downvote section */}
				<div className="flex items-center">
					<button
						onClick={() => handleDownvote(idea.id)}
						className="flex items-center transition-all duration-150">
						<BiSolidDownvote className="text-3xl text-red-500 hover:bg-red-500 hover:text-white rounded-full p-1" />
					</button>
					<p className="ml-2 text-lg">{idea.downvotes}</p>
				</div>
			</div>

			{/* Vote Summary */}
			<div className="mt-4 text-gray-600">
				<p>Total Votes: {idea.totalVotes}</p>
				<p>Votes For: {idea.votesFor}</p>
				<p>Votes Against: {idea.votesAgainst}</p>
			</div>
		</div>
	);
};

export default Idea;

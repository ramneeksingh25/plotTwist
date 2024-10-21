import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";
import { ProposalStatus, ProposalStruct } from "../types/type.dt";

const Idea: React.FC<{
	idea: ProposalStruct;
	ideas: ProposalStruct[];
	setIdeas: React.Dispatch<React.SetStateAction<ProposalStruct[]>>;
}> = ({ idea, ideas, setIdeas }) => {
	const handleUpvote = (ideaId: number) => {
		const updatedIdeas = ideas.map((idea) => {
			if (idea.id === ideaId) {
				return {
					...idea,
					votesFor: idea.votesFor + 1,
					totalVotes: idea.totalVotes + 1,
				};
			}
			return idea;
		});
		setIdeas(updatedIdeas);
	};

	const handleDownvote = (ideaId: number) => {
		const updatedIdeas = ideas.map((idea) => {
			if (idea.id === ideaId) {
				return {
					...idea,
					votesAgainst: idea.votesAgainst + 1,
					totalVotes: idea.totalVotes + 1,
				};
			}
			return idea;
		});
		setIdeas(updatedIdeas);
	};

	const formatDate = (timestamp: number) => {
		const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
		return date.toLocaleDateString();
	};
	const statusColor = (status: string) => {
		switch (status) {
			case ProposalStatus.Pending:
				return "bg-yellow-500 dark:bg-yellow-800 text-black dark:text-white";
			case ProposalStatus.Added:
				return "bg-blue-500 dark:bg-blue-800 text-white";
			case ProposalStatus.Active:
				return "bg-green-500 dark:bg-green-800 text-white";
			case ProposalStatus.Passed:
				return "bg-gray-500 dark:bg-gray-800 text-white";
			case ProposalStatus.Failed:
				return "bg-red-500 dark:bg-red-800 text-white";
			case ProposalStatus.Canceled:
				return "bg-purple-500 dark:bg-purple-800 text-white";
			default:
				return "bg-white dark:bg-gray-900 text-black dark:text-white";
		}
	};
	return (
		<div
			key={idea.id}
			className={`mb-4 p-4 w-full rounded-lg shadow-lg  ${statusColor(
				idea.status
			)}`}>
			<h3 className="text-xl font-bold">{idea.title}</h3>
			<div className="flex w-full items-center justify-between">
				<p className="text-sm text-red-950 dark:text-gray-300">
					{idea.proposer}
				</p>
				<p className="text-sm text-gray-950 dark:text-gray-300">
					{formatDate(idea.votingStartTime) +
						" - " +
						formatDate(idea.votingEndTime)}
				</p>
			</div>
			<p className="text-md mt-2">{idea.description}</p>
			<div className="mt-4 flex items-center gap-5">
				{/* Upvote section */}
				<div className="flex items-center">
					<button
						onClick={() => handleUpvote(idea.id)}
						className="flex items-center transition-all duration-150">
						<BiSolidUpvote className="text-3xl text-green-500 hover:bg-green-500 hover:text-white rounded-full p-1" />
					</button>
					<p className="ml-2 text-lg">{idea.votesFor}</p>
				</div>

				{/* Downvote section */}
				<div className="flex items-center">
					<button
						onClick={() => handleDownvote(idea.id)}
						className="flex items-center transition-all duration-150">
						<BiSolidDownvote className="text-3xl text-red-500 hover:bg-red-500 hover:text-white rounded-full p-1" />
					</button>
					<p className="ml-2 text-lg">{idea.votesAgainst}</p>
				</div>
			</div>
		</div>
	);
};

export default Idea;

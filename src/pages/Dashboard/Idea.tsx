import { voteStruct } from "../../types/Struct";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";

const Idea: React.FC<{
	idea: voteStruct;
	votedIdeas: voteStruct[];
	setVotedIdeas: React.Dispatch<React.SetStateAction<voteStruct[]>>;
}> = ({ idea, votedIdeas, setVotedIdeas }) => {
	const handleUpvote = (ideaId: number) => {
		const updatedIdeas = votedIdeas.map((idea) => {
			if (idea.id === ideaId) {
				return { ...idea, upvotes: idea.upvotes + 1 };
			}
			return idea;
		});
		setVotedIdeas(updatedIdeas);
	};

	const handleDownvote = (ideaId: number) => {
		const updatedIdeas = votedIdeas.map((idea) => {
			if (idea.id === ideaId) {
				return { ...idea, downvotes: idea.downvotes + 1 };
			}
			return idea;
		});
		setVotedIdeas(updatedIdeas);
	};
	return (
		<div
			key={idea.id}
			className="mb-4 p-4 rounded bg-gray-200 dark:bg-gray-600">
			<h3 className="text-xl">{idea.title}</h3>
			<div className="flex gap-3">
				<div className="flex items-center">
					<button
						onClick={() => handleUpvote(idea.id)}
						className="mr-1 flex items-center">
						<BiSolidUpvote className="p-1 text-3xl rounded-full text-green-500 hover:bg-green-500 hover:text-white transition-all duration-150" />
					</button>
					<p>{idea.upvotes}</p>
				</div>
				<div className="flex items-center">
					<button
						onClick={() => handleDownvote(idea.id)}
						className="mr-1 flex items-center">
						<BiSolidDownvote className="p-1 text-3xl rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all duration-150" />
					</button>
					<p>{idea.downvotes}</p>
				</div>
			</div>
		</div>
	);
};

export default Idea;

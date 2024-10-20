import React, { useState } from "react";
import { proposalStruct } from "../../types/Struct";
import Idea from "../../components/Idea";

const ExploreIdeas: React.FC = () => {
	// Sample ideas based on the proposalStruct
	const [ideas, setIdeas] = useState<proposalStruct[]>([
		{
			id: 1,
			title: "Idea One",
			upvotes: 10,
			downvotes: 3,
			status: "Pending",
			votesFor: 12,
			votesAgainst: 4,
			proposer: "John Doe",
			executionTime: "2024-10-25",
			votingStartTime: "2024-10-20",
			votingEndTime: "2024-10-24",
			totalVotes: 16,
			description: "A proposal to improve the user interface.",
		},
		{
			id: 2,
			title: "Idea Two",
			upvotes: 7,
			downvotes: 2,
			status: "Active",
			votesFor: 9,
			votesAgainst: 3,
			proposer: "Jane Smith",
			executionTime: "2024-11-10",
			votingStartTime: "2024-11-05",
			votingEndTime: "2024-11-09",
			totalVotes: 12,
			description: "A suggestion to add new features to the app.",
		},
	]);

	// Handle upvoting logic
	
	return (
		<div className="pt-20 px-16">
			<h1 className="text-4xl font-bold mb-8">Explore Ideas</h1>
			{ideas.map((idea) => (
                <Idea idea={idea} ideas={ideas} setIdeas={setIdeas}/>
			))}
		</div>
	);
};

export default ExploreIdeas;

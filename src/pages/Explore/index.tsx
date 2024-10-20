import React, { useState } from "react";
import { ProposalStruct } from "../../types/Struct";
import Idea from "../../components/Idea";
import { movieProposals } from "./example";

const ExploreIdeas: React.FC = () => {
	const [ideas, setIdeas] = useState<ProposalStruct[]>(movieProposals);

	
	return (
		<div className={`pt-32 px-16`}>
			<h1 className="text-4xl font-bold mb-8">Explore Ideas</h1>
			<div className="grid grid-cols-3 gap-3 overflow-y-scroll h-[70vh] p-10 scroll-smooth">
				{ideas.map((idea) => (
					<Idea
						idea={idea}
						ideas={ideas}
						setIdeas={setIdeas}
					/>
				))}
			</div>
		</div>
	);
};

export default ExploreIdeas;

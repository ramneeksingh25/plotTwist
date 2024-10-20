enum SubTier {
  None = "None",
  Silver = "Silver",
  Gold = "Gold",
  Diamond = "Diamond",
}

enum Vote {
  None = "None",
  Upvote = "upvote",
  Downvote = "downvote",
}

export enum ProposalStatus {
  Pending = "Pending",
  Added = "Added",
  Active = "Active",
  Passed = "Passed",
  Failed = "Failed",
  Canceled = "Canceled",
}


export interface BuyerStruct {
  name: string;
  tier: SubTier;
  endingTime: number; 
  tokenAmount: number; 
}

// Interface for voteStruct
export interface VoteStruct {
  voter: string; 
  vote: Vote;
  numberOfVotes: number;
}


export interface ProposalStruct {
  id: number; 
  proposer: string;
  title: string;
  description: string;
  executionTime: number; 
  votingStartTime: number;
  votingEndTime: number;
  votesFor: number;
  votesAgainst: number;
  totalVotes: number;
  status: ProposalStatus;
}

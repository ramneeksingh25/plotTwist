// Define buyerStruct
type buyerStruct = {
  name: string;
  tier: string;
  TokenAmount: number;
  walletAddress: string;
};

// Define voteStruct
type voteStruct = {
  id: number;
  title: string;
  upvotes: number;
  downvotes: number;
  desc: string;
  voter: string;
  numberOfVotes: number;
};

// Define proposalStruct
type proposalStruct = {
  id: number;
  title: string;
  upvotes: number;
  downvotes: number;
  status: string;
  votesFor: number;
  votesAgainst: number;
  proposer: string;
  executionTime: string;
  votingStartTime: string;
  votingEndTime: string;
  totalVotes: number;
  description: string;
};

export type { buyerStruct, proposalStruct, voteStruct };
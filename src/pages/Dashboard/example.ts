import { ProposalStatus, Vote } from "../../types/type.dt";

const buyerEx = {
    name: "Alice Smith",
    tier: "Gold",
    TokenAmount: 2,
    walletAddress: "0xABC123...",
}
  
// Example for VoteStruct
const voteIdeasExample = [
    {
        voter: "0x1234567890abcdef1234567890abcdef12345678",
        vote: Vote.Upvote, // Upvote
        numberOfVotes: 10, // Number of votes cast
    },
    {
        voter: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
        vote: Vote.Downvote, // Downvote
        numberOfVotes: 21, // Number of votes cast
    },
];

// Example for ProposalStruct
const submittedIdeasEx = [
    {
        id: 1,
        proposer: "0x1234567890abcdef1234567890abcdef12345678",
        title: "A new feature for better user engagement.",
        description: "Implement a gamification system to improve user interaction.",
        executionTime: 1697840000, // Example execution timestamp
        votingStartTime: 1697836400, // Example voting start timestamp
        votingEndTime: 1697843600, // Example voting end timestamp
        votesFor: 10, // Number of upvotes
        votesAgainst: 3, // Number of downvotes
        totalVotes: 13, // Total votes cast
        status: ProposalStatus.Active, // Current status of the proposal
    },
    {
        id: 2,
        proposer: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
        title: "An improved design for the user interface.",
        description: "Redesign the main dashboard to enhance user experience.",
        executionTime: 1697847200, // Example execution timestamp
        votingStartTime: 1697840000, // Example voting start timestamp
        votingEndTime: 1697847200, // Example voting end timestamp
        votesFor: 5, // Number of upvotes
        votesAgainst: 2, // Number of downvotes
        totalVotes: 7, // Total votes cast
        status: ProposalStatus.Pending, // Current status of the proposal
    },
];


export {buyerEx,submittedIdeasEx,voteIdeasExample}
  
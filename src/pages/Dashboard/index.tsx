import React, { useEffect, useState } from "react";
import { BiDownvote, BiSolidDownvote, BiSolidUpvote, BiUpvote } from "react-icons/bi";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
    // Placeholder for fetching user's data
    const [user, setUser] = useState({
        name: "John Doe",
        subscription: "Diamond",
        availableVotes: 3, 
    });

    const [submittedIdeas, setSubmittedIdeas] = useState([
        { id: 1, title: "Idea One", votes: 10, status: "Open" },
        { id: 2, title: "Idea Two", votes: 7, status: "Closed" },
    ]);

    const [votedIdeas, setVotedIdeas] = useState([
        { id: 1, title: "Other Idea", upvotes: 5, downvotes: 2 },
        { id: 2, title: "Other Idea", upvotes: 5, downvotes: 2 },
    ]);

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

    useEffect(() => {
        setVotedIdeas(votedIdeas);
        setSubmittedIdeas(submittedIdeas);
    }, []);

    return (
        <div className="pt-20 px-16">
            <div className="flex justify-between items-center my-8">
                <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
            </div>

            <div className="mb-8">
                <h2 className="text-xl">Subscription: {user.subscription}</h2>
                <p className="text-gray-600 dark:text-gray-400">Available Votes: {user.availableVotes}</p>
        <button className="bg--300 px-2 py-1 rounded-sm before:ease relative h-12 w-40 overflow-hidden border border-yellow-500 text-yellow-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-yellow-500 before:duration-300 hover:text-white hover:shadow-yellow-500 hover:before:h-64 hover:before:-translate-y-32">
        <span className="relative z-10">
          Buy New Votes
        </span>
        </button>
            </div>

            {/* Submitted Ideas Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Ideas</h2>
                {submittedIdeas.map((idea) => (
                    <div
                        key={idea.id}
                        className="mb-4 p-4 rounded-xl bg-gray-200 dark:bg-gray-600 ">
                        <h3 className="text-xl">{idea.title}</h3>
                        <p>Status: {idea.status}</p>
                        <p>Votes: {idea.votes}</p>
                    </div>
                ))}
                <Link to={"/create"}>
                
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Create New Idea
                </button>
                </Link>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Votes</h2>
                {votedIdeas.map((idea) => (
                    <div
                        key={idea.id}
                        className="mb-4 p-4 rounded bg-gray-200 dark:bg-gray-600">
                        <h3 className="text-xl">{idea.title}</h3>
                        <div className="flex items-center">
                            <button onClick={() => handleUpvote(idea.id)} className="mr-2">
                              <BiSolidUpvote className="m-2 p-1 text-3xl rounded-full text-green-500 hover:dark:bg-green-500 hover:text-white hover:bg-gray-300 transition-all duration-150"/>
                            </button>
                            <p>Upvotes: {idea.upvotes}</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => handleDownvote(idea.id)} className="mr-2">
                              <BiSolidDownvote className="m-2 p-1 text-3xl rounded-full text-red-500 hover:dark:bg-red-500 hover:text-white hover:bg-gray-300 transition-all duration-150"/>
                            </button>
                            <p>Downvotes: {idea.downvotes}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Top Ideas</h2>
                <p className="text-gray-600">Explore the most upvoted ideas!</p>
            </div>
        </div>
    );
};

export default Dashboard;

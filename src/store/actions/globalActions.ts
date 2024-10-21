import { PayloadAction } from '@reduxjs/toolkit'
import {VoteStruct, BuyerStruct, ProposalStruct, GlobalState} from "../../types/type.dt"

export const globalActions = {
    setProposals: (state: GlobalState, action: PayloadAction<ProposalStruct[]>) => {
        state.proposals = action.payload
    },
    setUsers: (state: GlobalState, action: PayloadAction<BuyerStruct[]>) => {
        state.users = action.payload
    },
    setVotes: (state: GlobalState, action: PayloadAction<VoteStruct[]>) => {
        state.votes = action.payload
    },
    setProposal: (state: GlobalState, action: PayloadAction<ProposalStruct | null>) => {
        state.proposal = action.payload
    },
    setUser: (state: GlobalState, action: PayloadAction<BuyerStruct | null>) => {
        state.user = action.payload
    },
    setVote: (state: GlobalState, action: PayloadAction<VoteStruct | null>) => {
        state.vote = action.payload
    },
}
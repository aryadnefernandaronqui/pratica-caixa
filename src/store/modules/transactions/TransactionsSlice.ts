import {
    createDraftSafeSelector,
    createEntityAdapter,
    createSelector,
    createSlice,
} from "@reduxjs/toolkit";

import { RootState } from "../..";
import TransactionType from "../../../types/TransactionType";

const adapter = createEntityAdapter<TransactionType>({
    selectId: (item) => item.id,
});

const transactionsSlice = createSlice({
    name: "transactions",
    initialState: adapter.getInitialState(),
    reducers: {
        addTransaction: adapter.addOne,
        editTransaction: adapter.updateOne,
    },
});

export const { selectAll, selectById } = adapter.getSelectors(
    (state: RootState) => state.transactions,
);

export const TransactionsSlice = transactionsSlice.reducer;
export const { addTransaction, editTransaction } = transactionsSlice.actions;

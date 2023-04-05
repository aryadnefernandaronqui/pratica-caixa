import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../..";
import TransactionType from "../../../types/TransactionType";

const adapter = createEntityAdapter<TransactionType>({
    selectId: (item) => item.type,
});

const Slice = createSlice({
    name: "transaction",
    initialState: adapter.getInitialState(),
    reducers: {
        entrada: adapter.addOne,
        saida: adapter.removeOne,
    },
});

export const { selectAll, selectById } = adapter.getSelectors(
    (state: RootState) => state.transaction,
);
export const TransactionsSlice = Slice.reducer;

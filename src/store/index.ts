import { configureStore } from "@reduxjs/toolkit";

import { TransactionsSlice } from "./modules/transactions/TransactionsSlice";

export const store = configureStore({
    reducer: {
        transactions: TransactionsSlice,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

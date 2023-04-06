import { combineReducers } from '@reduxjs/toolkit';

import { TransactionsSlice } from './transactions/TransactionsSlice';

export default combineReducers({
    transactions: TransactionsSlice
});

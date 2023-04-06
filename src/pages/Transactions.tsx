import {
    Box,
    Button,
    Radio,
    FormControlLabel,
    Grid,
    Paper,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTransaction, selectAll } from "../store/modules/transactions/TransactionsSlice";
import TransactionType from "../types/TransactionType";

const alignCenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const Transactions: React.FC = () => {
    const [transactions, setTransactions] = useState<TransactionType>({} as TransactionType);
    const dispatch = useAppDispatch();

    const onSave = (e: FormEvent) => {
        e.preventDefault();

        dispatch(
            addTransaction({ id: Date.now(), value: transactions.value, type: transactions.type }),
        );
    };

    const handleTransactions = (e: ChangeEvent<HTMLInputElement>) => {
        setTransactions((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setTransactions({ ...transactions, type: e.target.value as "Saida" | "Entrada" });
    };
    return (
        <>
            <Grid container sx={{ ...alignCenter, marginTop: "2rem" }}>
                <Paper
                    sx={{
                        minWidth: "300px",
                        padding: "1rem",
                    }}
                >
                    <Box>
                        <Typography variant="h4" align="center">
                            Transação
                        </Typography>
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            marginTop: 2,

                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-age-input"
                            label="Valor"
                            name="value"
                            type="number"
                            // value={profile.age || ""}
                            onChange={handleTransactions}
                        />

                        <RadioGroup
                            name="radio-buttons-group"
                            sx={{ display: "inline" }}
                            onChange={handleSelect}
                            // value={profile.gender || "female"}
                        >
                            <FormControlLabel value="Entrada" control={<Radio />} label="Entrada" />
                            <FormControlLabel value="Saida" control={<Radio />} label="Saida" />
                        </RadioGroup>

                        <Button variant="contained" onClick={onSave}>
                            Cadastrar
                        </Button>
                    </Box>
                </Paper>
            </Grid>
        </>
    );
};

export default Transactions;

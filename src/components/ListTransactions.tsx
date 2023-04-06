import PaidIcon from "@mui/icons-material/Paid";
import { Divider, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

import { useAppSelector } from "../store/hooks";
import { selectAll } from "../store/modules/transactions/TransactionsSlice";

const ListTransactions: React.FC = () => {
    const reduxTransactions = useAppSelector(selectAll);

    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                        <Typography variant="h3" textAlign="center">
                            Entradas
                        </Typography>
                        {reduxTransactions
                            .filter((item) => item.type === "Entrada")
                            .map((item) => {
                                return (
                                    <>
                                        <ListItem key={item.id}>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <PaidIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={`R$ ${item.value}`}
                                                secondary={item.type}
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </>
                                );
                            })}
                    </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
                        <Typography textAlign="center" variant="h3">
                            Saidas
                        </Typography>
                        {reduxTransactions
                            .filter((item) => item.type === "Saida")
                            .map((item) => {
                                return (
                                    <>
                                        <ListItem key={item.id}>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <PaidIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={`R$ ${item.value}`}
                                                secondary={item.type}
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </>
                                );
                            })}
                    </List>
                </Grid>
            </Grid>
        </>
    );
};

export default ListTransactions;

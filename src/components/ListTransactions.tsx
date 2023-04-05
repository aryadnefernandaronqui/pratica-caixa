import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ImageIcon from "@mui/icons-material/Image";
import PaidIcon from "@mui/icons-material/Paid";
import WorkIcon from "@mui/icons-material/Work";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

const ListTransactions: React.FC = () => {
    return (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PaidIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PaidIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>

            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <PaidIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
        </List>
    );
};

export default ListTransactions;

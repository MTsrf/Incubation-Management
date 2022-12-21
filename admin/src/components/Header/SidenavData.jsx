import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";

import DashboardIcon from '@mui/icons-material/Dashboard';
import BookIcon from "@mui/icons-material/Book"
import PostAddIcon from '@mui/icons-material/PostAdd'
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"
import ExitToAppIcon from "@mui/icons-material/ExitToApp"
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";

export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashobard", link: "/", icon: <DashboardIcon /> },
    { label: "Blog Post", link: "/blog", icon: <BookIcon /> },
    { label: "Link 1", link: "/link", icon: <PostAddIcon /> },
    {
      label: "Notification",
      link: "/notification",
      icon: <NotificationsActiveIcon />,
    },
    { label: "Logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];
  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size='small'
          className={classes.navButton}
          onClick={() => handleDrawerClose()}
          key={i}>
          <ListItem
            exact
            component={NavLink}
            to={item.link}
            className={classes.navlinks}
            activeClassName={classes.activeNavlinks}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Drawer,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { hasChildren } from "../../utils";

const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Home",
    to: "/",
    items: [],
  },
  {
    icon: <CategoryIcon />,
    title: "Categories",
    items: [
      {
        title: "Computers & Laptops",
        items: [
          {
            title: "Computers",
            to: "/computers",
          },
          {
            title: "Laptops",
            to: "/laptops",
          },
          {
            title: "Tablets",
            to: "/tablets",
          },
        ],
      },
    ],
  },
  {
    icon: <InfoIcon />,
    title: "About",
  },
];

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({ item }) => {
  return (
    <ListItem button component={Link} to={item.to || "/404"}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const MenuItems = () => {
  return menu.map((item, key) => <MenuItem key={key} item={item} />);
};

const NavBar = () => {
  return (
    <Drawer variant="persistent" anchor="left" open>
      <MenuItems />
    </Drawer>
  );
};
export default NavBar;

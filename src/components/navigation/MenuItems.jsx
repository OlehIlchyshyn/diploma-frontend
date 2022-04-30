import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { hasChildren } from "../../utils";
import { menu } from "./menu";
import { getCategories } from "../../api/catalogApi";

let navBarStateChanger = (doNothing) => {};

const handleLinkClick = () => {
  navBarStateChanger(false);
};

const MenuItem = ({ item, stateChanger }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} stateChanger={stateChanger} />;
};

const SingleLevel = ({ item }) => {
  return (
    <ListItem
      button
      component={Link}
      to={item.to || "/404"}
      onClick={handleLinkClick}
    >
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
      <ListItem button onClick={handleClick} >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit collapsedSize="auto" sx={{marginLeft: "5%"}}>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const MenuItems = ({ stateChanger }) => {
  navBarStateChanger = stateChanger;

  useEffect(() => {
    requestCategories();
  }, []);

  async function requestCategories() {
    getCategories().then((categories) => {
      menu[2]["items"] = categories;
    });
  }

  return menu.map((item, key) => <MenuItem key={key} item={item} />);
};

export default MenuItems;

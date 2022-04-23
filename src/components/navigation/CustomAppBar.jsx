import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "./AppBar";
import SearchBar from "./SearchBar";

const CustomAppBar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" marginRight={"auto"}>
          Сервіс порівняння цін на товари
        </Typography>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

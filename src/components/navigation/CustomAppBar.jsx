import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "./AppBar";

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
        <Typography variant="h6" noWrap component="div" marginX={"auto"}>
          Сервіс порівння цін на товари
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

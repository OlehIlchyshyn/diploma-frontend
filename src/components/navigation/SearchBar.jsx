import { useNavigate, createSearchParams } from "react-router-dom";
import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname, params) =>
    navigate(`${pathname}?${createSearchParams(params)}`);
};

const SearchBar = () => {
  const navigateSearch = useNavigateSearch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event.target.value);
    }
  };

  const handleSearch = (query) => {
    navigateSearch("/search", { q: query });
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Пошук…"
        inputProps={{ "aria-label": "search" }}
        onKeyPress={handleKeyPress}
      />
    </Search>
  );
};

export default SearchBar;

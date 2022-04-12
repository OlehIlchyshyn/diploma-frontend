import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";

// TODO retrieve categories from API
const categories = [
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
];

export const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "Home",
    to: "/",
    items: [],
  },
  {
    icon: <CategoryIcon />,
    title: "Categories",
    items: categories,
  },
  {
    icon: <InfoIcon />,
    title: "About",
  },
];

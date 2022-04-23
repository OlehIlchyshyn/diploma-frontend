import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const categories = [
  {
    title: "Комп'ютери та ноутбуки",
    items: [
      {
        title: "Комп'ютери",
        to: "/computers",
      },
      {
        title: "Ноутбуки",
        to: "/laptops",
      },
      {
        title: "Планшети",
        to: "/tablets",
      },
    ],
  },
];

export const menu = [
  {
    icon: <HomeOutlinedIcon />,
    title: "На головну",
    to: "/",
    items: [],
  },
  {
    icon: <ShoppingBasketOutlinedIcon />,
    title: "Усі товари",
    to: "/products",
  },
  {
    icon: <CategoryIcon />,
    title: "Категорії",
    items: categories,
  },
  {
    icon: <InfoIcon />,
    title: "Про сервіс",
    to: "/about",
  },
];

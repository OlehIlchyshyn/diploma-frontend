import { Box, Typography } from "@mui/material";
import { getHighestPrice, getLowestPrice } from "../../utils";

const ActivePropositionsBox = ({ prices }) => {
  return (
    <Box>
      <Typography>Ціни</Typography>
      <Typography>
        Від {getLowestPrice(prices).amount}грн до{" "}
        {getHighestPrice(prices).amount}грн
      </Typography>
    </Box>
  );
};

export default ActivePropositionsBox;

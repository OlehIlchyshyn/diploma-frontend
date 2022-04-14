import { Box, Link, Avatar, Typography } from "@mui/material";
import React from "react";

const PriceProvider = ({ provider }) => {
  return (
    <Box display="block" maxWidth={80} justifyContent="center">
      <Link href={provider.url} underline="none" target="_blank" rel="noopener">
        <Box display="table-cell">
          <Avatar
            alt={provider.name}
            src={provider.logoUrl}
            variant="rounded"
          />
        </Box>
        <Typography variant="body2" color="black">
          {provider.name}
        </Typography>
      </Link>
    </Box>
  );
};

export default PriceProvider;

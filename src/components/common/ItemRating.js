import React, { useState } from "react";

import { Box, Rating } from "@mui/material";
const ItemRating = ({ rating: rate }) => {
  const [value, setValue] = useState(rate);
  return (
    <Box>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default ItemRating;

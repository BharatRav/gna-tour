import { Box, Checkbox, Typography } from "@mui/material";
import React from "react";

const Filter = ({ title, types }) => {
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      {types.map((item) => {
        return (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography>{item}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};
const CategoryFilters = () => {
  const filtersArray = [
    {
      title: "Category Types",
      types: [
        "Tours",
        "Attractions",
        "Day Trip",
        "Outdoor Activities",
        "Concerts and Shows",
      ],
    },
    {
      title: "Others",
      types: ["Free Cancellation"],
    },
    {
      title: "Price",
      types: ["$0-$500"],
    },
    {
      title: "Duration",
      types: ["up to 1 hour", "1 to 4 hours", "4 hours to 1 day"],
    },
    {
      title: "Languages",
      types: ["English", "Spanish", "Frensh", "Turkish"],
    },
  ];
  return (
    <Box>
      {filtersArray.map((filter, index) => {
        return <Filter title={filter.title} types={filter.types} />;
      })}
    </Box>
  );
};

export default CategoryFilters;

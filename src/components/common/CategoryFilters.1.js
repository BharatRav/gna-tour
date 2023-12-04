import { Box } from "@mui/material";
import React, { useState } from "react";
import { Filter } from "./CategoryFilters";

export const CategoryFilters = () => {
  const [filterationValue, setFilterationValue] = useState({});
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
    {
      title: "Rating",
      types: ["5-star ", "4-star & Above", "3-star & Above", "2-star & Above"],
    },
  ];
  const handleFilter = (title, type, value) => {
    console.log(title, type, value);
    if (filterationValue[title]) {
      console.log("hii");
    } else {
      filterationValue[title] = "added";
      console.log("hello ji npp");
    }
  };
  return (
    <Box>
      {filtersArray.map((filter, index) => {
        return (
          <Filter
            key={index}
            title={filter.title}
            types={filter.types}
            isChecked={false}
            onFilter={handleFilter}
          />
        );
      })}
    </Box>
  );
};

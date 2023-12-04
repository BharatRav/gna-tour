import { Box, Typography } from "@mui/material";
import React from "react";
import AllData from "../../db/db";
import TourItem from "./TourItem";

const CategoryData = ({ onFilter }) => {
  const isViewable = (item) => {
    // if (item.rating <= 2) return true;
    return onFilter(item);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4">3269 properties in Europe</Typography>
      {AllData.map((item, index) => {
        if (!isViewable(item)) {
          return "";
        }
        return <TourItem data={item} key={index} />;
      })}
    </Box>
  );
};

export default CategoryData;

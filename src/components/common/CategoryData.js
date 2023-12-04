import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AllData from "../../db/db";
import TourItem from "./TourItem";

const CategoryData = ({ onFilter }) => {
  const isViewable = (item) => {
    // if (item.rating <= 2) return true;
    return onFilter(item);
  };
  const dataTotal = AllData.filter((item, index) => {
    if (!isViewable(item)) {
      return "";
    }
    return true;
  });
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4">
        {dataTotal.length} properties in Europe
      </Typography>
      {dataTotal.length === 0 && (
        <Typography width={"100%"} textAlign={"center"} variant="h6">
          No Data Found
        </Typography>
      )}
      {dataTotal.map((item, index) => {
        if (!isViewable(item)) {
          return "";
        }
        return <TourItem data={item} key={index} />;
      })}
    </Box>
  );
};

export default CategoryData;

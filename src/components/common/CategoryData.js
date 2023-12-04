import { Box, Typography } from "@mui/material";
import React from "react";
import AllData from "../../db/db";
import TourItem from "./TourItem";

const CategoryData = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4">3269 properties in Europe</Typography>
      {AllData.map(
        (
          {
            img,
            liked,
            duration,
            type,
            title,
            desc,
            safety,
            cancellation,
            rating,
            review,
            price,
            priceFactor,
          },
          index
        ) => {
          return (
            <TourItem
              key={index}
              title={title}
              img={img}
              liked={liked}
              duration={duration}
              type={type}
              desc={desc}
              safety={safety}
              cancellation={cancellation}
              rating={rating}
              review={review}
              price={price}
              priceFactor={priceFactor}
            />
          );
        }
      )}
    </Box>
  );
};

export default CategoryData;

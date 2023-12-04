import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const Featured = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Box
        sx={{
          display: { md: "flex" },
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "500px",
            position: "relative",
            display: "flex",
            alignItems: "center",

            justifyContent: "center",
          }}
        >
          <img
            src="https://www.tourism-of-india.com/images/home/goa-package.jpg?481x328"
            alt=""
            fill
            sx={{ objectFit: "cover" }}
            width={{ xs: "100%", md: "auto" }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "40px" }}>
            This website is the official source for the updates from the GNA
            Tour and Travels team. Anything important,
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "20px", fontWeight: "300" }}
          >
            Get ready to fall in love with the USA's most popular travel
            destinations. Get inspired with our list of the best places to
            travel to in USA. Travel Information. US Road Trip. Official GNA
            Travel Site. Visiting USA.
          </Typography>
          <Button variant="contained" onClick={() => navigate("/categories")}>
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Featured;

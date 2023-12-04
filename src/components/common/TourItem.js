import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const TourItem = ({
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
}) => {
  return (
    <Box
      sx={{
        display: { md: "flex", gap: "10px" },
        boxShadow: 2,
        padding: "15px",
      }}
    >
      <Box>
        <img
          width={"400px"}
          alt="tour"
          src={img}
          style={{ borderRadius: "8px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <Typography variant="body1">
            {duration} - {type}
          </Typography>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{desc}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">{safety}</Typography>
          <Typography variant="body1" sx={{ color: "green" }}>
            {cancellation}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Box>
          {/* {rating} */}
          <Typography
            variant="body1"
            sx={{ textAlign: "end" }}
          >{`${review} reviews`}</Typography>
        </Box>
        <Box sx={{ textAlign: "end" }}>
          from <br />
          <Typography variant="h6" sx={{ textAlign: "end" }}>
            {`${price} `}
          </Typography>
          {priceFactor}
        </Box>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "primary.buttonBackground",
            color: "primary.buttonColor",
          }}
          endIcon={<ArrowOutward />}
        >
          view Details
        </Button>
      </Box>
    </Box>
  );
};

export default TourItem;

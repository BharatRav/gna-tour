import { Box, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../assets/hero.jpg";

import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <Box
      sx={{
        display: {
          md: "flex",
          justifyContent: "center",
          backgroundImage: `url('${heroImage}')`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "48px", md: "80px" },
              textAlign: "center",
              color: "primary.main",
            }}
          >
            Travel,
            <br /> Enjoy and live a new full life
          </Typography>
        </Box>
        <Box>
          <GetStarted />
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <img src={heroImage} alt="hero" width={"100%"} />
      </Box>
    </Box>
  );
};

export default Hero;

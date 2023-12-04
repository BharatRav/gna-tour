import { Box } from "@mui/material";
import React from "react";
import Featured from "../components/common/Featured";
import GetStarted from "../components/common/GetStarted";
import Hero from "../components/common/Hero";
const HomePage = () => {
  return (
    <Box sx={{ marginTop: "5rem", marginX: "auto", color: "text.primary" }}>
      <Box sx={{ width: "100vw" }}>
        <Hero />
        <Featured />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <GetStarted />
      </Box>
    </Box>
  );
};

export default HomePage;

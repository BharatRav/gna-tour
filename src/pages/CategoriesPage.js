import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import CategoryHeader from "../components/common/CategoryHeader";
import CategoryFilters from "../components/common/CategoryFilters";
import CategoryData from "../components/common/CategoryData";
import Notify from "../components/common/Notify";

const CategoriesPage = () => {
  return (
    <Box sx={{ marginTop: "5rem", marginX: "auto", color: "text.primary" }}>
      <Box>
        <Typography
          variant="h4"
          marginBottom={"5px"}
          textAlign={"center"}
          fontWeight={500}
        >
          Tours in London
        </Typography>
      </Box>
      <CategoryHeader />
      <Box>
        <Paper
          sx={{
            marginTop: "15px",
            padding: { md: "30px" },
            display: { md: "flex", gap: "5px" },
          }}
        >
          <Box maxWidth={"20vw"}>
            <CategoryFilters />
          </Box>
          <Box>
            <CategoryData />
          </Box>
        </Paper>
      </Box>
      <Box>
        <Notify />
      </Box>
    </Box>
  );
};

export default CategoriesPage;

import { ArrowRightAltTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      endIcon={<ArrowRightAltTwoTone />}
      onClick={() => navigate("/categories")}
      size="large"
    >
      Get Started
    </Button>
  );
};

export default GetStarted;

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";

const Notify = () => {
  return (
    <Box
      sx={{ backgroundColor: "primary.main", color: "primary.contrastText" }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={{ xs: "column", md: "row" }}
        sx={{ height: "max-content" }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={{ xs: "row", md: "row" }}
          sx={{ height: "max-content" }}
          gap={2}
        >
          <MoveToInboxIcon fontSize="large" />
          <Box>
            <Typography variant={"h5"}>
              Your Travel Journey Starts Here
            </Typography>
            <Typography variant="body2">
              Sign up and we'll send the best deals to you
            </Typography>
          </Box>
        </Box>
        <Box>
          <TextField placeholder="Your Email" />
          <Button>Subscribe</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Notify;

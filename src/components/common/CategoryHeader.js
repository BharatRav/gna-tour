import {
  EventAvailable,
  Explore,
  LocationOnOutlined,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
const InputHeader = ({ icon, text }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton>{icon}</IconButton>
      <Typography>{text}</Typography>
    </Box>
  );
};

const CategoryHeader = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
        <Stack
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={{ xs: "column", md: "row" }}
          sx={{ height: "max-content" }}
        >
          <Box
            sx={{
              display: {
                md: "flex",
                justifyContent: "space-between",
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <InputHeader icon={<LocationOnOutlined />} text={"Location"} />
              <TextField
                placeholder="Where are you going?"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <InputHeader
                icon={<EventAvailable />}
                text={"Check in -Check out"}
              />
              <TextField
                type="date"
                placeholder="October 15 - november 12?"
                variant="outlined"
                size="small"
              />
              {/* <TextField
                type="date"
                placeholder="October 15 - november 12?"
                variant="outlined"
                size="small"
              /> */}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <InputHeader icon={<Explore />} text={"Tour Type"} />
              <TextField
                placeholder="2 adults- 1children- 1 room"
                variant="outlined"
                size="small"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "primary.buttonBackground",
                  color: "primary.buttonColor",
                }}
                startIcon={<Search />}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default CategoryHeader;

{
  /* <TextField
placeholder="Where are you going?"
variant="outlined"
size="small"
label={
  <Fragment>
    <InputHeader
      icon={<LocationOnOutlined />}
      text={"Location"}
    />
  </Fragment>
}
InputLabelProps={{ shrink: true }}
/> */
}

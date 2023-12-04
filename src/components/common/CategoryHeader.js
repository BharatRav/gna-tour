import {
  EventAvailable,
  Explore,
  LocationOnOutlined,
  Search,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
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
import React, { useState } from "react";
const InputHeader = ({ icon, text }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton>{icon}</IconButton>
      <Typography>{text}</Typography>
    </Box>
  );
};

const CategoryHeader = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [tourType, setTourType] = useState({ adults: 0, children: 0, room: 0 });
  const [isLoginRequest, setIsLoadingRequest] = useState(false);

  const handleSearch = () => {
    setIsLoadingRequest(true);
    setTimeout(() => {
      setIsLoadingRequest(false);
    }, [3000]);
  };
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
                placeholder="checkIn"
                variant="outlined"
                size="small"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                }}
              />
              {checkIn && (
                <TextField
                  type="date"
                  placeholder="Checkout"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setCheckOut(e.target.value);
                  }}
                />
              )}
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
              <LoadingButton
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "primary.buttonBackground",
                  color: "primary.buttonColor",
                }}
                startIcon={<Search />}
                loading={isLoginRequest}
                onClick={handleSearch}
              >
                Search
              </LoadingButton>
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

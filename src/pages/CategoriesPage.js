import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryHeader from "../components/common/CategoryHeader";
import CategoryFilters from "../components/common/CategoryFilters";
import CategoryData from "../components/common/CategoryData";
import Notify from "../components/common/Notify";

const CategoriesPage = () => {
  const [filterObj, setFilterObj] = useState({});
  const [categoryType, setCategoryType] = useState([]);
  const [others, setOthers] = useState([]);
  const [price, setPrice] = useState([]);
  const [duration, setDuration] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [ratings, setRatings] = useState([]);
  const handleFilterDataVisibility = (item) => {
    // if (firstTime) {
    //   return true;
    // }
    return handleByAllFilter(item);
    // return handleMainFilter(item);
  };
  const handleByAllFilter = (item) => {
    let result = true;
    if (
      categoryType.length === 0 &&
      others.length === 0 &&
      price.length === 0 &&
      duration.length === 0 &&
      languages.length === 0 &&
      ratings.length === 0
    ) {
      return true;
    }

    if (
      categoryType.length !== 0 &&
      !categoryType.includes(item.categoryType)
    ) {
      result = false;
    }
    if (others.length !== 0 && !others.includes(item.others)) {
      result = false;
    }
    if (price.length !== 0 && !price.includes(item.price)) {
      result = false;
    }
    if (duration.length !== 0 && !duration.includes(item.duration)) {
      result = false;
    }
    if (languages.length !== 0 && !languages.includes(item.languages)) {
      result = false;
    }
    if (ratings.length !== 0 && ratings.includes(item.rating)) {
      result = false;
    }
    return result;
  };

  const handleFilterObject = (filter) => {
    setFilterObj({ ...filterObj, ...filter });
  };
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
            <CategoryFilters
              categoryType={categoryType}
              setCategoryType={setCategoryType}
              others={others}
              setOthers={setOthers}
              price={price}
              setPrice={setPrice}
              duration={duration}
              setDuration={setDuration}
              language={languages}
              setLanguage={setLanguages}
              rating={ratings}
              setRating={setRatings}
              onFilter={handleFilterObject}
            />
          </Box>
          <Box>
            <CategoryData onFilter={handleFilterDataVisibility} />
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

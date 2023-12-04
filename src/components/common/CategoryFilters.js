import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const SingleFilter = ({ item, isChecked, onFilter: handleParentFilter }) => {
  const [checkValue, setCheckValue] = useState(isChecked ? true : false);
  const handleCheckboxChange = (e) => {
    setCheckValue(!checkValue);
    handleParentFilter(item, e.target.checked);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        paddingX: "4px",
        "&:hover": {
          backgroundColor: "primary.buttonBackground",
          color: "white",
          borderRadius: "5px",
        },
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={checkValue} onChange={handleCheckboxChange} />
          }
        />
      </FormGroup>
      <Typography>{item}</Typography>
    </Box>
  );
};
const Filter = ({ title, types, onFilter: handleParentFilter }) => {
  const handleFilter = (item, value) => {
    handleParentFilter(title, item, value);
  };
  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      {types.map((item, index) => {
        return <SingleFilter key={index} item={item} onFilter={handleFilter} />;
      })}
    </Box>
  );
};
const CategoryFilters = ({
  onFilter,
  categoryType,
  others,
  price,
  duration,
  language,
  rating,
  setCategoryType,
  setOthers,
  setPrice,
  setDuration,
  setLanguage,
  setRating,
}) => {
  const [filterationValue, setFilterationValue] = useState({});
  const filtersArray = [
    {
      title: "Category Types",
      types: [
        "Tours",
        "Attractions",
        "Day Trip",
        "Outdoor Activities",
        "Concerts and Shows",
      ],
    },
    {
      title: "Others",
      types: ["Free Cancellation"],
    },
    {
      title: "Price",
      types: ["$0-$500"],
    },
    {
      title: "Duration",
      types: ["up to 1 hour", "1 to 4 hours", "4 hours to 1 day"],
    },
    {
      title: "Languages",
      types: ["English", "Spanish", "Frensh", "Turkish"],
    },
    {
      title: "Rating",
      types: ["5-star ", "4-star & Above", "3-star & Above", "2-star & Above"],
    },
  ];
  const checkAvailable = (array, item) => {
    return array.find(
      (element) => element.toLowerCase() === item.toLowerCase()
    );
  };
  const handleFilter = (title, type, value) => {
    if (title === filtersArray[0].title) {
      if (checkAvailable(categoryType, type)) {
        setCategoryType((current) =>
          current.filter((cat) => cat.toLowerCase() !== type.toLowerCase())
        );
      } else {
        setCategoryType([...categoryType, type]);
      }
      // category
    } else if (title === filtersArray[1].title) {
      if (checkAvailable(others, type)) {
        setOthers((current) =>
          current.filter((it) => it.toLowerCase() !== type.toLowerCase())
        );
      } else {
        setOthers([...others, type]);
      }
      // others
    } else if (title === filtersArray[2].title) {
      // price
      if (checkAvailable(price, type)) {
        setPrice((current) =>
          current.filter((pri) => pri.toLowerCase() !== type.toLowerCase())
        );
      } else {
        setPrice([...price, type]);
      }
    } else if (title === filtersArray[3].title) {
      if (checkAvailable(duration, type)) {
        setDuration((current) =>
          current.filter((dr) => dr.toLowerCase() !== type.toLowerCase())
        );
      } else {
        setDuration([...duration, type]);
      }
      // duration
      console.log(title);
    } else if (title === filtersArray[4].title) {
      if (checkAvailable(language, type)) {
        setLanguage((current) =>
          current.filter(
            (language) => language.toLowerCase() !== type.toLowerCase()
          )
        );
      } else {
        setLanguage([...language, type]);
      }
      // languages
    } else if (title === filtersArray[5].title) {
      if (checkAvailable(rating, type)) {
        setRating((current) =>
          current.filter(
            (rating) => rating.toLowerCase() !== type.toLowerCase()
          )
        );
      } else {
        setRating([...rating, type]);
      }
      // ratings
    }
  };
  return (
    <Box>
      {filtersArray.map((filter, index) => {
        return (
          <Filter
            key={index}
            title={filter.title}
            types={filter.types}
            isChecked={false}
            onFilter={handleFilter}
          />
        );
      })}
    </Box>
  );
};

export default CategoryFilters;

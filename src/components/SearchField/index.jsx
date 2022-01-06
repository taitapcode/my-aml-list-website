import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchSelector } from "reducers/filter";
import { searchChange } from "actions/filter";
import TextField from "@mui/material/TextField";

const SearchField = ({ fullWidth = false }) => {
  const searchFilterState = useSelector(searchSelector);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(searchChange(value));
  };

  return (
    <TextField
      type="search"
      size="small"
      variant="outlined"
      placeholder="Search..."
      defaultValue={searchFilterState}
      fullWidth={fullWidth}
      onChange={handleChange}
      sx={!fullWidth && { width: "20rem" }}
    />
  );
};

export default SearchField;

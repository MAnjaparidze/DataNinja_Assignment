import React from "react";

import TextField from "@mui/material/TextField";

export default function Index({ onChange, label, name, type, errorMessage, autoFocus }) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      name={name}
      type={type}
      variant="outlined"
      error={errorMessage ? true : false}
      helperText={errorMessage}
      onChange={onChange}
      margin="normal"
      autoFocus={autoFocus}
    />
  );
}

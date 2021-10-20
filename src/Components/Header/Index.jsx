import React from "react";

import { Box, Link, Button } from "@mui/material";
import BiotechSharpIcon from "@mui/icons-material/BiotechSharp";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function Index() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "60px",
        // backgroundColor: "#4a148c",
        color: "#4a148c",
        boxShadow: 3,
      }}
    >
      <Link to="#">
        <BiotechSharpIcon
          color="primary"
          sx={{ ml: 2, fontSize: "50px", cursor: "pointer" }}
        />
      </Link>
      <Button
        variant="outlined"
        sx={{
          mr: 2,
          fontWeight: "bold",
        }}
      >
        <span style={{ marginRight: "10px" }}>Sign Out</span>
        <ExitToAppIcon />
      </Button>
    </Box>
  );
}

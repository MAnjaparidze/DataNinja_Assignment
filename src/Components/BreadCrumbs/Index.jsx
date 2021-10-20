import React from "react";

import { Breadcrumbs, Link, Typography } from "@material-ui/core";

export default function Index() {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ ml: 2, mt: 2, mb: 2 }}>
      <Link underline="hover" color="inherit" href="#" aria-disabled={true}>
        Home
      </Link>
      <Typography color="text.secondary">User Tests Page</Typography>
    </Breadcrumbs>
  );
}

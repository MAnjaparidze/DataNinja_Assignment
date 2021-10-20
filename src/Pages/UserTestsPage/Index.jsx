import React, { Component, useState } from "react";

// Material Components
import {
  Container,
  Box,
  Button,
  Breadcrumbs,
  Typography,
  Link,
} from "@mui/material";

//#region Material Icons
import AddIcon from "@mui/icons-material/Add";
//#endregion

//#region Components
import Header from "../../Components/Header/Index";
import BreadCrumbs from "../../Components/BreadCrumbs/Index";
import AddTestForm from "../../Components/AddTestForm/Index";
import TestCard from "../../Components/TestCard/Index";
//#endregion

//#region Methods
import { handleGetCreatedTests } from "../../API/testsAPI";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogOpen: false,
    };

    this.toggleDialogOpen = this.toggleDialogOpen.bind(this);
  }

  componentDidMount() {
    this.props.getUser();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      try {
        let response = await handleGetCreatedTests(this.props.user.id).then(
          (res) => {
            return res.data;
          }
        );
        console.log(response);
        this.props.setTests(response);
      } catch (err) {
        console.log(err);
      }
    }
  }

  toggleDialogOpen() {
    this.setState({ isDialogOpen: !this.state.isDialogOpen });
  }

  render() {
    const { tests } = this.props;
    return (
      <Container maxWidth="100vw" sx={{ p: "0px !important" }}>
        <Header />

        <Breadcrumbs aria-label="breadcrumb" sx={{ ml: 2, mt: 2, mb: 2 }}>
          <Link underline="hover" color="inherit" href="#" aria-disabled={true}>
            Home
          </Link>
          <Typography color="text.secondary">User Tests Page</Typography>
        </Breadcrumbs>

        <Container width="auto" maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h2>List of Your Tests</h2>
            <Button variant="contained" onClick={this.toggleDialogOpen}>
              <AddIcon />
              <span>Add New Test</span>
            </Button>
          </Box>

          <Box sx={{ flexWrap: "wrap" }}>
            {tests?.map((testItem) => {
              return <TestCard key={testItem.id} item={testItem} />;
            })}
          </Box>

          <AddTestForm
            handleClose={this.toggleDialogOpen}
            isOpen={this.state.isDialogOpen}
            authorID={this.props.user?.id}
            getAllTests={this.props.getTests}
          />
        </Container>
      </Container>
    );
  }
}

import React, { Component } from "react";
import { withRouter } from "react-router";

import Input from "../../Components/Input/Index";
import {
  FormGroup,
  Button,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import { handleAuthUser } from "../../API/userAPI";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
      errors: {
        emailError: "",
        passwordError: "",
      },
      isLoading: false,
      isSuccess: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  }

  async handleSubmit() {
    try {
      this.setState({ isLoading: true });
      let response = await handleAuthUser(this.state.user);

      if (response.status === 200) {
        this.setState({ isLoading: false });

        this.setState({ isSuccess: true });
        setTimeout(() => {
          this.props.authUser(response.data);
        }, 1000);
      }
    } catch (err) {
      this.setState({ isLoading: false });

      this.setState({
        errors: {
          ...this.state.errors,
          [err.type]: err.message,
        },
      });
    }
  }

  render() {
    const { emailError, passwordError } = this.state.errors;
    const { isLoading, isSuccess } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          sx={{
            maxWidth: "sm",
            mx: "auto",
            mt: "30px",
            boxShadow: 3,
            borderRadius: 3,
            p: "30px",
            pb: "50px",
          }}
        >
          <h2 style={{ textAlign: "center", color: "#757ce8" }}>Login</h2>
          <Input
            label="Email"
            name="email"
            type="email"
            errorMessage={emailError}
            onChange={this.handleInputChange}
            autoFocus={true}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            errorMessage={passwordError}
            onChange={this.handleInputChange}
          />
          <Box sx={{ display: "flex" }}>
            {isSuccess ? (
              <DoneIcon
                color="success"
                fontSize="large"
                sx={{ mx: "auto", mt: "16px" }}
              />
            ) : (
              <>
                {isLoading ? (
                  <CircularProgress sx={{ mx: "auto", mt: "16px" }} />
                ) : (
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: "20px" }}
                    onClick={this.handleSubmit}
                  >
                    Sign In
                  </Button>
                )}
              </>
            )}
          </Box>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={isSuccess}
            autoHideDuration={2000}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              Credentials are Correct!
            </Alert>
          </Snackbar>
        </FormGroup>
      </form>
    );
  }
}

export default withRouter(Index);

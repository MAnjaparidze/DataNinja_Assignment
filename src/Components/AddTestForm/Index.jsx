import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  TextField,
  Button
} from "@mui/material";

// Methods
import { handleAddTest } from "../../API/testsAPI";

export default function NewTestDialog(props) {
  const { handleClose, isOpen, authorID, setAllTests } = props;

  const [testName, setTestName] = useState("");

  const handleChange = (e) => {
    setTestName(e.target.value);
  };

  const handleTestCreate = async (e) => {
    e.preventDefault();

    let newTestObj = {
      name: testName,
      questionsArr: [],
      author: authorID,
    };

    try {
      let response = await handleAddTest(newTestObj);
      if(response.status === 200) {
        //   Redirect Here
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add New Test</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please write a name for your new test. Mind that new test will be
          created and you will need to add the questions to it.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Test Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleTestCreate}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

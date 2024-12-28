import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function AddForm({ Students, changeStudents }) {
  const [formData, ChangeFormData] = useState({ id: "", name: "", age: "", gender: "" });
  return (
    <Box
      component={Paper}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        marginTop: "3rem",
        marginLeft: "20%",
        width: "35%",
        paddingLeft: "20%",
        paddingBottom: "1rem",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          value={formData.id}
          onChange={(event) => ChangeFormData({ ...formData, id: event.target.value })}
          id="outlined-error-helper-text"
          label="ID"
          defaultValue=""
        />
      </div>
      <div>
        <TextField
          value={formData.name}
          onChange={(event) => ChangeFormData({ ...formData, name: event.target.value })}
          id="filled-error"
          label="Name"
          defaultValue=""
        />
      </div>
      <div>
        <TextField
          value={formData.age}
          onChange={(event) => ChangeFormData({ ...formData, age: event.target.value })}
          id="filled-error-helper-text"
          label="Age"
          defaultValue=""
        />
      </div>
      <div>
        <TextField
          value={formData.gender}
          onChange={(event) => ChangeFormData({ ...formData, gender: event.target.value })}
          id="standard-error"
          label="gender"
          defaultValue=""
        />
      </div>
      <Button
        onClick={() => {
          let [...temp] = Students;
          temp.push(formData);
          changeStudents(temp);
          ChangeFormData({ id: "", name: "", age: "", gender: "" });
        }}
        sx={{ marginLeft: "2.5rem" }}
        variant="contained"
      >
        Add Student
      </Button>
    </Box>
  );
}

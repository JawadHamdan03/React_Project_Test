import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export default function StudentsTable({ Students }) {
  let count = 0;

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, border: 3, backgroundColor: "lightblue" }}
          aria-label="simple table"
        >
          <TableHead sx={{ border: 3, backgroundColor: "darkcyan" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Students.map((student) => {
              return (
                <TableRow key={++count}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>
                    <Button variant="contained" sx={{ backgroundColor: "darkred" }}>
                      {" "}
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

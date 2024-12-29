import StudentsTable from "./Components/Table";
import AddForm from "./Components/CreateStudentForm";
import { data } from "./utils/Data";
import { useState } from "react";
function App() {
  const [Students, changeStudents] = useState(data);
  console.log(changeStudents);
  return (
    <>
      <StudentsTable Students={Students} />
      <AddForm Students={Students} changeStudents={changeStudents} />
    </>
  );
}

export default App;

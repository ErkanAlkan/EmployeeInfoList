import React, { useState } from "react";
import EmployeeInfoForm from "./components/EmployeeInfoForm";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  const initialList = [
    {
      name: "asd",
      age: "123",
      key: "e1",
    },
    { name: "Jane", age: "28", key: "e2" },
  ];
  const [employeeList, setEmployeeList] = useState(initialList);
  const dataHandler = (employeeData) => {
    console.log(employeeData);
    setEmployeeList((prevData) => {
      return [...prevData, employeeData];
    });
  };
  console.log(employeeList);

  return (
    <div>
      <EmployeeInfoForm passData={dataHandler}></EmployeeInfoForm>
      {employeeList && (
        <EmployeeTable employeeList={employeeList}></EmployeeTable>
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import EmployeeInfoForm from "./components/EmployeeInfoForm";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  const [employeeList, setEmployeeList] = useState([]);
  const dataHandler = (employeeData) => {
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

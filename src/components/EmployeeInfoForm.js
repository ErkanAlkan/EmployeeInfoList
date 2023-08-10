import { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";

const EmployeeInfoForm = (props) => {
  const initialList = {
    name: "",
    age: "",
  };
  const [employeeList, setEmployeeList] = useState(initialList);

  const inputNameChangeHandler = (event) => {
    setEmployeeList((prevList) => {
      return {
        ...prevList,
        name: event.target.value,
        key: Math.random(),
      };
    });
  };

  const inputAgeChangeHandler = (event) => {
    if (event.target.value > 0) {
      setEmployeeList((prevList) => {
        return {
          ...prevList,
          age: event.target.value,
        };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.passData(employeeList);
    setEmployeeList(initialList);
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">Username</label>
        <input
          value={employeeList.name}
          id="userName"
          onChange={inputNameChangeHandler}
          type="text"
          pattern="[A-Za-z]+"
        ></input>
        <label htmlFor="userAge">Age(Years)</label>
        <input
          value={employeeList.age}
          id="userAge"
          onChange={inputAgeChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default EmployeeInfoForm;

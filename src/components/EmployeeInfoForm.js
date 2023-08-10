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
    if (event.target.value.trim() !== "") {
      setEmployeeList((prevList) => {
        return {
          ...prevList,
          name: event.target.value,
          key: Math.random(),
        };
      });
    }else {
      setEmployeeList("");
    }
  };

  const inputAgeChangeHandler = (event) => {
    if (event.target.value > 0) {
      setEmployeeList((prevList) => {
        return {
          ...prevList,
          age: event.target.value.trim(),
        };
      });
    }else{
      setEmployeeList("")
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

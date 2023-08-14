import { useState } from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import ErrorModal from "./ErrorModal";

const EmployeeInfoForm = (props) => {
  const initialInfo = {
    name: "",
    age: "",
    key: "e1",
  };
  const [newEmployeeInfo, setNewEmployeeInfo] = useState(initialInfo);
  const [errorOccured, setErrorOccured] = useState(null);

  const inputNameChangeHandler = (event) => {
    setNewEmployeeInfo((prevList) => {
      return {
        ...prevList,
        name: event.target.value,
        key: Math.random().toString(),
      };
    });
  };

  const inputAgeChangeHandler = (event) => {
    setNewEmployeeInfo((prevList) => {
      return {
        ...prevList,
        age: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      newEmployeeInfo.name.trim().length !== 0 &&
      newEmployeeInfo.age.trim().length !== 0
    ) {
      props.passData(newEmployeeInfo);
      setNewEmployeeInfo(initialInfo);
    } else if (newEmployeeInfo.age.trim() < 0) {
      setErrorOccured({
        title: "Warning!",
        message: "Please enter a positive number",
      });
    } else {
      setErrorOccured({
        title: "Warning",
        message: "Please enter non-empty name and age",
      });
    }
  };
  const clickHandler = () => {
    setErrorOccured(null);
    console.log("clicked");
  };

  return (
    <>
      {errorOccured && (
        <ErrorModal
          title={errorOccured.title}
          message={errorOccured.message}
          clickHandler={clickHandler}
        ></ErrorModal>
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">Username</label>
          <input
            value={newEmployeeInfo.name}
            id="userName"
            onChange={inputNameChangeHandler}
            type="text"
          ></input>
          <label htmlFor="userAge">Age(Years)</label>
          <input
            value={newEmployeeInfo.age}
            id="userAge"
            onChange={inputAgeChangeHandler}
            type="number"
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default EmployeeInfoForm;

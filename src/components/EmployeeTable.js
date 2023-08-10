import Card from "./UI/Card";

const EmployeeTable = (props) => {
  return (
    <Card>
      {props.employeeList.map((data) => (
        <p>
          {data.name} ({data.age} years old)
        </p>
      ))}
    </Card>
  );
};

export default EmployeeTable;

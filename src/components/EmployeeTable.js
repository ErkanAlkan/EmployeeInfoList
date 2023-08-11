import Card from "./UI/Card";
import "./EmployeeTable.css";

const EmployeeTable = (props) => {
  return (
    <Card className="users">
      <ul>
        {props.employeeList.map((data) => (
          <li key={data.key}>
            {data.name} ({data.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default EmployeeTable;

import { useContext } from "react";
import { apiCall } from "../context/JsonAPI";

function Project() {
  const data = useContext(apiCall);

  return (
    <div>
      <h1>Projects:</h1>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.payload.map((item: any) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Project;

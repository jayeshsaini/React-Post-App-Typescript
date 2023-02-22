import { useContext, useState } from "react";
import { apiCall } from "../context/JsonAPI";
import axios from "axios";

type API = {
  success: boolean;
  payload: any;
};

function Project() {
  const data = useContext<API>(apiCall);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://quiz-3-server-nithya-1ww6.vercel.app/projects",
        {
          title,
          description,
          category,
          date: new Date(),
        }
      );
      console.log(response.data);
      setTitle("");
      setDescription("");
      setCategory("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Projects:</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <br />

        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <button type="submit">Create Project</button>
      </form>

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

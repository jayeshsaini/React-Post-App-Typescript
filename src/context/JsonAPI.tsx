import axios from "axios";
import { createContext, useState, useEffect } from "react";

type API = {
  success: boolean;
  payload: any;
};

const apiCall = createContext<API[]>([]);

function JsonAPI() {
  const [data, setData] = useState<API[]>([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        "https://quiz-3-server-nithya-1ww6.vercel.app/projects"
      );
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
    <apiCall.Provider value={data}>
      <div>JsonAPI</div>;
    </apiCall.Provider>
  );
}

export default { JsonAPI, apiCall };

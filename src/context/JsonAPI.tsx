import axios from "axios";
import { createContext, useState, useEffect, ReactNode } from "react";

type API = {
  success: boolean;
  payload: any;
};

type Props = {
  children: ReactNode;
};

export const apiCall = createContext<API>({ success: false, payload: [] });

function JsonAPI({ children }: Props) {
  const [data, setData] = useState<API>({ success: false, payload: [] });

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

  return <apiCall.Provider value={data}>{children}</apiCall.Provider>;
}

export default JsonAPI;

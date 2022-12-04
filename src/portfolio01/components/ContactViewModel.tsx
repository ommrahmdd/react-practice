import { useState } from "react";
interface IContact {
  name: string;
  email: string;
  message: string;
}
export default function ViewModel() {
  let [state, setState] = useState<IContact>({
    name: "",
    email: "",
    message: "",
  });
  let handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return { state, handleChange };
}

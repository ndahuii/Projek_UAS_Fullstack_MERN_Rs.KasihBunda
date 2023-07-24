import { createContext, useState } from "react";

export const DataContext = createContext();

const StateManagement = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const [textAlert, setTextAlert] = useState("info")
  return (
    <DataContext.Provider
      value={{ showAlert, setShowAlert, textAlert, setTextAlert }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default StateManagement;

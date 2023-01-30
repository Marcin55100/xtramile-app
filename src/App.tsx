import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { IProject } from "./models/IProject";
import ProjectsTable from "./components/ProjectsTable";

const App: React.FC = () => {
  //const [todo, setTodo] = useState<string>("");
  const [data, setData] = useState<IProject[]>([]);

  const fetchData = async () => {
    const uri = "/stats/lukaszcoding?apiSecret=i34nvn324gdfg5";
    const response = await axios.get<IProject[]>(uri);
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <span className="heading">Xtramile Projects</span>
      <ProjectsTable data={data}></ProjectsTable>
    </div>
  );
};

export default App;

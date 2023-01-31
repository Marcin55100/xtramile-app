import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { IProject } from "./models/IProject";
import ProjectsTable from "./components/ProjectsTable";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [data, setData] = useState<IProject[]>([]);

  const fetchData = async () => {
    const uri = "/stats/lukaszcoding?apiSecret=i34nvn324gdfg5";
    const response = await axios.get<IProject[]>(uri);
    const filteredData = response.data.filter(
      (project, i, arr) =>
        arr.findIndex((p) => p.Course === project.Course) === i
    );
    const uniqueCourseNames = filteredData.map((f) => f.Course);

    uniqueCourseNames.forEach((c) => {
      let openedCourses = response.data
        .filter((p) => p.Course == c)
        .map((p) => p.OpenedLessonsCount)
        .reduce((acc, curr) => +acc + +curr, 0);
      console.log(openedCourses);
      filteredData.forEach((f) => {
        if (f.Course == c) f.OpenedLessonsCount = openedCourses.toString();
      });
    });

    console.log(filteredData);
    setData(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <span className="heading">Xtramile Projects</span>
      <ProjectsTable data={data} />
    </div>
  );
};

export default App;

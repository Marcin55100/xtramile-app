import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { IProject } from "./models/IProject";
import ProjectsTable from "./components/ProjectsTable";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  filterByCourse,
  getCompletedLessonsForCourse,
  getOpenedLessonsForCourse,
} from "./utils/FilterDataFunctions";

const App: React.FC = () => {
  const [data, setData] = useState<IProject[]>([]);

  const fetchData = async () => {
    const uri = "/stats/lukaszcoding?apiSecret=i34nvn324gdfg5";
    const response = await axios.get<IProject[]>(uri);
    const filteredData = filterByCourse(response.data);
    const uniqueCourseNames = filteredData.map((f) => f.Course);

    uniqueCourseNames.forEach((c) => {
      let openedLessons = getOpenedLessonsForCourse(response.data, c);
      let completedLessons = getCompletedLessonsForCourse(response.data, c);
      filteredData.forEach((f) => {
        if (f.Course == c) {
          f.OpenedLessonsCount = openedLessons.toString();
          f.CompletedLessonsCount = completedLessons;
        }
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

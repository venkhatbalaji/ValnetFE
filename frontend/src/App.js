import { useEffect, useState } from "react";
import TreeView from "./TreeView";
import axios from "axios";
import filterBy from "./filterBy";
import "./App.css";

function App() {
  const [treeData, setTreeData] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("data.json").then((resp) => {
      setData(resp.data);
      setTreeData(resp.data.projects);
    });
  }, []);

  const onQueryChange = (e) => {
    setTreeData(filterBy(data.projects, e.target.value));
  };

  return (
    <>
      <input placeholder="Filter by..." onChange={onQueryChange} />
      <TreeView treeData={treeData} />
    </>
  );
}

export default App;

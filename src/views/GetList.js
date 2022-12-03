import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GetList() {
  const [data, setData] = useState([]);
  const getAll = () => {
    axios.get("https://localhost:7256/todo/GetAllTodo").then((response) => {
      setData(response.data.data);
    });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      {data.map((obj) => {
        return (
          <div>
            <div>Create Time = {obj.createTime}</div>
            <div>Update Time = {obj.updateTime}</div>
            <div>End Time = {obj.endTime}</div>
            <div>Title = {obj.title}</div>
            <div>Body = {obj.body}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

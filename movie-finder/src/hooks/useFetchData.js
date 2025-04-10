import { useState, useEffect } from "react";
export const useFetchData = (page) => {
  const [data, setData] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/movies?page=${page}`
      );
      const res = await response.json();
      setData(res.content);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return data;
};
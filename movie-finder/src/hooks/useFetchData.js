import { useState, useEffect } from "react";
export const useFetchData = () => {
  const [data, setData] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/api/movies'
      );
      const res = await response.json();
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return data;
};
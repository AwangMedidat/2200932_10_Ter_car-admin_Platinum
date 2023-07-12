import React, { useEffect, useState } from "react";
import axios from "axios";
import auth from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { Navbar, Dropdown, DropdownButton, ButtonGroup, Button } from "react-bootstrap";
import NavbarCMS from "../../components/Navbar/NavbarCMS";
import Sidebar from "../../components/Sidebar/Sidebar";
import Pagination from "react-bootstrap/Pagination";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { DatePicker } from "antd";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api-car-rental.binaracademy.org/admin/order/reports?from=2023-05-01&until=2023-06-31", {
          headers: {
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4OTEzODEzMn0.bGL0hlOm8zjiAhwSoHbc4leGQrEOTYbq7ee41ica7jM",
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavbarCMS />
      <Sidebar />
      <DatePicker></DatePicker>
      <Button variant="primary">Go</Button>{" "}
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orderCount" fill="#8884d8" />
      </BarChart>
      <div>
        <Button variant="outline-light">
          <select className="form-select" aria-label="Default select example">
            <option selected>10</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </Button>{" "}
        <Button variant="outline-light">
          <select className="form-select" aria-label="Default select example">
            <option selected>1</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </Button>{" "}
        <Button variant="primary">Go</Button>{" "}
      </div>
      <Pagination className="justify-content-end">
        <Pagination.First />

        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{9}</Pagination.Item>

        <Pagination.Last />
      </Pagination>
    </div>
  );
}

export default Home;

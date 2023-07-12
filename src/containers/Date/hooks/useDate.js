import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function useDate() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    axios.get("https://api-car-rental.binaracademy.org/admin/order/reports?from=2023-05-01&until=2023-06-31").then((response) => {
      setOrder(response.data);
    });
  }, []);

  return {
    order,
    setOrder,
  };
}

export default useDate;

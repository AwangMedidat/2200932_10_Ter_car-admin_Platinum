import axios from "axios";
import TYPES from "../types";

export const handleCar = () => (dispatch) => {
  axios
    .get("https://api-car-rental.binaracademy.org/admin/v2/car?name=Innova&page=1&pageSize=10", {
      headers: {
        "Content-Type": "Application/json",
        accept: "Application/json",
        access_token: " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    })
    .then((res) => {
      dispatch({
        type: TYPES.FETCH_DATA,
        payload: res.data.cars,
      });
    })
    .catch((err) => console.log(err));
};
export const getCar = (id) => (dispatch) => {
  axios
    .get(`https://api-car-rental.binaracademy.org/admin/car/${id}`, {
      headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    })
    .then((res) => {
      dispatch({
        type: TYPES.GET_CAR,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.message));
};

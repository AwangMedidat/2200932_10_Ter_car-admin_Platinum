import axios from "axios";
import TYPES from "../types";

export const getData = () => (dispatch) => {
  axios
    .get("https://api-car-rental.binaracademy.org/admin/v2/car", {
      headers: {
        "Content-Type": "Application/json",
        accept: "Application/json",
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: TYPES.FETCH_DATA,
        payload: res.data.cars,
      });
    })
    .catch((err) => console.log(err));
};

export const getMockData = () => (dispatch) => {
  axios
    .get("http://localhost:3001/admin/car")
    .then((res) => {
      dispatch({
        type: TYPES.FETCH_DATA,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

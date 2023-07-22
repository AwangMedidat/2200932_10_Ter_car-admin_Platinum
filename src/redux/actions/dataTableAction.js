import TYPES from "../types";
import axios from "axios";

export const getDataOrder = () => (dispatch) => {
  axios
    .get("https://api-car-rental.binaracademy.org/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10", {
      headers: {
        "Content-Type": "Application/json",
        accept: "Application/json",
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    })
    .then((res) => {
      dispatch({
        type: TYPES.GET_TABLE_DATA_ORDER,
        payload: res.data.orders,
      });
    })
    .catch((err) => console.log(err));
};

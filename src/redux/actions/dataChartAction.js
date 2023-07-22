import moment from "moment/moment";
import TYPES from "../types";
import axios from "axios";

export const getDataChart = (value) => (dispatch) => {
  axios
    .get("https://api-car-rental.binaracademy.org/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10", {
      headers: {
        "Content-Type": "application/json",
        accept: "Application/json",
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    })
    .then((res) => {
      const dateData = res.data.orders.map((item) => moment(item.start_rent_at).format("D MMM YYYY"));
      const dataFilter = dateData.filter((item) => item.includes(value));
      const dateOnly = dataFilter.map((item) => item);
      dispatch({
        type: TYPES.GET_CHART_DATA_ORDER,
        payload: dateOnly,
      });
    })
    .catch((err) => console.log(err));
};

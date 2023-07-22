import axios from "axios";
import TYPES from "../types";
import swal from "sweetalert";
import auth from "../utils/auth";

export const handleLogin = (payload, setErrMsg, navigate) => {
  return (dispatch) => {
    axios
      .post("https://api-car-rental.binaracademy.org/admin/auth/login", payload)
      .then((res) => {
        // console.log(res.data, "<<<<<<<<<");
        // localStorage.setItem("token", res.data.access_token);
        auth.setAuth(res?.data);
        dispatch({
          type: TYPES.POST_LOGIN,
          payload: res.data,
        });
        swal({
          title: "Welcome!",
          text: "Logged in success",
          icon: "success",
          timer: 1500,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.status === 404) {
          setErrMsg(true);
        } else if (err.response?.status === 400) {
          setErrMsg(true);
        } else {
          setErrMsg("Login Failed");
        }
      });
  };
};

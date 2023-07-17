import axios from "axios";
import TYPES from "../types";
import swal from "sweetalert";

export const handleLogin = (payload, setErrMsg, navigate) => {
  return (dispatch) => {
    axios
      .post("https://api-car-rental.binaracademy.org/admin/auth/login", payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        dispatch({
          type: TYPES.POST_LOGIN,
          payload: res.data.access_token,
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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
  loginStart,
  loginFailure,
} from "../../../redux/login/slice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validation from "../../../components/Validation";

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.login);
  const [formValue, setFormValue] = useState({
    email: null,
    password: null,
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(formValue));

    try {
      dispatch(loginStart());
      const response = await axios.post(
        "https://api-car-rental.binaracademy.org/customer/auth/login",
        formValue
      );
      dispatch(loginSuccess(response.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return {
    formValue,
    setFormValue,
    handleSubmit,
    loading,
    setErrors,
    errors,
  };
}

export default useLogin;

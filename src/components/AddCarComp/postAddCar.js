import axios from "axios";
import swal from "sweetalert";

export const postAddCar = (data, navigate) => {
  axios
    .post(`https://api-car-rental.binaracademy.org/admin/car`, data, {
      headers: {
        access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc",
      },
    })
    .then((res) => {
      if (res.status === 201) {
        swal({
          title: "Saved!",
          text: "Berhasil Menambah Data",
          icon: "success",
          timer: 2000,
        });
        navigate("/dashboard/cars");
      }
    })
    .catch((err) => console.log(err.message));
};

import axios from "axios";
import swal from "sweetalert";
import auth from "../../redux/utils/auth";

export const fetchEditCar = (data, navigate, id) => {
  axios
    .put(`https://api-car-rental.binaracademy.org/admin/car/${id}`, data, {
      headers: {
        access_token: auth.getToken(),
      },
    })
    .then((res) => {
      if (res.status === 200) {
        swal({
          title: "Saved!",
          text: "Berhasil Mengubah Data",
          icon: "success",
          timer: 2000,
        });
        navigate(-1);
      }
    })
    .catch((err) => console.log(err.message));
};

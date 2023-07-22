import { ModalImg } from "../../../assets";
import axios from "axios";
import swal from "sweetalert";
import { Modal, Button } from "react-bootstrap";
import auth from "../../../redux/utils/auth";

const ModalDelete = ({ show, handleClose, carId }) => {
  const handleDelete = (id) => {
    console.log("Id dihapus", carId);
    axios
      .delete(`https://api-car-rental.binaracademy.org/admin/car/${id}`, {
        headers: {
          "Content-Type": "Application/json",
          accept: "Application/json",
          access_token: auth.getToken(),
        },
      })
      .then((res) => {
        console.log(res.status);
        console.log(res);
        if (res.status === 200) {
          swal({
            title: "Deleted!",
            text: "Data berhasil dihapus",
            icon: "success",
            timer: 2000,
          });
          handleClose();
          window.location.reload();
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body className="d-flex justify-content-center align-items-center flex-column p-5">
        <img src={ModalImg} alt="car" />
        <h3 style={{ fontFamily: "Arial", fontWeight: 700, fontStyle: "normal" }}>Menghapus Data Mobil?</h3>
        <p style={{ fontFamily: "Arial", fontStyle: "normal" }}>Setelah dihapus, data mobil tidak dapat dikembalikan, Yakin ingin menghapus?</p>
        <div className="row w-75">
          <div className="col-6">
            <Button onClick={() => handleDelete(carId)} variant="default" size="md" style={{ color: "white", background: "#0D28A6" }} className="mx-2 w-100">
              Ya
            </Button>
          </div>
          <div className="col-6">
            <Button onClick={handleClose} variant="default" size="md" style={{ color: "#0D28A6", borderColor: "#0D28A6" }} className="mx-2 w-100">
              Tidak
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDelete;
